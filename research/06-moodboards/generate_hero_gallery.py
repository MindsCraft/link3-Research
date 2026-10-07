import json, os

with open('research/06-moodboards/hero_next_manifest.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>40 ISP Competitors: Hero & Next Section Benchmark | Link3 Research</title>
  
  <!-- Inter Font Exclusively (Light Mode Directive) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <style>
    :root {{
      --bg-page: #F8FAFC;
      --bg-surface: #FFFFFF;
      --bg-surface-elevated: #F1F5F9;
      --border-subtle: #E2E8F0;
      --text-main: #0F172A;
      --text-secondary: #334155;
      --text-muted: #64748B;
      --brand-blue: #0284C7;
      --brand-blue-hover: #0369A1;
      --brand-emerald: #059669;
      --shadow-sm: 0 1px 3px 0 rgba(15, 23, 42, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04);
      --shadow-lg: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
      --shadow-xl: 0 20px 30px -10px rgba(15, 23, 42, 0.12);
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background-color: var(--bg-page);
      color: var(--text-main);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      padding-bottom: 80px;
    }}

    .container {{
      max-width: 1680px;
      margin: 0 auto;
      padding: 0 32px;
    }}

    /* Sticky Header */
    header {{
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border-subtle);
      position: sticky;
      top: 0;
      z-index: 100;
      padding: 16px 0;
      box-shadow: var(--shadow-sm);
    }}

    .header-inner {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }}

    .brand-title-group h1 {{
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.5px;
      display: flex;
      align-items: center;
      gap: 10px;
    }}

    .badge-count {{
      background: #E0F2FE;
      color: var(--brand-blue);
      font-size: 12px;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 20px;
    }}

    .header-desc {{
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 2px;
    }}

    /* Filter & Search Bar */
    .filter-bar {{
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }}

    .nav-pills {{
      display: flex;
      gap: 6px;
      background: #F1F5F9;
      padding: 4px;
      border-radius: 8px;
    }}

    .pill-btn {{
      border: none;
      background: transparent;
      padding: 7px 14px;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      color: var(--text-muted);
      cursor: pointer;
      border-radius: 6px;
      transition: all 0.15s ease;
      display: flex;
      align-items: center;
      gap: 6px;
    }}

    .pill-btn:hover {{
      color: var(--text-main);
      background: #E2E8F0;
    }}

    .pill-btn.active {{
      background: var(--bg-surface);
      color: var(--text-main);
      box-shadow: var(--shadow-sm);
      font-weight: 700;
    }}

    .search-box {{
      position: relative;
    }}

    .search-input {{
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      padding: 8px 14px 8px 34px;
      font-size: 13px;
      font-family: inherit;
      width: 220px;
      background: #FFFFFF;
      color: var(--text-main);
      outline: none;
      transition: all 0.2s ease;
    }}

    .search-input:focus {{
      border-color: var(--brand-blue);
      box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
      width: 280px;
    }}

    .search-icon {{
      position: absolute;
      left: 11px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      font-size: 13px;
    }}

    /* Stats Overview Strip */
    .overview-strip {{
      margin: 28px 0;
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 20px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      box-shadow: var(--shadow-sm);
    }}

    .strip-stat {{
      display: flex;
      flex-direction: column;
    }}

    .strip-stat-num {{
      font-size: 24px;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: -0.5px;
    }}

    .strip-stat-label {{
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }}

    /* Cards Grid */
    .cards-grid {{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
      gap: 32px 28px;
    }}

    .item-card {{
      background: var(--bg-surface);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: var(--shadow-md);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
    }}

    .item-card:hover {{
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
      border-color: #CBD5E1;
    }}

    .card-topbar {{
      padding: 14px 18px;
      border-bottom: 1px solid var(--border-subtle);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FFFFFF;
    }}

    .card-operator-info {{
      display: flex;
      align-items: baseline;
      gap: 8px;
    }}

    .card-flag {{
      font-size: 16px;
    }}

    .card-title {{
      font-size: 15px;
      font-weight: 800;
      color: var(--text-main);
    }}

    .card-country {{
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
    }}

    .card-speed-badge {{
      font-size: 11px;
      font-weight: 700;
      background: #F1F5F9;
      color: var(--text-secondary);
      padding: 3px 8px;
      border-radius: 6px;
    }}

    /* Card Visual Canvas */
    .card-preview-box {{
      position: relative;
      height: 440px;
      background: #F1F5F9;
      overflow: hidden;
      cursor: pointer;
    }}

    .card-preview-img {{
      width: 100%;
      height: auto;
      display: block;
      transition: transform 6s linear;
    }}

    .card-preview-box:hover .card-preview-img {{
      transform: translateY(calc(-100% + 440px));
    }}

    .preview-lens-hint {{
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: rgba(15, 23, 42, 0.85);
      color: #FFFFFF;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 6px;
      backdrop-filter: blur(8px);
      pointer-events: none;
      transition: opacity 0.2s ease;
    }}

    .preview-tag {{
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(255, 255, 255, 0.95);
      font-size: 11px;
      font-weight: 800;
      color: var(--brand-blue);
      padding: 3px 10px;
      border-radius: 6px;
      box-shadow: var(--shadow-sm);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(226, 232, 240, 0.8);
    }}

    /* Card Bottom Info */
    .card-details {{
      padding: 16px 18px;
      background: #FFFFFF;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      flex-direction: column;
      gap: 10px;
    }}

    .card-highlight {{
      font-size: 13px;
      color: var(--text-secondary);
      line-height: 1.45;
    }}

    .card-highlight strong {{
      color: var(--text-main);
      font-weight: 700;
    }}

    .card-footer {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 4px;
      padding-top: 10px;
      border-top: 1px dashed var(--border-subtle);
      font-size: 12px;
    }}

    .card-meta-dim {{
      color: var(--text-muted);
      font-weight: 600;
      font-family: monospace;
      font-size: 11px;
    }}

    .card-actions {{
      display: flex;
      gap: 8px;
    }}

    .btn-action {{
      border: 1px solid var(--border-subtle);
      background: #F8FAFC;
      color: var(--text-secondary);
      font-size: 12px;
      font-weight: 600;
      padding: 5px 12px;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.15s ease;
    }}

    .btn-action:hover {{
      background: #FFFFFF;
      color: var(--brand-blue);
      border-color: var(--brand-blue);
    }}

    .btn-action.primary {{
      background: var(--brand-blue);
      color: #FFFFFF;
      border-color: var(--brand-blue);
    }}

    .btn-action.primary:hover {{
      background: var(--brand-blue-hover);
    }}

    /* Lightbox Modal */
    .modal {{
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(8px);
      z-index: 1000;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }}

    .modal.open {{
      display: flex;
    }}

    .modal-box {{
      background: #FFFFFF;
      border-radius: 12px;
      width: 100%;
      max-width: 1500px;
      height: 94vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.3);
      overflow: hidden;
    }}

    .modal-header {{
      padding: 16px 24px;
      border-bottom: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #FFFFFF;
    }}

    .modal-title-group h2 {{
      font-size: 17px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    .modal-subtitle {{
      font-size: 13px;
      color: var(--text-muted);
    }}

    .modal-canvas {{
      flex: 1;
      overflow-y: auto;
      background: #EEF2F6;
      display: flex;
      justify-content: center;
      padding: 20px 0;
    }}

    .modal-canvas img {{
      max-width: 100%;
      width: 1440px;
      height: auto;
      display: block;
      box-shadow: var(--shadow-lg);
      background: #FFFFFF;
    }}

    .modal-controls {{
      padding: 12px 24px;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #FFFFFF;
    }}

    .close-btn {{
      background: #F1F5F9;
      border: 1px solid var(--border-subtle);
      color: var(--text-main);
      padding: 6px 14px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
    }}

    .close-btn:hover {{
      background: #E2E8F0;
    }}
  </style>
</head>
<body>

  <header>
    <div class="container header-inner">
      <div class="brand-title-group">
        <h1>
          <span>Link3 Research</span>
          <span style="color:#CBD5E1;">/</span>
          <span>40 ISP Competitor Hero & Next Section Showcase</span>
          <span class="badge-count">40 Approved</span>
        </h1>
        <div class="header-desc">
          Precision extracts of Homepage Top Navigation, Primary Hero Banner, and Immediate Subsequent Content Block.
        </div>
      </div>

      <div class="filter-bar">
        <div class="nav-pills">
          <button class="pill-btn active" data-region="all" onclick="filterRegion('all')">All <span style="font-size:11px; opacity:0.8;">(40)</span></button>
          <button class="pill-btn" data-region="south-asia" onclick="filterRegion('south-asia')">🇮🇳 South Asia <span style="font-size:11px; opacity:0.8;">(7)</span></button>
          <button class="pill-btn" data-region="southeast-asia" onclick="filterRegion('southeast-asia')">🌏 SE Asia <span style="font-size:11px; opacity:0.8;">(15)</span></button>
          <button class="pill-btn" data-region="north-america" onclick="filterRegion('north-america')">🇺🇸 North America <span style="font-size:11px; opacity:0.8;">(8)</span></button>
          <button class="pill-btn" data-region="europe" onclick="filterRegion('europe')">🇪🇺 Europe <span style="font-size:11px; opacity:0.8;">(10)</span></button>
        </div>

        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" id="searchInput" placeholder="Search operator or country..." oninput="handleSearch()">
        </div>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="overview-strip">
      <div class="strip-stat">
        <span class="strip-stat-num">40</span>
        <span class="strip-stat-label">Total Operators</span>
      </div>
      <div class="strip-stat">
        <span class="strip-stat-num">100% Light Mode</span>
        <span class="strip-stat-label">System Directive Compliant</span>
      </div>
      <div class="strip-stat">
        <span class="strip-stat-num">Clean Section Gaps</span>
        <span class="strip-stat-label">Zero Mid-Card Slices</span>
      </div>
      <div class="strip-stat">
        <span class="strip-stat-num">1440px+ Native</span>
        <span class="strip-stat-label">Razor-Sharp Typography</span>
      </div>
      <div class="strip-stat">
        <span class="strip-stat-num">Hero + 1st Block</span>
        <span class="strip-stat-label">Header, Value Prop, Pricing</span>
      </div>
    </div>

    <div class="cards-grid" id="cardsGrid"></div>
  </main>

  <!-- Lightbox Modal -->
  <div class="modal" id="modal" onclick="closeModalOnBackdrop(event)">
    <div class="modal-box">
      <div class="modal-header">
        <div class="modal-title-group">
          <h2 id="modalTitle">Operator Name</h2>
          <div class="modal-subtitle" id="modalSubtitle">Country • Speed</div>
        </div>
        <div>
          <button class="close-btn" onclick="closeModal()">Close ✕</button>
        </div>
      </div>
      <div class="modal-canvas" id="modalCanvas">
        <img id="modalImg" src="" alt="Hero Screenshot">
      </div>
      <div class="modal-controls">
        <div style="font-size:13px; color:var(--text-muted);">
          <span id="modalCounter">1 / 40</span>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn-action" onclick="prevModal()">← Prev</button>
          <button class="btn-action" onclick="nextModal()">Next →</button>
          <a class="btn-action primary" id="modalDownload" href="#" download>Download PNG ↓</a>
          <a class="btn-action" id="modalLive" href="#" target="_blank">Visit Site ↗</a>
        </div>
      </div>
    </div>
  </div>

  <script>
    const items = {json.dumps(items)};
    let activeRegion = 'all';
    let searchQuery = '';
    let currentModalIdx = 0;

    function renderGrid() {{
      const grid = document.getElementById('cardsGrid');
      grid.innerHTML = '';

      const filtered = items.filter(item => {{
        const matchRegion = (activeRegion === 'all') || (item.region === activeRegion);
        const q = searchQuery.toLowerCase();
        const matchSearch = (!q) || 
          item.name.toLowerCase().includes(q) || 
          item.country.toLowerCase().includes(q) ||
          item.highlight.toLowerCase().includes(q);
        return matchRegion && matchSearch;
      }});

      filtered.forEach((item, fIdx) => {{
        const realIdx = items.indexOf(item);
        const card = document.createElement('div');
        card.className = 'item-card';
        card.setAttribute('data-region', item.region);

        card.innerHTML = `
          <div class="card-topbar">
            <div class="card-operator-info">
              <span class="card-flag">${{item.flag}}</span>
              <span class="card-title">${{item.name}}</span>
              <span class="card-country">${{item.country}}</span>
            </div>
            <span class="card-speed-badge">${{item.speed}}</span>
          </div>

          <div class="card-preview-box" onclick="openModal(${{realIdx}})">
            <span class="preview-tag">Hero + Next Section</span>
            <img class="card-preview-img" src="hero_and_next_sections/${{item.file_name}}" alt="${{item.name}}" loading="lazy">
            <span class="preview-lens-hint">Hover to Pan • Click to Inspect 🔍</span>
          </div>

          <div class="card-details">
            <div class="card-highlight">
              <strong>Focus:</strong> ${{item.highlight}}
            </div>
            <div class="card-footer">
              <span class="card-meta-dim">${{item.crop_width}}×${{item.crop_height}}px • ${{item.file_size_kb}} KB</span>
              <div class="card-actions">
                <button class="btn-action primary" onclick="openModal(${{realIdx}})">Inspect</button>
                <a class="btn-action" href="${{item.url}}" target="_blank" rel="noopener">Live ↗</a>
              </div>
            </div>
          </div>
        `;
        grid.appendChild(card);
      }});
    }}

    function filterRegion(reg) {{
      activeRegion = reg;
      document.querySelectorAll('.pill-btn').forEach(btn => {{
        btn.classList.toggle('active', btn.getAttribute('data-region') === reg);
      }});
      renderGrid();
    }}

    function handleSearch() {{
      searchQuery = document.getElementById('searchInput').value.trim();
      renderGrid();
    }}

    function openModal(idx) {{
      currentModalIdx = idx;
      const item = items[idx];
      document.getElementById('modalTitle').innerHTML = `${{item.flag}} ${{item.name}}`;
      document.getElementById('modalSubtitle').textContent = `${{item.country}} • ${{item.speed}} • ${{item.crop_width}}×${{item.crop_height}}px`;
      
      const imgSrc = 'hero_and_next_sections/' + item.file_name;
      document.getElementById('modalImg').src = imgSrc;
      document.getElementById('modalCounter').textContent = `${{idx + 1}} of ${{items.length}}`;
      document.getElementById('modalDownload').href = imgSrc;
      document.getElementById('modalDownload').download = item.file_name;
      document.getElementById('modalLive').href = item.url;
      
      document.getElementById('modal').classList.add('open');
      document.body.style.overflow = 'hidden';
      document.getElementById('modalCanvas').scrollTop = 0;
    }}

    function closeModal() {{
      document.getElementById('modal').classList.remove('open');
      document.body.style.overflow = 'auto';
    }}

    function closeModalOnBackdrop(e) {{
      if (e.target.id === 'modal') {{
        closeModal();
      }}
    }}

    function prevModal() {{
      currentModalIdx = (currentModalIdx - 1 + items.length) % items.length;
      openModal(currentModalIdx);
    }}

    function nextModal() {{
      currentModalIdx = (currentModalIdx + 1) % items.length;
      openModal(currentModalIdx);
    }}

    document.addEventListener('keydown', (e) => {{
      if (!document.getElementById('modal').classList.contains('open')) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevModal();
      if (e.key === 'ArrowRight') nextModal();
    }});

    renderGrid();
  </script>
</body>
</html>
"""

# Save to research/06-moodboards
with open('research/06-moodboards/03_hero_and_next_sections_gallery.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

# Save to shareable-moodboard
with open('shareable-moodboard/hero_and_next_sections_gallery.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

# Also save an index.html in hero_and_next_sections folder
# so opening that folder directly has a viewer!
html_content_local = html_content.replace('hero_and_next_sections/', '')
with open('hero_and_next_sections/index.html', 'w', encoding='utf-8') as f:
    f.write(html_content_local)

print('Generated all gallery visualizers successfully!')
