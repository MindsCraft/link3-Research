import json

with open('research/06-moodboards/section_gap_analysis.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

for d in data:
    hc = [f"{g[0]}(sc={g[1]})" for g in d['hero_candidates'][:3]]
    nc = [f"{g[0]}(sc={g[1]})" for g in d['next_candidates'][-3:]]
    print(f"[{d['id']:2}] {d['name']:26} dim={d['raw_dim']:11} scaled_h={d['scaled_h']:5}")
    print(f"     Hero: {', '.join(hc) if hc else 'None'}")
    print(f"     Next: {', '.join(nc) if nc else 'None'}")
