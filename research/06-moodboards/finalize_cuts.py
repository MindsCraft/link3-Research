import json, os
from PIL import Image, ImageDraw

with open('research/06-moodboards/clean_cuts.json', 'r', encoding='utf-8') as f:
    clean = json.load(f)

# Explicit verified overrides based on visual inspection
overrides = {
    '01': 2790,  # JioFiber: after "View all postpaid plans"
    '05': 2510,  # Excitel: after "Wi-Fi + OTT" plans table
    '09': 2864,  # Biznet: after "Our Company" stats
    '13': 2370,  # Converge: after IPLC/Cloud Direct cards
    '22': 1308,  # Viettel: full image (1308px total)
    '26': 1960,  # Google Fiber: after plans quiz card
    '27': 2620,  # AT&T: after All-Fi Pro add-on cards & disclaimers
    '36': 1545,  # Freebox: after featured Freebox & 5G offers
    '46': 2480,  # Swisscom: after modular plan cards & subscription link
}

final_cuts = []
for item in clean:
    cid = item['id']
    slug = item['slug']
    raw_y = overrides.get(cid, item['clean_cut_y'])
    final_cuts.append({
        'id': cid,
        'name': item['name'],
        'slug': slug,
        'cut_y': raw_y,
        'total_h': item['total_h']
    })

with open('research/06-moodboards/final_cuts.json', 'w', encoding='utf-8') as f:
    json.dump(final_cuts, f, indent=2)

print('Updated final_cuts.json successfully.')
