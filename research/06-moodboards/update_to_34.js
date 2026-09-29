const fs = require('fs');
const path = require('path');

const moodboardScriptPath = path.join(__dirname, 'build_moodboard_html.js');
let scriptContent = fs.readFileSync(moodboardScriptPath, 'utf8');

const screenshotsDir = path.join(__dirname, 'screenshots');
const existingFiles = fs.readdirSync(screenshotsDir).filter(f => f.endsWith('.png'));

// Extract COMPETITORS array
const match = scriptContent.match(/const COMPETITORS = (\[[\s\S]*?\]);\n\n\/\/ Generate the complete HTML/);
if (!match) {
  console.error("Failed to match COMPETITORS");
  process.exit(1);
}

const allCompetitors = eval(match[1]);
const filtered = allCompetitors.filter(c => existingFiles.includes(c.slug + '.png'));

// Replace COMPETITORS array in scriptContent
const newCompetitorsBlock = `const COMPETITORS = ${JSON.stringify(filtered, null, 2)};\n\n// Generate the complete HTML`;
scriptContent = scriptContent.replace(/const COMPETITORS = \[[\s\S]*?\];\n\n\/\/ Generate the complete HTML/, newCompetitorsBlock);

// Update counts and strings in template
scriptContent = scriptContent
  .replace(/50 Elite Global & Emerging ISP Audits/g, "34 Curated Global & Emerging ISP Benchmarks")
  .replace(/<span class="stat-badge"><span class="dot"><\/span> 50 Live Benchmarks<\/span>/g, '<span class="stat-badge"><span class="dot"></span> 34 Live Benchmarks</span>')
  .replace(/<span class="stat-badge">25 Emerging Leaders<\/span>/g, '<span class="stat-badge">17 Emerging Leaders</span>')
  .replace(/<span class="stat-badge">25 Global Innovators<\/span>/g, '<span class="stat-badge">17 Global Innovators</span>')
  .replace(/25 High-Population Emerging Market Giants/g, "17 High-Population Emerging Market Giants")
  .replace(/25 World-Class International Disruptors/g, "17 World-Class International Disruptors")
  .replace(/All Benchmarks <span class="badge" id="countAll">50<\/span>/g, 'All Benchmarks <span class="badge" id="countAll">34</span>')
  .replace(/Emerging Market Leaders <span class="badge" id="countEmerging">25<\/span>/g, 'Emerging Market Leaders <span class="badge" id="countEmerging">17</span>')
  .replace(/Global World-Class Leaders <span class="badge" id="countGlobal">25<\/span>/g, 'Global World-Class Leaders <span class="badge" id="countGlobal">17</span>')
  .replace(/Showing 50 of 50 competitors/g, "Showing 34 of 34 competitors")
  .replace(/1 of 50/g, "1 of 34")
  .replace(/Comparing 25 high-density emerging market leaders with 25 world-class global altnets/g, "Comparing 17 high-density emerging market leaders with 17 world-class global altnets");

fs.writeFileSync(moodboardScriptPath, scriptContent);
console.log("Updated build_moodboard_html.js with 34 competitors!");

// Run build_moodboard_html.js
require('./build_moodboard_html.js');
