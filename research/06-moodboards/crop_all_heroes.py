import json, os
from PIL import Image

# Directories
src_dir = 'shareable-moodboard/screenshots'
dest_dirs = [
    'research/06-moodboards/hero_and_next_sections',
    'shareable-moodboard/hero_and_next_sections',
    'hero_and_next_sections'
]

for d in dest_dirs:
    os.makedirs(d, exist_ok=True)

with open('research/06-moodboards/final_cuts.json', 'r', encoding='utf-8') as f:
    final_cuts = json.load(f)

# Also load metadata from competitors_40.json
with open('research/06-moodboards/competitors_40.json', 'r', encoding='utf-8') as f:
    comps = json.load(f)
comp_map = {c['id']: c for c in comps}

crop_results = []
print(f"{'#':2} {'ID':2} {'Operator':26} {'Country':14} {'Orig Dim':11} {'Crop Dim':11} {'Saved KB':8}")
print("=" * 85)

for idx, item in enumerate(final_cuts, 1):
    cid = item['id']
    slug = item['slug']
    fname = f"{slug}.png"
    src_path = os.path.join(src_dir, fname)
    
    if not os.path.exists(src_path):
        print(f"ERROR: {src_path} does not exist!")
        continue
        
    img = Image.open(src_path)
    w, h = img.size
    cut_y = min(h, item['cut_y'])
    
    # Crop from top (y=0) to cut_y
    cropped = img.crop((0, 0, w, cut_y))
    
    # Save to all destination directories
    for d in dest_dirs:
        dest_path = os.path.join(d, fname)
        cropped.save(dest_path, format='PNG', optimize=True)
        
    file_size_kb = round(os.path.getsize(os.path.join(dest_dirs[0], fname)) / 1024, 1)
    
    c_info = comp_map.get(cid, {})
    country = c_info.get('country', '')
    
    crop_results.append({
        'id': cid,
        'name': item['name'],
        'slug': slug,
        'country': country,
        'region': c_info.get('region', ''),
        'regionName': c_info.get('regionName', ''),
        'flag': c_info.get('flag', ''),
        'url': c_info.get('url', ''),
        'speed': c_info.get('speed', ''),
        'highlight': c_info.get('highlight', ''),
        'orig_width': w,
        'orig_height': h,
        'crop_width': w,
        'crop_height': cut_y,
        'file_size_kb': file_size_kb,
        'file_name': fname
    })
    
    print(f"{idx:2} [{cid:2}] {item['name']:26} {country:14} {w}x{h:<5} {w}x{cut_y:<5} {file_size_kb:6} KB")

# Save summary manifest
with open('research/06-moodboards/hero_next_manifest.json', 'w', encoding='utf-8') as f:
    json.dump(crop_results, f, indent=2)

with open('shareable-moodboard/hero_next_manifest.json', 'w', encoding='utf-8') as f:
    json.dump(crop_results, f, indent=2)

print("=" * 85)
print(f"Successfully generated all {len(crop_results)} Hero + Next Section screenshots across all target folders!")
