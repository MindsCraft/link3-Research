const fs = require('fs');
const path = require('path');

const contentPath = 'C:/Users/Izhaan/.gemini/antigravity-ide/brain/7db18e5c-687d-46d0-ae29-dd1c8154a442/.system_generated/steps/9/content.md';
const content = fs.readFileSync(contentPath, 'utf8');

// Extract SVG path
let svgPath = '';
const pathMatch = content.match(/<path d="([^"]+)" fill="black"/);
if (pathMatch) {
  svgPath = pathMatch[1];
  console.log('Found SVG path, length:', svgPath.length);
} else {
  console.error('Could not find SVG path');
}

// Read trail assets as Base64
const assetsDir = path.join(__dirname, '..', 'trail_assets');
const imageDefs = [
  { file: 'BLUE.png', colorTag: 'blue', setTag: 'primary' },
  { file: 'GREEN.png', colorTag: 'green', setTag: 'primary' },
  { file: 'PINK.png', colorTag: 'pink', setTag: 'primary' },
  { file: 'PURPLE.png', colorTag: 'purple', setTag: 'primary' },
  { file: 'YELLOW.png', colorTag: 'yellow', setTag: 'primary' },
  { file: 'BLUE 2.png', colorTag: 'blue', setTag: 'secondary' },
  { file: 'GRREN 2.png', colorTag: 'green', setTag: 'secondary' },
  { file: 'PINK 2.png', colorTag: 'pink', setTag: 'secondary' },
  { file: 'PURPLE 2.png', colorTag: 'purple', setTag: 'secondary' },
  { file: 'YEllOW 2.png', colorTag: 'yellow', setTag: 'secondary' }
];

const processedImages = imageDefs.map(def => {
  const filePath = path.join(assetsDir, def.file);
  const base64 = fs.readFileSync(filePath).toString('base64');
  return {
    src: `data:image/png;base64,${base64}`,
    alt: '',
    colorTag: def.colorTag,
    setTag: def.setTag
  };
});

