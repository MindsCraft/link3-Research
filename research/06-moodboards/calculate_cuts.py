import json, os
from PIL import Image
import numpy as np

with open('research/06-moodboards/competitors_40.json', 'r', encoding='utf-8') as f:
    comps = json.load(f)

src_dir = 'shareable-moodboard/screenshots'

# Let's inspect each competitor and refine cut_y
def find_natural_cut(comp):
    fname = comp['slug'] + '.png'
    img = Image.open(os.path.join(src_dir, fname)).convert('RGB')
    w, h = img.size
    scale = 1440.0 / w
    
    # Special cases:
    # 22_viettel_vn: h=1308, whole image is hero + next
    if comp['id'] == '22':
        return h, 'Full page (1308px - Hero + quick package grid)'
    # 09_biznet_id: we found 2866
    if comp['id'] == '09':
        return 2866, 'End of Our Company stats section before dark value props'
        
    # Search range: between scaled 1400 and scaled 2500
    min_raw = int(1400 / scale)
    max_raw = min(h - 5, int(2500 / scale))
    
    # Step 4
    step = 4
    strip_h = (max_raw - min_raw) // step
    crop = img.crop((0, min_raw, w, min_raw + strip_h * step))
    thumb = crop.resize((120, strip_h), Image.Resampling.BOX)
    arr = np.array(thumb, dtype=float)
    
    # std of row across columns
    col_std = arr.std(axis=1).mean(axis=1) # shape (strip_h,)
    row_means = arr.mean(axis=1)
    
    # Find local minima in col_std (quiet whitespace gaps)
    # Give slight preference to rows with very low std and around scaled 1700-2100
    best_raw = None
    best_score = 999999
    
    for i in range(2, strip_h - 2):
        raw_y = min_raw + i * step
        scaled_y = raw_y * scale
        std_val = col_std[i]
        
        # Penalize being too far from typical 1750px
        dist_penalty = abs(scaled_y - 1800) * 0.015
        
        # Check if adjacent rows are also quiet (means a real gap, not a thin line)
        local_quietness = (col_std[i-1] + col_std[i] + col_std[i+1]) / 3.0
        
        score = local_quietness + dist_penalty
        if score < best_score:
            best_score = score
            best_raw = raw_y
            
    return best_raw, f'Optimal whitespace gap (std={round(col_std[(best_raw-min_raw)//step], 1)})'

results = {}
for c in comps:
    raw_y, note = find_natural_cut(c)
    results[c['id']] = {
        'name': c['name'],
        'slug': c['slug'],
        'raw_y': raw_y,
        'note': note
    }

with open('research/06-moodboards/cut_recommendations.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print('Finished preliminary cut recommendations for all 40 sites.')
