export function renderAdminHtml(): string {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Link3 CMS Engine — Admin Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            background: '#090d16',
            surface: '#0f172a',
            'surface-elevated': '#17223b',
            border: 'rgba(255, 255, 255, 0.1)',
            primary: {
              DEFAULT: '#6366f1',
              500: '#6366f1',
              600: '#4f46e5',
            },
            accent: {
              cyan: '#06b6d4',
              emerald: '#10b981',
              rose: '#f43f5e',
            }
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #090d16; color: #f8fafc; font-family: system-ui, sans-serif; }
    .glass { background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
    .nav-btn.active { background-color: rgba(99, 102, 241, 0.15); color: #818cf8; border-color: rgba(99, 102, 241, 0.4); }
  </style>
</head>
<body class="min-h-screen flex flex-col antialiased">
  <!-- Topbar -->
  <header class="h-16 border-b border-border glass flex items-center justify-between px-6 sticky top-0 z-30">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-600/30">
        <i class="fa-solid fa-cube text-sm"></i>
      </div>
      <div>
        <h1 class="font-bold text-sm text-white tracking-tight flex items-center gap-2">
          <span>LINK3 CMS ENGINE</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">LIVE API</span>
        </h1>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <a href="http://localhost:3000" target="_blank" class="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors">
        <span>View Live Frontend</span>
        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
      </a>
      <span class="text-slate-700">|</span>
      <div class="flex items-center gap-2 text-xs text-slate-400 font-mono">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Storage: db.json</span>
      </div>
    </div>
  </header>

  <div class="flex-1 flex overflow-hidden">
    <!-- Sidebar -->
    <aside class="w-64 border-r border-border glass p-4 flex flex-col justify-between hidden md:flex">
      <nav class="space-y-1">
        <button onclick="switchTab('overview')" id="nav-overview" class="nav-btn active w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent transition-all">
          <i class="fa-solid fa-chart-line w-4"></i>
          <span>System Overview</span>
        </button>
        <button onclick="switchTab('articles')" id="nav-articles" class="nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent transition-all">
          <i class="fa-solid fa-newspaper w-4"></i>
          <span>Articles & Insights</span>
        </button>
        <button onclick="switchTab('case-studies')" id="nav-case-studies" class="nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent transition-all">
          <i class="fa-solid fa-briefcase w-4"></i>
          <span>Case Studies</span>
        </button>
        <button onclick="switchTab('services')" id="nav-services" class="nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent transition-all">
          <i class="fa-solid fa-layer-group w-4"></i>
          <span>Capabilities</span>
        </button>
        <button onclick="switchTab('inquiries')" id="nav-inquiries" class="nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent transition-all">
          <i class="fa-solid fa-inbox w-4"></i>
          <span>Inquiries & CRM</span>
          <span id="badge-inquiries" class="ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">0</span>
        </button>
        <button onclick="switchTab('settings')" id="nav-settings" class="nav-btn w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 border border-transparent transition-all">
          <i class="fa-solid fa-gear w-4"></i>
          <span>Global Settings</span>
        </button>
      </nav>

      <div class="p-3 rounded-xl bg-surface-elevated border border-border text-[11px] text-slate-400 space-y-1">
        <div class="font-bold text-white">Agentic Architecture</div>
        <div class="text-slate-500 font-mono text-[10px]">Strict Contract Synchronization Active</div>
      </div>
    </aside>

    <!-- Main Content Container -->
    <main class="flex-1 p-6 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
      <!-- 1. OVERVIEW TAB -->
      <section id="tab-overview" class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white tracking-tight">System Telemetry & Content Overview</h2>
            <p class="text-xs text-slate-400">Real-time status of records managed in the CMS engine</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="glass p-5 rounded-2xl border border-border">
            <div class="text-xs font-mono uppercase text-slate-400">Total Insights</div>
            <div id="stat-articles" class="text-3xl font-bold text-white font-mono mt-2">-</div>
            <div class="text-[11px] text-indigo-400 mt-1 font-mono">Published technical essays</div>
          </div>
          <div class="glass p-5 rounded-2xl border border-border">
            <div class="text-xs font-mono uppercase text-slate-400">Case Studies</div>
            <div id="stat-cases" class="text-3xl font-bold text-cyan-400 font-mono mt-2">-</div>
            <div class="text-[11px] text-slate-400 mt-1 font-mono">Enterprise client deployments</div>
          </div>
          <div class="glass p-5 rounded-2xl border border-border">
            <div class="text-xs font-mono uppercase text-slate-400">Capabilities</div>
            <div id="stat-services" class="text-3xl font-bold text-white font-mono mt-2">-</div>
            <div class="text-[11px] text-slate-400 mt-1 font-mono">Core system offerings</div>
          </div>
          <div class="glass p-5 rounded-2xl border border-border">
            <div class="text-xs font-mono uppercase text-slate-400">Active Inquiries</div>
            <div id="stat-inquiries" class="text-3xl font-bold text-emerald-400 font-mono mt-2">-</div>
            <div class="text-[11px] text-slate-400 mt-1 font-mono">Recorded client briefs</div>
          </div>
        </div>

        <div class="glass rounded-2xl border border-border p-6 space-y-4">
          <h3 class="font-bold text-sm text-white">Recent Ingestion Activity</h3>
          <div id="recent-inquiries-list" class="space-y-3 text-xs text-slate-400 font-mono">
            <p>Loading activity logs...</p>
          </div>
        </div>
      </section>

      <!-- 2. ARTICLES TAB -->
      <section id="tab-articles" class="space-y-6 hidden">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white tracking-tight">Articles & Engineering Insights</h2>
            <p class="text-xs text-slate-400">Create, update, or remove technical essays</p>
          </div>
          <button onclick="openNewArticleModal()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all flex items-center gap-2">
            <i class="fa-solid fa-plus text-xs"></i>
            <span>Compose Article</span>
          </button>
        </div>

        <div class="glass rounded-2xl border border-border overflow-hidden">
          <table class="w-full text-left text-xs">
            <thead class="bg-surface-elevated text-slate-400 font-mono uppercase border-b border-border">
              <tr>
                <th class="p-4">Title & Slug</th>
                <th class="p-4">Category</th>
                <th class="p-4">Author</th>
                <th class="p-4">Date</th>
                <th class="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="articles-table-body" class="divide-y divide-border/60 text-slate-300">
              <tr><td colspan="5" class="p-4 text-center">Loading articles...</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 3. CASE STUDIES TAB -->
      <section id="tab-case-studies" class="space-y-6 hidden">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white tracking-tight">Case Studies & Production Deployments</h2>
            <p class="text-xs text-slate-400">Manage client portfolio entries, metrics, and architecture stories</p>
          </div>
          <button onclick="openNewCaseModal()" class="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all flex items-center gap-2">
            <i class="fa-solid fa-plus text-xs"></i>
            <span>New Case Study</span>
          </button>
        </div>

        <div class="glass rounded-2xl border border-border overflow-hidden">
          <table class="w-full text-left text-xs">
            <thead class="bg-surface-elevated text-slate-400 font-mono uppercase border-b border-border">
              <tr>
                <th class="p-4">Title & Client</th>
                <th class="p-4">Category</th>
                <th class="p-4">Top Metric</th>
                <th class="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody id="cases-table-body" class="divide-y divide-border/60 text-slate-300">
              <tr><td colspan="4" class="p-4 text-center">Loading case studies...</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 4. SERVICES TAB -->
      <section id="tab-services" class="space-y-6 hidden">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white tracking-tight">System Capabilities & Offerings</h2>
            <p class="text-xs text-slate-400">Manage capabilities rendered on the client homepage</p>
          </div>
        </div>

        <div id="services-cards-container" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p class="text-xs text-slate-400">Loading capabilities...</p>
        </div>
      </section>

      <!-- 5. INQUIRIES TAB -->
      <section id="tab-inquiries" class="space-y-6 hidden">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white tracking-tight">Inquiries & Client CRM</h2>
            <p class="text-xs text-slate-400">Incoming project briefs from the client web application</p>
          </div>
        </div>

        <div class="glass rounded-2xl border border-border overflow-hidden">
          <table class="w-full text-left text-xs">
            <thead class="bg-surface-elevated text-slate-400 font-mono uppercase border-b border-border">
              <tr>
                <th class="p-4">Lead</th>
                <th class="p-4">Interest & Scope</th>
                <th class="p-4">Message</th>
                <th class="p-4">Status</th>
                <th class="p-4 text-right">Date</th>
              </tr>
            </thead>
            <tbody id="inquiries-table-body" class="divide-y divide-border/60 text-slate-300">
              <tr><td colspan="5" class="p-4 text-center">Loading inquiries...</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 6. SETTINGS TAB -->
      <section id="tab-settings" class="space-y-6 hidden">
        <div>
          <h2 class="text-2xl font-bold text-white tracking-tight">Global System Settings</h2>
          <p class="text-xs text-slate-400">Configure site identity, announcement banners, and brand metadata</p>
        </div>

        <form id="settings-form" onsubmit="saveSettings(event)" class="glass p-6 md:p-8 rounded-2xl border border-border max-w-2xl space-y-6">
          <div class="space-y-2">
            <label class="text-xs font-mono uppercase text-slate-400">Brand Name</label>
            <input type="text" id="setting-name" class="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500" />
          </div>

          <div class="space-y-2">
            <label class="text-xs font-mono uppercase text-slate-400">Hero Tagline</label>
            <input type="text" id="setting-tagline" class="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500" />
          </div>

          <div class="border-t border-border pt-6 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-xs font-bold text-white">Announcement Top Banner</h4>
                <p class="text-[11px] text-slate-400">Renders high-priority broadcast at top of frontend</p>
              </div>
              <input type="checkbox" id="setting-announcement-enabled" class="w-4 h-4 rounded text-indigo-600 bg-surface border-border" />
            </div>

            <div class="space-y-2">
              <label class="text-xs font-mono uppercase text-slate-400">Banner Text</label>
              <input type="text" id="setting-announcement-text" class="w-full bg-surface border border-border rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500" />
            </div>
          </div>

          <button type="submit" class="px-6 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all">
            Save System Settings
          </button>
        </form>
      </section>
    </main>
  </div>

  <!-- Modal for New Article -->
  <div id="modal-article" class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="glass w-full max-w-xl rounded-2xl border border-border p-6 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between pb-3 border-b border-border">
        <h3 class="text-base font-bold text-white">Compose Technical Article</h3>
        <button onclick="closeModal('modal-article')" class="text-slate-400 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <form onsubmit="submitNewArticle(event)" class="space-y-4">
        <div>
          <label class="text-xs font-mono text-slate-400">Article Title</label>
          <input required id="new-art-title" type="text" placeholder="e.g. Architecting Scalable Workflows" class="w-full bg-surface border border-border rounded-xl px-3.5 py-2 text-xs text-white" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-xs font-mono text-slate-400">Category</label>
            <select id="new-art-category" class="w-full bg-surface border border-border rounded-xl px-3.5 py-2 text-xs text-white">
              <option value="Architecture">Architecture</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Design Systems">Design Systems</option>
              <option value="Agentic AI">Agentic AI</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-mono text-slate-400">Reading Time</label>
            <input id="new-art-reading" type="text" value="5 min read" class="w-full bg-surface border border-border rounded-xl px-3.5 py-2 text-xs text-white" />
          </div>
        </div>
        <div>
          <label class="text-xs font-mono text-slate-400">Excerpt / Abstract</label>
          <textarea required id="new-art-excerpt" rows="2" placeholder="Brief summary of the article..." class="w-full bg-surface border border-border rounded-xl px-3.5 py-2 text-xs text-white"></textarea>
        </div>
        <div>
          <label class="text-xs font-mono text-slate-400">Article Content (Markdown)</label>
          <textarea required id="new-art-content" rows="6" placeholder="# Title&#10;&#10;Write article paragraphs here..." class="w-full bg-surface border border-border rounded-xl px-3.5 py-2 text-xs text-white font-mono"></textarea>
        </div>
        <button type="submit" class="w-full py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg">
          Publish to CMS Engine
        </button>
      </form>
    </div>
  </div>

  <script>
    // App State
    let currentData = {
      siteConfig: null,
      articles: [],
      caseStudies: [],
      services: [],
      inquiries: []
    };

    function switchTab(tabId) {
      document.querySelectorAll('main > section').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
      document.getElementById('tab-' + tabId).classList.remove('hidden');
      document.getElementById('nav-' + tabId).classList.add('active');
    }

    async function loadAll() {
      try {
        const [cfg, arts, cases, srvs, inqs] = await Promise.all([
          fetch('/api/site-config').then(r => r.json()),
          fetch('/api/articles').then(r => r.json()),
          fetch('/api/case-studies').then(r => r.json()),
          fetch('/api/services').then(r => r.json()),
          fetch('/api/inquiries').then(r => r.json())
        ]);

        currentData.siteConfig = cfg.data;
        currentData.articles = arts.data;
        currentData.caseStudies = cases.data;
        currentData.services = srvs.data;
        currentData.inquiries = inqs.data;

        renderStats();
        renderArticles();
        renderCases();
        renderServices();
        renderInquiries();
        renderSettings();
      } catch (err) {
        console.error('Failed to load CMS data:', err);
      }
    }

    function renderStats() {
      document.getElementById('stat-articles').textContent = currentData.articles.length;
      document.getElementById('stat-cases').textContent = currentData.caseStudies.length;
      document.getElementById('stat-services').textContent = currentData.services.length;
      document.getElementById('stat-inquiries').textContent = currentData.inquiries.length;
      document.getElementById('badge-inquiries').textContent = currentData.inquiries.length;

      const recentBox = document.getElementById('recent-inquiries-list');
      if (currentData.inquiries.length === 0) {
        recentBox.innerHTML = '<p class="text-slate-500">No client inquiries received yet. Submit one from the frontend contact form!</p>';
      } else {
        recentBox.innerHTML = currentData.inquiries.slice(0, 5).map(inq => \`
          <div class="flex items-center justify-between p-3 rounded-xl bg-surface border border-border">
            <div>
              <span class="text-white font-bold">\${inq.name}</span>
              <span class="text-slate-500"> (\${inq.company || 'Private'})</span>
              <div class="text-[11px] text-slate-400 mt-0.5">\${inq.serviceInterest}</div>
            </div>
            <div class="text-right">
              <span class="px-2 py-0.5 rounded text-[10px] uppercase font-mono \${inq.status === 'new' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-300'}">\${inq.status}</span>
              <div class="text-[10px] text-slate-500 mt-1">\${new Date(inq.createdAt).toLocaleDateString()}</div>
            </div>
          </div>
        \`).join('');
      }
    }

    function renderArticles() {
      const tbody = document.getElementById('articles-table-body');
      tbody.innerHTML = currentData.articles.map(a => \`
        <tr class="hover:bg-white/5 transition-colors">
          <td class="p-4">
            <div class="font-bold text-white">\${a.title}</div>
            <div class="text-[11px] font-mono text-slate-500">/insights/\${a.slug}</div>
          </td>
          <td class="p-4"><span class="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-mono">\${a.category}</span></td>
          <td class="p-4">\${a.author.name}</td>
          <td class="p-4 font-mono">\${new Date(a.publishedAt).toLocaleDateString()}</td>
          <td class="p-4 text-right">
            <button onclick="deleteArticle('\${a.id}')" class="p-1.5 text-slate-400 hover:text-rose-400 transition-colors" title="Delete Article">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      \`).join('');
    }

    function renderCases() {
      const tbody = document.getElementById('cases-table-body');
      tbody.innerHTML = currentData.caseStudies.map(c => \`
        <tr class="hover:bg-white/5 transition-colors">
          <td class="p-4">
            <div class="font-bold text-white">\${c.title}</div>
            <div class="text-[11px] font-mono text-slate-500">\${c.client}</div>
          </td>
          <td class="p-4"><span class="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">\${c.category}</span></td>
          <td class="p-4 font-mono text-cyan-400">\${c.metrics[0] ? c.metrics[0].value + ' ' + c.metrics[0].label : 'N/A'}</td>
          <td class="p-4 text-right">
            <button onclick="deleteCaseStudy('\${c.id}')" class="p-1.5 text-slate-400 hover:text-rose-400 transition-colors" title="Delete Case Study">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      \`).join('');
    }

    function renderServices() {
      const container = document.getElementById('services-cards-container');
      container.innerHTML = currentData.services.map(s => \`
        <div class="glass p-5 rounded-2xl border border-border space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="font-bold text-white text-base">\${s.title}</h4>
            <span class="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300">\${s.badge || 'Standard'}</span>
          </div>
          <p class="text-xs text-slate-400">\${s.summary}</p>
          <div class="pt-2 border-t border-border flex flex-wrap gap-1">
            \${s.deliverables.map(d => \`<span class="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-slate-300">\${d}</span>\`).join('')}
          </div>
        </div>
      \`).join('');
    }

    function renderInquiries() {
      const tbody = document.getElementById('inquiries-table-body');
      if (currentData.inquiries.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="p-6 text-center text-slate-500">No client submissions in the queue yet.</td></tr>';
        return;
      }
      tbody.innerHTML = currentData.inquiries.map(inq => \`
        <tr class="hover:bg-white/5 transition-colors">
          <td class="p-4">
            <div class="font-bold text-white">\${inq.name}</div>
            <div class="text-[11px] font-mono text-slate-400">\${inq.email}</div>
            <div class="text-[10px] text-slate-500">\${inq.company || 'Independent'}</div>
          </td>
          <td class="p-4">
            <div class="font-semibold text-indigo-300">\${inq.serviceInterest}</div>
            <div class="text-[11px] font-mono text-slate-400">\${inq.budgetRange || 'Unspecified'}</div>
          </td>
          <td class="p-4 max-w-xs">
            <p class="text-slate-300 truncate" title="\${inq.message}">\${inq.message}</p>
          </td>
          <td class="p-4">
            <select onchange="updateInqStatus('\${inq.id}', this.value)" class="bg-surface border border-border rounded-lg px-2 py-1 text-xs text-slate-300">
              <option value="new" \${inq.status === 'new' ? 'selected' : ''}>New</option>
              <option value="in_review" \${inq.status === 'in_review' ? 'selected' : ''}>In Review</option>
              <option value="contacted" \${inq.status === 'contacted' ? 'selected' : ''}>Contacted</option>
              <option value="archived" \${inq.status === 'archived' ? 'selected' : ''}>Archived</option>
            </select>
          </td>
          <td class="p-4 text-right font-mono text-slate-500">\${new Date(inq.createdAt).toLocaleDateString()}</td>
        </tr>
      \`).join('');
    }

    function renderSettings() {
      if (!currentData.siteConfig) return;
      document.getElementById('setting-name').value = currentData.siteConfig.name;
      document.getElementById('setting-tagline').value = currentData.siteConfig.tagline;
      document.getElementById('setting-announcement-enabled').checked = !!currentData.siteConfig.announcement?.enabled;
      document.getElementById('setting-announcement-text').value = currentData.siteConfig.announcement?.text || '';
    }

    async function saveSettings(e) {
      e.preventDefault();
      const updates = {
        name: document.getElementById('setting-name').value,
        tagline: document.getElementById('setting-tagline').value,
        announcement: {
          enabled: document.getElementById('setting-announcement-enabled').checked,
          text: document.getElementById('setting-announcement-text').value,
          linkText: currentData.siteConfig.announcement?.linkText || 'Explore',
          href: currentData.siteConfig.announcement?.href || '/insights'
        }
      };

      await fetch('/api/site-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      alert('Settings successfully updated and persisted to CMS!');
      loadAll();
    }

    function openNewArticleModal() {
      document.getElementById('modal-article').classList.remove('hidden');
    }
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }

    async function submitNewArticle(e) {
      e.preventDefault();
      const title = document.getElementById('new-art-title').value;
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const newArt = {
        slug,
        title,
        excerpt: document.getElementById('new-art-excerpt').value,
        content: document.getElementById('new-art-content').value,
        coverImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
        category: document.getElementById('new-art-category').value,
        readingTime: document.getElementById('new-art-reading').value,
        tags: ['CMS', 'Architecture', 'TypeScript'],
        featured: false,
        publishedAt: new Date().toISOString(),
        author: {
          id: 'auth-cms',
          name: 'CMS Editor',
          role: 'Technical Contributor',
          avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
        }
      };

      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArt)
      });
      if (res.ok) {
        closeModal('modal-article');
        loadAll();
      } else {
        alert('Failed to save article.');
      }
    }

    async function deleteArticle(id) {
      if (!confirm('Are you sure you want to delete this article?')) return;
      await fetch('/api/articles/' + id, { method: 'DELETE' });
      loadAll();
    }

    async function deleteCaseStudy(id) {
      if (!confirm('Are you sure you want to delete this case study?')) return;
      await fetch('/api/case-studies/' + id, { method: 'DELETE' });
      loadAll();
    }

    async function updateInqStatus(id, status) {
      await fetch('/api/inquiries/' + id + '/status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      loadAll();
    }

    // Initialize
    loadAll();
  </script>
</body>
</html>`;
}