let tickWavBase64 = '';
const tickPath = path.join(assetsDir, 'tick.wav');
if (fs.existsSync(tickPath)) {
  tickWavBase64 = `data:audio/wav;base64,${fs.readFileSync(tickPath).toString('base64')}`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Deji Ajetomobi — Designer</title>
  <meta name="description" content="London-based designer with experience across brand and product design, currently working in the design systems team at Wise." />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <style>
    /* CSS Reset & Variables */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-ibm-plex-sans: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      --faq-illustration-trail-size: min(4.45vw, 64px);
    }

    html {
      height: 100%;
    }

    body {
      width: 100%;
      min-height: 100%;
      background-color: #FFFFFF;
      color: #000000;
      font-family: var(--font-inter);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a, button {
      -webkit-tap-highlight-color: transparent;
    }

    /* Top Navigation with Drafting Ruler */
    .nav {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      align-items: center;
      gap: 10px;
      padding-top: 16px;
      padding-bottom: 8px;
      overflow: clip;
      user-select: none;
    }

    .nav-wrapper {
      display: flex;
      flex-direction: column;
      flex: none;
      justify-content: center;
      align-items: stretch;
      gap: 16px;
      width: 720px;
      cursor: grab;
      position: relative;
    }

    @media (max-width: 768px) {
      .nav-wrapper {
        width: 100%;
        padding: 0 16px;
      }
    }

    .nav-wrapper[data-dragging="true"],
    .nav-wrapper[data-dragging="true"] * {
      cursor: grabbing !important;
      user-select: none;
    }

    /* Drafting Ruler Lines */
    .ruler-lines {
      display: block;
      width: 100%;
      height: 24px;
      min-height: 24px;
      position: relative;
      overflow: hidden;
    }

    .ruler-lines::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 8px;
      background-image: linear-gradient(90deg, transparent 0 6px, #9a9a9a 6px 7px, transparent 7px 13px);
      background-position: top;
      background-repeat: repeat-x;
      background-size: 13px 8px;
      mask-image: linear-gradient(90deg, #000 0 calc(50% - 1px), transparent calc(50% - 1px) calc(50% + 1px), #000 calc(50% + 1px) 100%);
      -webkit-mask-image: linear-gradient(90deg, #000 0 calc(50% - 1px), transparent calc(50% - 1px) calc(50% + 1px), #000 calc(50% + 1px) 100%);
      z-index: 0;
    }

    .ruler-lines::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 24px;
      background: #000000;
      transform: translateX(-0.5px);
      z-index: 1;
    }

    /* Draggable Nav Viewport */
    .nav-viewport {
      display: flex;
      align-items: center;
      width: 100%;
      position: relative;
    }

    .active-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #E8E8E8;
      border-radius: 200px;
      width: 68px;
      height: 32px;
      z-index: 0;
      pointer-events: none;
      transition: width 0.35s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    .nav-scroller {
      position: relative;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      -ms-overflow-style: none;
      scroll-snap-type: x mandatory;
      overscroll-behavior-x: contain;
      touch-action: pan-x;
      cursor: grab;
      z-index: 1;
    }

    .nav-scroller::-webkit-scrollbar {
      display: none;
    }

    .nav-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 40px;
      width: max-content;
      padding-left: calc(50% - 34px);
      padding-right: calc(50% - 34px);
    }

    .nav-brand-item {
      display: flex;
      align-items: center;
      flex: none;
      scroll-snap-align: center;
    }

    .nav-brand {
      display: grid;
      justify-items: center;
      padding: 4px 8px;
      background: transparent;
      border: 0;
      cursor: pointer;
      font-family: var(--font-ibm-plex-sans);
      font-size: 14px;
      font-weight: 400;
      color: #767676;
      white-space: nowrap;
      transition: color 0.2s ease, font-size 0.2s ease;
    }

    .nav-brand:hover {
      text-decoration: underline;
    }

    .nav-brand--active {
      color: #000000;
      font-size: 16px;
      font-weight: 500;
    }

    /* Main Page Content */
    .page {
      flex: 1 0 0;
      padding: 48px 32px 16px;
      display: flex;
      flex-direction: column;
    }

    @media (max-width: 480px) {
      .page {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    .about-page {
      display: flex;
      flex-direction: column;
      flex: 1 0 0;
      justify-content: space-between;
      align-self: stretch;
    }

    @media (min-width: 801px) {
      .about-page {
        justify-content: flex-start;
        min-height: 0;
      }
    }

    /* 4-Column Editorial Layout */
    .about-content {
      display: flex;
      align-self: stretch;
      align-items: flex-start;
      gap: 32px;
      width: 100%;
    }

    @media (min-width: 481px) and (max-width: 800px) {
      .about-content {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 32px;
      }
    }

    @media (max-width: 480px) {
      .about-content {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 32px;
      }
    }

    .ab-content {
      display: flex;
      flex-direction: column;
      flex: 1 0 0;
      align-items: flex-start;
      gap: 8px;
    }

    .ab-content.flipped {
      display: flex;
      text-align: right;
      align-items: flex-end;
    }

    .about-title {
      color: #000000;
      font-family: var(--font-inter);
      font-size: 20px;
      font-weight: 500;
      line-height: 121.1%;
    }

    .about-description {
      color: #000000;
      font-family: var(--font-inter);
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
    }

    .inline-link {
      color: #000000;
      text-decoration: underline;
      cursor: pointer;
    }

    .inline-link:hover {
      opacity: 0.75;
    }

    /* Interactive Trail Canvas Box / Footer */
    .faqIllustrationTrail {
      isolation: isolate;
      position: relative;
      overflow-x: clip;
    }

    .about-footer {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      align-items: stretch;
      margin-top: 80px;
    }

    @media (min-width: 801px) {
      .about-footer {
        flex: 1 1 0;
        min-height: 0;
        margin-top: 0;
        overflow: clip;
      }
    }

    .faqIllustrationTrail__layer {
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      display: block;
    }

    /* Trail Spawning Items */
    .faqIllustrationTrail__item {
      position: absolute;
      z-index: 1;
      width: var(--faq-illustration-trail-size, min(4.45vw, 64px));
      height: var(--faq-illustration-trail-size, min(4.45vw, 64px));
      object-fit: contain;
      pointer-events: none;
      user-select: none;
      -webkit-user-select: none;
      transform-origin: 50% 50%;
      will-change: transform;
      filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08));
    }

    .about-footer-content {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      align-items: flex-start;
      gap: 32px;
      width: 100%;
    }

    @media (min-width: 801px) {
      .about-footer-content {
        z-index: auto;
        flex: auto;
        justify-content: flex-end;
        min-height: 0;
        position: static;
      }
    }

    /* Social Links Chips */
    .social-links {
      display: flex;
      flex-wrap: wrap;
      flex: 1 0 0;
      align-content: center;
      align-items: center;
      gap: 4px;
      position: relative;
      z-index: 2;
    }

    @media (min-width: 801px) {
      .social-links {
        flex: none;
      }
    }

    .social-link {
      color: #000000;
      background: rgba(165, 165, 165, 0.2);
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      font-family: var(--font-ibm-plex-sans);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-decoration: none;
      transition: background 0.15s ease, transform 0.15s ease;
    }

    .social-link:hover {
      background: rgba(165, 165, 165, 0.35);
      transform: translateY(-1px);
    }

    /* Massive Blackletter SVG Logo */
    .big-logo {
      display: flex;
      justify-content: center;
      align-self: stretch;
      align-items: center;
      width: 100%;
      position: relative;
      z-index: 0;
      line-height: 0;
    }

    .big-logo svg {
      width: 100%;
      height: auto;
      display: block;
    }
  </style>
</head>
<body class="inter ibm-plex-sans">

  <!-- Header Nav with Ruler -->
  <header class="nav" id="main-nav">
    <div class="nav-wrapper" id="nav-wrapper">
      <div class="ruler-lines" aria-hidden="true"></div>
      <div class="nav-viewport" id="nav-viewport">
        <div class="active-container" id="active-container" aria-hidden="true"></div>
        <div class="nav-scroller" id="nav-scroller">
          <nav class="nav-content" aria-label="Primary navigation" id="nav-content">
            <div class="nav-brand-item nav-brand-item--active">
              <a href="#" class="nav-brand nav-brand--active" data-index="0" data-label="About" aria-current="page"><span>About</span></a>
            </div>
            <div class="nav-brand-item">
              <a href="#" class="nav-brand" data-index="1" data-label="Design"><span>Design</span></a>
            </div>
            <div class="nav-brand-item">
              <a href="#" class="nav-brand" data-index="2" data-label="Articles"><span>Articles</span></a>
            </div>
            <div class="nav-brand-item">
              <a href="#" class="nav-brand" data-index="3" data-label="& Engineering"><span>& Engineering</span></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <!-- Page Content -->
  <main class="page about-page">
    <div class="about-content">
      
      <!-- Column 1: Intro -->
      <div class="ab-content">
        <h2 class="about-title">Deji Ajetomobi</h2>
        <p class="about-description">
          A London-based designer with experience across brand &amp; product design.
          Currently works as a designer in the design-systems team at Wise. <br/>
          Building <a class="inline-link" href="https://www.yescheff.co/" target="_blank" rel="noopener noreferrer">Yescheff.co</a>
          and curating <a class="inline-link" href="https://the-torsche.webflow.io/" target="_blank" rel="noopener noreferrer">thetorsche.com</a>
        </p>
      </div>

      <!-- Column 2: Case studies (Flipped) -->
      <div class="ab-content flipped">
        <h2 class="about-title">Case studies</h2>
        <p class="about-description">
          <a href="#yescheff" class="inline-link">YesCheff</a> <br/>
          <a href="#finy" class="inline-link">Finy</a><br/>
          <a href="#deskhq" class="inline-link">Deskhq</a> <br/>
          <a href="#ams-sma" class="inline-link">AMS &amp; SMA</a> <br/>
          <a href="#see-more" class="inline-link">See more..</a>
        </p>
      </div>

      <!-- Column 3: Experience -->
      <div class="ab-content">
        <h2 class="about-title">Experience</h2>
        <p class="about-description">
          Wise: Product designer (2024 - present)<br/>
          Escape:  Brand &amp; Digital designer (2022 -2024)<br/>
          Orbit Collective: Graphic designer (2020 - 2021) <br/>
          Freelance designer (2018 - 2024)
        </p>
      </div>

      <!-- Column 4: Talks & Features (Flipped) -->
      <div class="ab-content flipped">
        <h2 class="about-title">Talks, Interviews &amp; Features</h2>
        <p class="about-description">
          <a class="inline-link" href="https://www.creativeboom.com/inspiration/deji-ajetomobi-on-how-the-torsche-is-illuminating-africas-design-landscape/" target="_blank" rel="noopener noreferrer">Creative boom</a> <br/>
          <a class="inline-link" href="https://www.behance.net/douglasjehtoms" target="_blank" rel="noopener noreferrer">Behance gallery</a><br/>
          D&amp;AD Wise open house (2025 &amp; 2026)<br/>
          <a class="inline-link" href="https://www.instagram.com/reel/DVQu8WJiOW6/" target="_blank" rel="noopener noreferrer">Lagosmeet</a> <br/>
          <a class="inline-link" href="https://thecreativesnote.substack.com/p/the-torsche-to-redefine-african-design-narrative" target="_blank" rel="noopener noreferrer">The Creative Note</a><br/>
          <a class="inline-link" href="https://africa.com/deji-ajetomobi-on-how-the-torsche-is-illuminating-africas-design-landscape" target="_blank" rel="noopener noreferrer">Africa.com</a>
        </p>
      </div>

    </div>

    <!-- Interactive Footer Container ("The Box" with Mouse Trail) -->
    <footer class="faqIllustrationTrail about-footer" id="interactive-trail-box" style="--faq-illustration-trail-size: min(4.45vw, 64px);">
      <div class="faqIllustrationTrail__layer about-footer-trail" id="trail-layer" aria-hidden="true"></div>
      
      <div class="faqIllustrationTrail__content about-footer-content">
        <div class="social-links">
          <a class="social-link" href="mailto:ajetomobideji@gmail.com">Mail</a>
          <a class="social-link" href="https://www.linkedin.com/in/digital-designer-ajetomobideji" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="social-link" href="https://www.behance.net/douglasjehtoms" target="_blank" rel="noopener noreferrer">Behance</a>
          <a class="social-link" href="https://www.instagram.com/jeh_toms/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a class="social-link" href="https://medium.com/@brandstudiong" target="_blank" rel="noopener noreferrer">Medium</a>
        </div>

        <div class="big-logo">
          <svg width="100%" height="auto" viewBox="0 0 1416 254" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_deji_logo)">
              <path d="${svgPath}" fill="black"></path>
            </g>
            <defs>
              <clipPath id="clip0_deji_logo">
                <rect width="1416" height="253.173" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </footer>
  </main>

  <!-- Interactive Scripts -->
  <script>
    // Audio Web Audio Context for Nav Ticks
    const tickAudioData = "${tickWavBase64}";
    let audioCtx = null;
    let tickBuffer = null;

    function initAudio() {
      if (!audioCtx && tickAudioData) {
        try {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (AudioContextClass) {
            audioCtx = new AudioContextClass();
            fetch(tickAudioData)
              .then(res => res.arrayBuffer())
              .then(buf => audioCtx.decodeAudioData(buf))
              .then(decoded => { tickBuffer = decoded; })
              .catch(() => {});
          }
        } catch (e) {}
      }
    }

    function playTick() {
      if (!audioCtx) initAudio();
      if (audioCtx && tickBuffer) {
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        try {
          const src = audioCtx.createBufferSource();
          const gain = audioCtx.createGain();
          src.buffer = tickBuffer;
          gain.gain.value = 0.6;
          src.connect(gain);
          gain.connect(audioCtx.destination);
          src.start();
        } catch (e) {}
      }
    }

    // ------------------------------------------------------------------------
    // ACCURATE FaqIllustrationTrail ENGINE (100% Reverse-Engineered Algorithm)
    // ------------------------------------------------------------------------
    (function initIllustrationTrail() {
      const container = document.getElementById('interactive-trail-box');
      const trailLayer = document.getElementById('trail-layer');
      if (!container || !trailLayer) return;

      const images = ${JSON.stringify(processedImages)};

      // Exact parameters from original compiled React component
      const spawnDistance = 35;       // Math.hypot distance threshold
      const lifespan = 750;           // ms before start of scale-down exit
      const removalDelay = 50;        // ms pacing between queue removals
      const enterDuration = 750;      // ms
      const exitDuration = 1000;      // ms
      const enterEasing = 'cubic-bezier(.07,.5,.5,1)';
      const exitEasing = 'cubic-bezier(.87,0,.13,1)';
      const rotationRange = 50;       // (random - 0.5) * 50 -> -25 to +25 deg
      const enableScrollTrail = true;
      const scrollInterval = 50;

      // Trail state
      const queue = [];
      const mouse = { x: 0, y: 0, lastX: 0, lastY: 0 };
      const flags = {
        isMouseMoving: false,
        isCursorInContainer: false,
        lastRemovalTime: 0,
        lastScrollTime: 0,
        isScrolling: false,
        scrollTicking: false
      };

      let rafId = null;
      let mouseStopTimer = null;
      let scrollStopTimer = null;
      let lastColorTag = null;
      let cycleQueue = [];

      // Set-Cycle selection algorithm:
      // Groups by setTag ('primary' vs 'secondary') and colorTag ('blue', 'green', 'pink', etc.)
      // Shuffles colors so you get varied colors without adjacent repeats
      function generateShuffledCycle(imgList, lastTag) {
        const setMap = new Map();
        const setKeys = [];
        const allColorTags = [];
        const seenColors = new Set();

        imgList.forEach((img, idx) => {
          const setTag = img.setTag || '__default';
          const colorTag = img.colorTag || ('__color_' + idx);
          if (!setMap.has(setTag)) {
            setMap.set(setTag, new Map());
            setKeys.push(setTag);
          }
          const cMap = setMap.get(setTag);
          if (!cMap.has(colorTag)) cMap.set(colorTag, img);
          if (!seenColors.has(colorTag)) {
            seenColors.add(colorTag);
            allColorTags.push(colorTag);
          }
        });

        // Fisher-Yates shuffle
        for (let i = allColorTags.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allColorTags[i], allColorTags[j]] = [allColorTags[j], allColorTags[i]];
        }

        // Avoid consecutive repeat with lastColorTag
        if (allColorTags.length > 1 && allColorTags[0] === lastTag) {
          allColorTags.push(allColorTags.shift());
        }

        return setKeys.flatMap(sKey => {
          const cMap = setMap.get(sKey);
          return allColorTags.map(cTag => cMap.get(cTag)).filter(Boolean);
        });
      }

      function getNextImage() {
        if (cycleQueue.length === 0) {
          cycleQueue = generateShuffledCycle(images, lastColorTag);
        }
        return cycleQueue.shift();
      }

      function isPointInContainer(cx, cy) {
        const rect = container.getBoundingClientRect();
        return cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
      }

      function hasTraveledEnough() {
        return Math.hypot(mouse.x - mouse.lastX, mouse.y - mouse.lastY) > spawnDistance;
      }

      function spawnElement() {
        const imgData = getNextImage();
        if (!imgData) return;

        lastColorTag = imgData.colorTag || null;
        const rotation = (Math.random() - 0.5) * rotationRange;
        const rect = container.getBoundingClientRect();
        const posX = mouse.x - rect.left;
        const posY = mouse.y - rect.top;

        const imgEl = document.createElement('img');
        imgEl.className = 'faqIllustrationTrail__item';
        imgEl.src = imgData.src;
        imgEl.alt = '';
        imgEl.setAttribute('aria-hidden', 'true');
        imgEl.draggable = false;
        imgEl.style.left = posX + 'px';
        imgEl.style.top = posY + 'px';
        imgEl.style.transform = 'translate(-50%, -50%) rotate(' + rotation + 'deg) scale(0)';
        imgEl.style.transition = 'transform ' + enterDuration + 'ms ' + enterEasing;

        trailLayer.appendChild(imgEl);

        // Animate in to scale(1)
        requestAnimationFrame(() => {
          imgEl.style.transform = 'translate(-50%, -50%) rotate(' + rotation + 'deg) scale(1)';
        });

        queue.push({
          element: imgEl,
          rotation: rotation,
          removeTime: Date.now() + lifespan
        });
      }

      function checkMouseSpawn() {
        if (flags.isCursorInContainer && flags.isMouseMoving && hasTraveledEnough()) {
          mouse.lastX = mouse.x;
          mouse.lastY = mouse.y;
          spawnElement();
        }
      }

      function spawnOnScroll() {
        if (!flags.isCursorInContainer) return;
        const offset = spawnDistance + 10;
        mouse.lastX += offset * (Math.random() > 0.5 ? 1 : -1);
        mouse.lastY += offset * (Math.random() > 0.5 ? 1 : -1);
        spawnElement();
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
      }

      function processRemovalQueue() {
        const now = Date.now();
        if (now - flags.lastRemovalTime < removalDelay || queue.length === 0) return;
        const item = queue[0];
        if (now < item.removeTime) return;

        queue.shift();
        item.element.style.transition = 'transform ' + exitDuration + 'ms ' + exitEasing;
        item.element.style.transform = 'translate(-50%, -50%) rotate(' + item.rotation + 'deg) scale(0)';
        flags.lastRemovalTime = now;

        setTimeout(() => {
          if (item.element && item.element.parentNode) {
            item.element.remove();
          }
        }, exitDuration);
      }

      function renderLoop() {
        checkMouseSpawn();
        processRemovalQueue();
        rafId = requestAnimationFrame(renderLoop);
      }

      // Event Listeners
      function onMouseMove(e) {
        initAudio();
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        flags.isCursorInContainer = isPointInContainer(mouse.x, mouse.y);

        if (flags.isCursorInContainer) {
          flags.isMouseMoving = true;
          clearTimeout(mouseStopTimer);
          mouseStopTimer = setTimeout(() => {
            flags.isMouseMoving = false;
          }, 100);
        }
      }

      function onScroll() {
        flags.isCursorInContainer = isPointInContainer(mouse.x, mouse.y);
        if (flags.isCursorInContainer) {
          flags.isMouseMoving = true;
          mouse.lastX += (Math.random() - 0.5) * 10;
          clearTimeout(scrollStopTimer);
          scrollStopTimer = setTimeout(() => {
            flags.isMouseMoving = false;
          }, 100);
        }

        if (!enableScrollTrail) return;
        const now = Date.now();
        flags.isScrolling = true;
        if (now - flags.lastScrollTime >= scrollInterval) {
          flags.lastScrollTime = now;
          if (!flags.scrollTicking) {
            flags.scrollTicking = true;
            requestAnimationFrame(() => {
              if (flags.isScrolling) {
                spawnOnScroll();
                flags.isScrolling = false;
              }
              flags.scrollTicking = false;
            });
          }
        }
      }

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      rafId = requestAnimationFrame(renderLoop);
    })();

    // ------------------------------------------------------------------------
    // DRAFTING RULER NAVIGATION (Interactive Drag & Active Pill Tracking)
    // ------------------------------------------------------------------------
    (function initNavRuler() {
      const scroller = document.getElementById('nav-scroller');
      const wrapper = document.getElementById('nav-wrapper');
      const activePill = document.getElementById('active-container');
      const navLinks = Array.from(document.querySelectorAll('.nav-brand'));

      if (!scroller || !activePill || navLinks.length === 0) return;

      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;
      let currentIndex = 0;

      function updateActivePill(idx, instant = false) {
        currentIndex = idx;
        const target = navLinks[idx];
        if (!target) return;

        navLinks.forEach((link, i) => {
          if (i === idx) {
            link.classList.add('nav-brand--active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('nav-brand--active');
            link.removeAttribute('aria-current');
          }
        });

        // Compute pill dimensions based on active label width
        const labelWidth = target.getBoundingClientRect().width;
        activePill.style.width = (labelWidth + 24) + 'px';

        // Center target item in the scroller
        const targetRect = target.getBoundingClientRect();
        const scrollerRect = scroller.getBoundingClientRect();
        const offset = (targetRect.left + targetRect.width / 2) - (scrollerRect.left + scrollerRect.width / 2);

        if (Math.abs(offset) > 1) {
          if (instant) {
            scroller.scrollLeft += offset;
          } else {
            scroller.scrollBy({ left: offset, behavior: 'smooth' });
          }
        }
      }

      // Initial alignment on load
      setTimeout(() => updateActivePill(0, true), 100);
      window.addEventListener('resize', () => updateActivePill(currentIndex, true));

      // Click handling
      navLinks.forEach((link, idx) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          if (idx !== currentIndex) {
            playTick();
            updateActivePill(idx);
          }
        });
      });

      // Dragging physics
      wrapper.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        isDragging = true;
        wrapper.dataset.dragging = 'true';
        startX = e.pageX - scroller.offsetLeft;
        scrollLeft = scroller.scrollLeft;
        initAudio();
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scroller.offsetLeft;
        const walk = (x - startX) * 1.5;
        scroller.scrollLeft = scrollLeft - walk;
      });

      window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        delete wrapper.dataset.dragging;

        // Snap to closest link
        const scrollerCenter = scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
        let closestIdx = 0;
        let minDiff = Infinity;

        navLinks.forEach((link, idx) => {
          const rect = link.getBoundingClientRect();
          const center = rect.left + rect.width / 2;
          const diff = Math.abs(center - scrollerCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });

        if (closestIdx !== currentIndex) {
          playTick();
        }
        updateActivePill(closestIdx);
      });
    })();
  </script>
</body>
</html>
`;

const outputPath = path.join(__dirname, '..', 'dejiajetomobi_about_replica.html');
fs.writeFileSync(outputPath, html, 'utf8');
console.log('Successfully generated replica at:', outputPath, 'size:', fs.statSync(outputPath).size);
