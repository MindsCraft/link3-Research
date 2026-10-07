import json, os
from PIL import Image
import numpy as np

with open('research/06-moodboards/competitors_40.json', 'r', encoding='utf-8') as f:
    comps = json.load(f)

src_dir = 'shareable-moodboard/screenshots'

def find_gaps(fname):
    img = Image.open(os.path.join(src_dir, fname)).convert('RGB')
    w, h = img.size
    scale = 1440.0 / w
    
    max_raw = min(h, int(3500 / scale))
    step = 4
    sample_h = max_raw // step
    crop = img.crop((0, 0, w, sample_h * step))
    thumb = crop.resize((120, sample_h), Image.Resampling.BOX)
    arr = np.array(thumb, dtype=float)
    
    col_std = arr.std(axis=1).mean(axis=1) # shape (sample_h,)
    
    quiet = []
    for i, std in enumerate(col_std):
        if std < 12:
            raw_y = i * step
            scaled_y = int(raw_y * scale)
            quiet.append((raw_y, scaled_y, std))
            
    clusters = []
    if quiet:
        cur = [quiet[0]]
        for pt in quiet[1:]:
            if pt[0] <= cur[-1][0] + step * 2:
                cur.append(pt)
            else:
                if len(cur) >= 2:
                    mid = cur[len(cur)//2]
                    clusters.append((mid[0], mid[1], min(p[2] for p in cur)))
                cur = [pt]
        if len(cur) >= 2:
            mid = cur[len(cur)//2]
            clusters.append((mid[0], mid[1], min(p[2] for p in cur)))
            
    return w, h, scale, clusters

report = []
for c in comps:
    fname = c['slug'] + '.png'
    w, h, scale, clusters = find_gaps(fname)
    hero_gaps = [cl for cl in clusters if 550 <= cl[1] <= 1250]
    next_gaps = [cl for cl in clusters if 1350 <= cl[1] <= 2450]
    report.append({
        'id': c['id'],
        'name': c['name'],
        'slug': c['slug'],
        'fname': fname,
        'raw_dim': f'{w}x{h}',
        'scaled_h': int(h * scale),
        'hero_candidates': hero_gaps,
        'next_candidates': next_gaps
    })

for r in report:
    print(f"[{r['id']}] {r['name']:28} total_scaled={r['scaled_h']:4}")
    hg = [f"raw={g[0]}, sc={g[1]}" for g in r['hero_candidates']]
    ng = [f"raw={g[0]}, sc={g[1]}" for g in r['next_candidates']]
    print(f"    hero_gaps: {hg}")
    print(f"    next_gaps: {ng}")

with open('research/06-moodboards/section_gap_analysis.json', 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2)
