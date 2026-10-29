const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'trail_assets');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = [
  'BLUE.png',
  'GREEN.png',
  'PINK.png',
  'PURPLE.png',
  'YELLOW.png',
  'BLUE 2.png',
  'GRREN 2.png',
  'PINK 2.png',
  'PURPLE 2.png',
  'YEllOW 2.png'
];

async function downloadFile(name) {
  const encName = encodeURIComponent(name);
  const url = `https://dejiajetomobi.com/TRAIL%20DATA/${encName}`;
  const dest = path.join(outDir, name);
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Saved ${name} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function downloadAudio() {
  const url = `https://dejiajetomobi.com/tick.wav`;
  const dest = path.join(outDir, 'tick.wav');
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`Saved tick.wav (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', reject);
  });
}

(async () => {
  for (const f of files) {
    await downloadFile(f);
  }
  try {
    await downloadAudio();
  } catch (e) {
    console.log('Audio fetch error:', e.message);
  }
  console.log('Done downloading all trail assets!');
})();
