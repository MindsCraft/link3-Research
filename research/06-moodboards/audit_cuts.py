import json, os
from PIL import Image
import numpy as np

with open('research/06-moodboards/cut_recommendations.json', 'r', encoding='utf-8') as f:
    cuts = json.load(f)

src_dir = 'shareable-moodboard/screenshots'

report = []
for cid, info in sorted(cuts.items(), key=lambda x: int(x[0])):
    fname = info['slug'] + '.png'
    img = Image.open(os.path.join(src_dir, fname)).convert('RGB')
    w, h = img.size
    cut_y = info['raw_y']
    
    # check wide range +- 120 pixels around cut_y
    r_wide_start = max(0, cut_y - 120)
    r_wide_end = min(h, cut_y + 120)
    crop_wide = img.crop((0, r_wide_start, w, r_wide_end))
    arr_wide = np.array(crop_wide, dtype=float)
    stds_wide = arr_wide.std(axis=1).mean(axis=1)
    
    # find all rows with std < 2.0 (pure solid background)
    solid_indices = np.where(stds_wide < 2.0)[0]
    
    if len(solid_indices) > 0:
        # choose the solid row closest to original cut_y
        dist_to_center = np.abs(solid_indices - 120)
        best_idx = solid_indices[np.argmin(dist_to_center)]
        clean_cut_y = r_wide_start + int(best_idx)
        min_std = stds_wide[best_idx]
        status = 'PERFECT_SOLID'
    else:
        # choose lowest std
        best_idx = np.argmin(stds_wide)
        clean_cut_y = r_wide_start + int(best_idx)
        min_std = stds_wide[best_idx]
        status = 'MIN_VARIANCE'
        
    report.append({
        'id': cid,
        'name': info['name'],
        'slug': info['slug'],
        'orig_cut_y': cut_y,
        'clean_cut_y': clean_cut_y,
        'min_std': round(float(min_std), 2),
        'status': status,
        'total_h': h
    })

print(f"{'ID':2} {'Slug':24} {'OrigY':6} {'CleanY':6} {'Std':5} {'Status':14}")
print("-" * 65)
for r in report:
    print(f"{r['id']:2} {r['slug']:24} {r['orig_cut_y']:6} {r['clean_cut_y']:6} {r['min_std']:5.2f} {r['status']:14}")

with open('research/06-moodboards/clean_cuts.json', 'w', encoding='utf-8') as f:
    json.dump(report, f, indent=2)
