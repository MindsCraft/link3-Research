import json, os
from PIL import Image, ImageDraw

with open('research/06-moodboards/cut_recommendations.json', 'r', encoding='utf-8') as f:
    cuts = json.load(f)

src_dir = 'shareable-moodboard/screenshots'
slice_dir = 'research/06-moodboards/boundary_slices'
os.makedirs(slice_dir, exist_ok=True)

report = []
for cid, info in cuts.items():
    fname = info['slug'] + '.png'
    img = Image.open(os.path.join(src_dir, fname)).convert('RGB')
    w, h = img.size
    cut_y = info['raw_y']
    
    # Slice 250px above and 250px below
    top = max(0, cut_y - 250)
    bot = min(h, cut_y + 250)
    
    slice_img = img.crop((0, top, w, bot))
    draw = ImageDraw.Draw(slice_img)
    line_y = cut_y - top
    draw.line([(0, line_y), (w, line_y)], fill=(255, 0, 0), width=4)
    
    # Save preview slice resized to width 800 for quick viewing
    slice_thumb = slice_img.resize((800, int((bot - top) * 800 / w)))
    slice_path = os.path.join(slice_dir, f"{info['slug']}_slice.png")
    slice_thumb.save(slice_path)
    
print('All 40 boundary slices generated in research/06-moodboards/boundary_slices')
