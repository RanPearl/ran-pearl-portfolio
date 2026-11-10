/* ═══════════════════════════════════════════════════════════════════
   RanOS 96 — main.js
   ───────────────────────────────────────────────────────────────────
   EDITABLE SECTION: Update CONTENT and CERTIFICATIONS objects below.
   Everything else is UI logic — no need to touch unless customising.
═══════════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════
   ✏️  YOUR CONTENT — EDIT THIS SECTION
════════════════════════════════════════ */
const CONTENT = {
  meta: {
    name:     'Ran Pearl',
    handle:   '@ranpearl',
    title:    'Software Engineer',
    email:    'ran@example.com',          // ← your email
    linkedin: 'https://linkedin.com/in/ranpearl',  // ← your LinkedIn
    github:   'https://github.com/ranpearl',        // ← your GitHub
  },

  about: {
    emoji: '👩‍💻',
    bio: `Hi there! I'm Ran Pearl — a software engineer who loves building thoughtful, well-crafted digital experiences.

I enjoy working across the full stack, with a particular interest in cloud infrastructure, developer tooling, and making complex systems feel simple.

When I'm not writing code, you'll find me exploring new technologies, tinkering with side projects, or being supervised by my cats.

Feel free to look around RanOS 96 — my portfolio, retro-style. 🖥️`,
  },

  skills: {
    'Languages':          ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'Bash'],
    'Frameworks & Libs':  ['React', 'Node.js', 'FastAPI', 'Spring Boot', 'Express'],
    'Cloud & DevOps':     ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    'Data & ML':          ['TensorFlow', 'Tableau', 'PostgreSQL', 'Redis', 'BigQuery'],
    'Tools':              ['Git', 'GitHub Actions', 'Jira', 'Figma', 'VS Code'],
  },

  projects: [
    {
      name:        'Project Alpha',
      description: 'A full-stack web application for real-time collaborative editing. Built with React and WebSockets, deployed on AWS with auto-scaling infrastructure.',
      tech:        ['React', 'Node.js', 'WebSockets', 'AWS', 'PostgreSQL'],
      github:      'https://github.com/ranpearl/project-alpha',
      demo:        null,  // set to URL string to show demo button
    },
    {
      name:        'ML Pipeline Toolkit',
      description: 'An open-source toolkit for building reproducible machine learning pipelines. Features data versioning, experiment tracking, and one-click deployment to GCP.',
      tech:        ['Python', 'TensorFlow', 'GCP', 'Docker', 'BigQuery'],
      github:      'https://github.com/ranpearl/ml-pipeline-toolkit',
      demo:        null,
    },
    {
      name:        'DevDash CLI',
      description: 'A terminal dashboard that aggregates GitHub PRs, Jira tickets, and CI/CD status into a single pane of glass. Built with TypeScript and blessed.js.',
      tech:        ['TypeScript', 'Node.js', 'GitHub API', 'Jira API'],
      github:      'https://github.com/ranpearl/devdash',
      demo:        null,
    },
  ],

  education: [
    {
      year:        '2020',
      degree:      'B.Sc. Computer Science',
      institution: 'University of Example',
      honors:      'First Class Honors · Dean\'s List (all semesters)',
    },
    {
      year:        '2016',
      degree:      'High School Diploma',
      institution: 'Example High School',
      honors:      'Valedictorian',
    },
  ],

  honors: [
    'Dean\'s List — 4 consecutive semesters',
    'Best Capstone Project Award 2020',
    'Hackathon Winner — Example Hack 2019',
    'Full Merit Scholarship Recipient',
  ],

  cats: [
    {
      id:          1,
      name:        'Pixel',
      bodyColor:   '#E8762D',
      eyeColor:    '#1E90FF',
      shadowColor: '#B85A18',
      lightColor:  '#F4A060',
      description: 'A curious orange tabby who loves investigating open windows and sitting on keyboards.',
      photo:       'assets/cats/cat1.jpg',  // replace with real photo
    },
    {
      id:          2,
      name:        'Byte',
      bodyColor:   '#909090',
      eyeColor:    '#44BB44',
      shadowColor: '#606060',
      lightColor:  '#B8B8B8',
      description: 'A stoic gray cat with great wisdom. Prefers to sit on the taskbar and judge silently.',
      photo:       'assets/cats/cat2.jpg',
    },
    {
      id:          3,
      name:        'Chip',
      bodyColor:   '#282828',
      eyeColor:    '#FFD700',
      shadowColor: '#111111',
      lightColor:  '#404040',
      description: 'A sleek black cat who appears and disappears mysteriously. Probably a hacker.',
      photo:       'assets/cats/cat3.jpg',
    },
    {
      id:          4,
      name:        'Glitch',
      bodyColor:   '#F0EAE0',
      eyeColor:    '#E91E8C',
      shadowColor: '#C8C0B4',
      lightColor:  '#FFFFFF',
      description: 'A fluffy cream cat who causes chaos wherever she goes and blames it on cosmic rays.',
      photo:       'assets/cats/cat4.jpg',
    },
  ],
};

/* ════════════════════════════════════════
   ✏️  CERTIFICATIONS — EDIT URLS HERE
════════════════════════════════════════ */
const CERTIFICATIONS = [
  {
    id:     'cert-aws',
    name:   'AWS Certified Solutions Architect',
    sub:    'Associate Level',
    issuer: 'Amazon Web Services',
    date:   '2024',
    icon:   '☁️',
    url:    '',  // ← paste Credly/certificate URL here
  },
  {
    id:     'cert-gcp',
    name:   'Google Cloud Professional Cloud Architect',
    sub:    '',
    issuer: 'Google Cloud',
    date:   '2023',
    icon:   '🌐',
    url:    '',  // ← paste Credly/certificate URL here
  },
  {
    id:     'cert-azure',
    name:   'Microsoft Azure Fundamentals',
    sub:    'AZ-900',
    issuer: 'Microsoft',
    date:   '2023',
    icon:   '🔷',
    url:    '',  // ← paste URL here
  },
  {
    id:     'cert-cka',
    name:   'Certified Kubernetes Administrator',
    sub:    'CKA',
    issuer: 'Cloud Native Computing Foundation',
    date:   '2023',
    icon:   '⚙️',
    url:    '',  // ← paste URL here
  },
  {
    id:     'cert-tableau',
    name:   'Tableau Desktop Specialist',
    sub:    '',
    issuer: 'Salesforce / Tableau',
    date:   '2022',
    icon:   '📊',
    url:    '',  // ← paste URL here
  },
  {
    id:     'cert-tf',
    name:   'TensorFlow Developer Certificate',
    sub:    '',
    issuer: 'Google',
    date:   '2022',
    icon:   '🧠',
    url:    '',  // ← paste URL here
  },
];

/* ═══════════════════════════════════════════════════════════════════
   SVG ASSETS
═══════════════════════════════════════════════════════════════════ */

/** Build a pixel-art cat SVG (10 cols × 14 rows, 4px/cell = 40×56px) */
function makeCatSVG(cat, scale = 1) {
  const P = 4 * scale;
  const { bodyColor: B, eyeColor: E, shadowColor: S, lightColor: L } = cat;

  //  0=transparent  1=body  2=eye  3=shadow  4=light
  const grid = [
    [0,0,1,0,0,1,0,0,0,0],  //  0  ear tips
    [0,1,1,1,0,1,1,1,0,0],  //  1  ears
    [0,1,1,1,1,1,1,1,1,0],  //  2  forehead
    [0,1,1,1,1,1,1,1,1,0],  //  3
    [0,1,2,1,1,1,2,1,1,0],  //  4  eyes
    [0,1,1,1,0,1,1,1,1,0],  //  5  nose gap
    [0,1,4,1,1,1,1,4,1,0],  //  6  chin, light cheeks
    [0,1,1,1,1,1,1,1,1,0],  //  7  body
    [0,1,4,1,1,1,1,4,1,0],  //  8  belly lighter
    [0,1,1,1,1,1,1,1,1,0],  //  9
    [0,1,1,1,1,1,1,1,1,0],  // 10
    [1,1,1,1,0,0,1,1,1,1],  // 11  paws (gap in middle)
    [1,1,1,0,0,0,0,1,1,1],  // 12  paw base, wider gap
    [0,1,1,0,0,0,0,1,1,0],  // 13  toe tips
  ];

  const colorMap = { 1: B, 2: E, 3: S, 4: L };
  const W = 10, H = 14;
  let rects = '';

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const v = grid[y][x];
      if (!v || !colorMap[v]) continue;
      rects += `<rect x="${x*P}" y="${y*P}" width="${P}" height="${P}" fill="${colorMap[v]}"/>`;
    }
  }

  // Tail curves right and up
  const tx = (W-1) * P;
  const ty = 11 * P;
  rects += `<path d="M${tx},${ty} C${tx+P*3},${ty-P*2} ${tx+P*4},${ty-P*5} ${tx+P*2},${ty-P*8}"
    stroke="${B}" stroke-width="${P-1}" fill="none" stroke-linecap="round"/>`;

  const svgW = W * P + P * 5;
  const svgH = H * P;
  return `<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${svgW} ${svgH}"
    width="${svgW}" height="${svgH}"
    shape-rendering="crispEdges"
    style="overflow:visible">${rects}</svg>`;
}

/** Desktop application icons as inline SVG */
const ICON_SVG = {
  about: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="44" height="30" rx="2" fill="#C0C0C0" stroke="#808080" stroke-width="1"/>
    <rect x="5" y="8" width="38" height="24" fill="#000080"/>
    <circle cx="24" cy="18" r="6" fill="white" opacity="0.9"/>
    <path d="M12 32 Q24 24 36 32" fill="white" opacity="0.9"/>
    <rect x="18" y="35" width="12" height="5" fill="#A0A0A0"/>
    <rect x="12" y="40" width="24" height="3" fill="#808080"/>
  </svg>`,

  certifications: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="17" width="40" height="27" rx="2" fill="#D4A017" stroke="#8B6914" stroke-width="1"/>
    <path d="M4 17 L4 11 Q4 9 6 9 L20 9 L24 17 Z" fill="#E8C040"/>
    <rect x="10" y="23" width="28" height="15" rx="1" fill="white"/>
    <rect x="13" y="27" width="22" height="2" fill="#000080"/>
    <rect x="13" y="31" width="16" height="2" fill="#808080"/>
    <circle cx="34.5" cy="36.5" r="4.5" fill="#FFD700" stroke="#C8A800" stroke-width="1"/>
    <text x="34.5" y="39.5" text-anchor="middle" font-size="7" fill="#8B6914" font-family="serif">★</text>
  </svg>`,

  skills: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="9" fill="none" stroke="#6B3FA0" stroke-width="6"/>
    <circle cx="24" cy="24" r="3.5" fill="#6B3FA0"/>
    <rect x="22" y="2"  width="4" height="9" fill="#6B3FA0" rx="2"/>
    <rect x="22" y="37" width="4" height="9" fill="#6B3FA0" rx="2"/>
    <rect x="2"  y="22" width="9" height="4" fill="#6B3FA0" rx="2"/>
    <rect x="37" y="22" width="9" height="4" fill="#6B3FA0" rx="2"/>
    <rect x="8"  y="8"  width="4" height="9" fill="#9B6FD0" rx="2" transform="rotate(45,10,12.5)"/>
    <rect x="36" y="8"  width="4" height="9" fill="#9B6FD0" rx="2" transform="rotate(-45,38,12.5)"/>
    <rect x="8"  y="31" width="4" height="9" fill="#9B6FD0" rx="2" transform="rotate(-45,10,35.5)"/>
    <rect x="36" y="31" width="4" height="9" fill="#9B6FD0" rx="2" transform="rotate(45,38,35.5)"/>
  </svg>`,

  projects: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="3" width="32" height="42" rx="2" fill="white" stroke="#C0C0C0" stroke-width="1"/>
    <rect x="8" y="3" width="32" height="12" fill="#000080" rx="2"/>
    <rect x="8" y="9" width="32" height="6" fill="#000080"/>
    <circle cx="38" cy="8"  r="2.5" fill="#FF5F5F"/>
    <circle cx="33" cy="8"  r="2.5" fill="#FFD000"/>
    <circle cx="28" cy="8"  r="2.5" fill="#2ED573"/>
    <rect x="12" y="19" width="24" height="2" fill="#808080"/>
    <rect x="12" y="23" width="20" height="2" fill="#808080"/>
    <rect x="12" y="27" width="22" height="2" fill="#808080"/>
    <rect x="12" y="31" width="16" height="2" fill="#808080"/>
    <rect x="12" y="35" width="10" height="2" fill="#808080"/>
  </svg>`,

  education: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <polygon points="24,8 44,20 24,20 4,20" fill="#2D3A8C"/>
    <polygon points="24,8 44,20 42,22 24,22 6,22 4,20" fill="#4A5DB0"/>
    <rect x="20" y="20" width="8" height="5" fill="#2D3A8C"/>
    <rect x="6"  y="23" width="4" height="17" fill="#2D3A8C"/>
    <ellipse cx="8" cy="40" rx="4" ry="2" fill="#4A5DB0"/>
    <rect x="16" y="22" width="24" height="16" rx="1" fill="#FFD700"/>
    <rect x="19" y="26" width="18" height="2" fill="#8B6914"/>
    <rect x="19" y="30" width="12" height="2" fill="#8B6914"/>
    <circle cx="34" cy="34" r="4" fill="#FFD700" stroke="#C8A800" stroke-width="1"/>
    <text x="34" y="37" text-anchor="middle" font-size="7" fill="#8B6914" font-family="serif">★</text>
  </svg>`,

  contact: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="40" height="28" rx="2" fill="white" stroke="#C0C0C0" stroke-width="1"/>
    <polyline points="4,14 24,30 44,14" fill="none" stroke="#E44444" stroke-width="2.5"/>
    <line x1="4"  y1="40" x2="17" y2="28" stroke="#C0C0C0" stroke-width="1.5"/>
    <line x1="44" y1="40" x2="31" y2="28" stroke="#C0C0C0" stroke-width="1.5"/>
    <circle cx="24" cy="10" r="5" fill="#E44444"/>
    <text x="24" y="13.5" text-anchor="middle" font-size="8" fill="white">♥</text>
  </svg>`,

  cats: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <polygon points="10,20 14,7 18,20"  fill="#FF8C42"/>
    <polygon points="30,20 34,7 38,20"  fill="#FF8C42"/>
    <polygon points="11,19 14,10 17,19" fill="#FFB88C"/>
    <polygon points="31,19 34,10 37,19" fill="#FFB88C"/>
    <circle cx="24" cy="28" r="16" fill="#FF8C42"/>
    <ellipse cx="17" cy="25" rx="3.5" ry="4" fill="#2C1810"/>
    <ellipse cx="31" cy="25" rx="3.5" ry="4" fill="#2C1810"/>
    <circle cx="16" cy="23.5" r="1.2" fill="white"/>
    <circle cx="30" cy="23.5" r="1.2" fill="white"/>
    <ellipse cx="24" cy="31" rx="2.2" ry="1.5" fill="#FF6B8A"/>
    <path d="M22,33 Q24,36 26,33" stroke="#2C1810" stroke-width="1.5" fill="none"/>
    <line x1="5"  y1="30" x2="17" y2="32" stroke="#2C1810" stroke-width="1" opacity="0.4"/>
    <line x1="5"  y1="33" x2="17" y2="32" stroke="#2C1810" stroke-width="1" opacity="0.4"/>
    <line x1="31" y1="32" x2="43" y2="30" stroke="#2C1810" stroke-width="1" opacity="0.4"/>
    <line x1="31" y1="32" x2="43" y2="33" stroke="#2C1810" stroke-width="1" opacity="0.4"/>
  </svg>`,

  resume: `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="2" width="32" height="44" rx="2" fill="white" stroke="#C0C0C0" stroke-width="1"/>
    <polygon points="30,2 40,12 30,12" fill="#C0C0C0"/>
    <polygon points="30,2 30,12 40,12" fill="#E8E8E8"/>
    <line x1="30" y1="2" x2="30" y2="12" stroke="#A0A0A0" stroke-width="1"/>
    <line x1="30" y1="12" x2="40" y2="12" stroke="#A0A0A0" stroke-width="1"/>
    <rect x="12" y="16" width="24" height="2.5" fill="#000080"/>
    <rect x="12" y="21" width="20" height="1.5" fill="#808080"/>
    <rect x="12" y="25" width="22" height="1.5" fill="#808080"/>
    <rect x="12" y="29" width="18" height="1.5" fill="#808080"/>
    <rect x="12" y="33" width="20" height="1.5" fill="#808080"/>
    <rect x="12" y="37" width="14" height="1.5" fill="#808080"/>
  </svg>`,
};

/* ═══════════════════════════════════════════════════════════════════
   WINDOW DEFINITIONS
═══════════════════════════════════════════════════════════════════ */
const WINDOWS = [
  { id: 'about',    title: 'About Me',           icon: 'about',          w: 540, h: 440, x: 90,  y: 50 },
  { id: 'certs',    title: 'My Certificates',    icon: 'certifications', w: 600, h: 500, x: 120, y: 70 },
  { id: 'skills',   title: 'Skills',             icon: 'skills',         w: 500, h: 420, x: 150, y: 60 },
  { id: 'projects', title: 'Projects',           icon: 'projects',       w: 560, h: 500, x: 100, y: 55 },
  { id: 'edu',      title: 'Education & Honors', icon: 'education',      w: 520, h: 460, x: 110, y: 65 },
  { id: 'contact',  title: 'Contact',            icon: 'contact',        w: 440, h: 380, x: 130, y: 80 },
  { id: 'cats',     title: 'My Cats',            icon: 'cats',           w: 540, h: 420, x: 100, y: 60 },
];

const DESKTOP_ICONS = [
  ...WINDOWS.map(w => ({ id: w.id, label: w.title, icon: w.icon, action: () => openWindow(w.id) })),
  { id: 'resume', label: 'Resume.pdf', icon: 'resume', action: downloadResume },
];

/* ═══════════════════════════════════════════════════════════════════
   BOOT SCREEN
═══════════════════════════════════════════════════════════════════ */
const BOOT_MESSAGES = [
  'Starting RanOS 96…',
  'Loading system files…',
  'Initialising hardware…',
  'Loading desktop experience…',
  'Starting window manager…',
  'Loading desktop cats…',
  'Welcome to RanOS 96! 🐱',
];

function runBootSequence() {
  const booted  = localStorage.getItem('ranOS96_booted');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (booted === '1' || reduced) {
    endBoot();
    return;
  }

  const fill   = document.getElementById('boot-progress-fill');
  const status = document.getElementById('boot-status');
  const bar    = document.getElementById('boot-progress-bar');
  let progress = 0;

  function tick() {
    if (progress >= 100) { setTimeout(endBoot, 400); return; }
    progress = Math.min(progress + Math.random() * 9 + 2, 100);
    fill.style.width = progress + '%';
    bar.setAttribute('aria-valuenow', Math.round(progress));
    const idx = Math.min(Math.floor(progress / (100 / BOOT_MESSAGES.length)), BOOT_MESSAGES.length - 1);
    status.textContent = BOOT_MESSAGES[idx];
    setTimeout(tick, 90 + Math.random() * 140);
  }
  tick();
}

function endBoot() {
  localStorage.setItem('ranOS96_booted', '1');
  const boot = document.getElementById('boot-screen');
  boot.classList.add('fading');
  boot.addEventListener('transitionend', () => { boot.style.display = 'none'; }, { once: true });
  // If transition doesn't fire (e.g. display:none immediately):
  setTimeout(() => { if (boot.style.display !== 'none') boot.style.display = 'none'; }, 700);
}

// Exposed for the inline onclick on the HTML button
window.skipBoot = endBoot;

/* ═══════════════════════════════════════════════════════════════════
   WINDOW MANAGER
═══════════════════════════════════════════════════════════════════ */
let zCounter  = 100;
const winState = {}; // { id: { el, minimised, maximised, prevGeom } }

function buildWindowContent(id) {
  switch (id) {
    case 'about':    return renderAbout();
    case 'certs':    return renderCerts();
    case 'skills':   return renderSkills();
    case 'projects': return renderProjects();
    case 'edu':      return renderEdu();
    case 'contact':  return renderContact();
    case 'cats':     return renderCatsWindow();
    default:         return '<p>Content not found.</p>';
  }
}

function createWindowEl(def) {
  const el = document.createElement('div');
  el.className   = 'window inactive';
  el.id          = `win-${def.id}`;
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', def.title);
  el.setAttribute('aria-modal', 'false');
  el.setAttribute('tabindex', '-1');
  el.style.left   = clampX(def.x, def.w) + 'px';
  el.style.top    = clampY(def.y, def.h) + 'px';
  el.style.width  = def.w + 'px';
  el.style.minHeight = def.h + 'px';
  el.style.display   = 'none';
  el.style.zIndex    = ++zCounter;

  const iconSVG = ICON_SVG[def.icon] || '';
  const smallIcon = iconSVG.replace('viewBox="0 0 48 48"', 'viewBox="0 0 48 48" width="16" height="16"');

  el.innerHTML = `
    <div class="window-titlebar" id="titlebar-${def.id}">
      <span class="window-titlebar-icon" aria-hidden="true">${smallIcon}</span>
      <span class="window-title-text">${escHTML(def.title)}</span>
      <div class="window-controls">
        <button class="win-ctrl btn-minimize"
                aria-label="Minimize ${escHTML(def.title)}"
                title="Minimize">&#x2013;</button>
        <button class="win-ctrl btn-maximize"
                aria-label="Maximize ${escHTML(def.title)}"
                title="Maximize">&#x25A1;</button>
        <button class="win-ctrl btn-close"
                aria-label="Close ${escHTML(def.title)}"
                title="Close">&#x2715;</button>
      </div>
    </div>
    <div class="window-body" id="wbody-${def.id}">
      ${buildWindowContent(def.id)}
    </div>
    <div class="window-statusbar">
      <div class="statusbar-panel">${escHTML(def.title)} — RanOS 96</div>
    </div>`;

  // Wire up control buttons
  el.querySelector('.btn-close').addEventListener('click',    () => closeWindow(def.id));
  el.querySelector('.btn-minimize').addEventListener('click', () => minimizeWindow(def.id));
  el.querySelector('.btn-maximize').addEventListener('click', () => maximizeWindow(def.id));

  // Focus on click anywhere on window
  el.addEventListener('mousedown', () => focusWindow(def.id), true);

  // Drag
  el.querySelector('.window-titlebar').addEventListener('mousedown', (e) => {
    if (e.target.closest('.window-controls')) return;
    if (window.matchMedia('(max-width: 700px)').matches) return;
    startDrag(def.id, e);
  });

  // Keyboard: Esc to close
  el.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeWindow(def.id); });

  document.getElementById('windows-container').appendChild(el);
  return el;
}

function openWindow(id) {
  const def = WINDOWS.find(w => w.id === id);
  if (!def) return;

  if (!winState[id]) {
    const el = createWindowEl(def);
    winState[id] = { el, minimised: false, maximised: false, prevGeom: null };
  }

  const s = winState[id];
  s.minimised = false;
  s.el.style.display = '';
  s.el.classList.remove('window-hidden');
  focusWindow(id);
  addTaskbarBtn(id, def.title, def.icon);
}

function closeWindow(id) {
  const s = winState[id];
  if (!s) return;
  s.el.style.display = 'none';
  s.minimised  = false;
  s.maximised  = false;
  removeTaskbarBtn(id);
  delete winState[id];
  s.el.remove();
}

function minimizeWindow(id) {
  const s = winState[id];
  if (!s) return;
  s.minimised = true;
  s.el.style.display = 'none';
  updateTaskbarBtn(id, false);
}

function maximizeWindow(id) {
  const s = winState[id];
  if (!s) return;
  if (s.maximised) {
    // Restore
    s.maximised = false;
    s.el.classList.remove('maximized');
    if (s.prevGeom) {
      const { left, top, width, height } = s.prevGeom;
      s.el.style.left      = left;
      s.el.style.top       = top;
      s.el.style.width     = width;
      s.el.style.minHeight = height;
    }
  } else {
    s.prevGeom = { left: s.el.style.left, top: s.el.style.top, width: s.el.style.width, height: s.el.style.minHeight };
    s.maximised = true;
    s.el.classList.add('maximized');
  }
}

function focusWindow(id) {
  // Deactivate all
  document.querySelectorAll('.window').forEach(w => w.classList.add('inactive'));
  const s = winState[id];
  if (!s) return;
  s.el.classList.remove('inactive');
  s.el.style.zIndex = ++zCounter;
  s.el.focus({ preventScroll: true });
  document.querySelectorAll('.taskbar-win-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`tbtn-${id}`);
  if (btn) btn.classList.add('active');
}

/* ── Drag ──────────────────────────────────────────────────── */
let _drag = null;

document.addEventListener('mousemove', (e) => {
  if (!_drag) return;
  const s = winState[_drag.id];
  if (!s || s.maximised) return;
  const desktop = document.getElementById('desktop');
  let x = e.clientX - _drag.ox;
  let y = e.clientY - _drag.oy;
  x = Math.max(0, Math.min(x, desktop.offsetWidth  - s.el.offsetWidth));
  y = Math.max(0, Math.min(y, desktop.offsetHeight - 40));
  s.el.style.left = x + 'px';
  s.el.style.top  = y + 'px';
});

document.addEventListener('mouseup', () => { _drag = null; });

function startDrag(id, e) {
  const s = winState[id];
  if (!s || s.maximised) return;
  const r = s.el.getBoundingClientRect();
  _drag = { id, ox: e.clientX - r.left, oy: e.clientY - r.top };
  document.body.style.userSelect = 'none';
  focusWindow(id);
}

/* ═══════════════════════════════════════════════════════════════════
   TASKBAR BUTTONS
═══════════════════════════════════════════════════════════════════ */
function addTaskbarBtn(id, title, iconKey) {
  if (document.getElementById(`tbtn-${id}`)) { updateTaskbarBtn(id, true); return; }
  const def = WINDOWS.find(w => w.id === id);
  const iconSVG = ICON_SVG[iconKey] || '';
  const tiny = iconSVG.replace('viewBox="0 0 48 48"', 'viewBox="0 0 48 48" width="14" height="14"');

  const btn = document.createElement('button');
  btn.id        = `tbtn-${id}`;
  btn.className = 'taskbar-win-btn active';
  btn.setAttribute('role', 'listitem');
  btn.setAttribute('aria-label', `${title} window`);
  btn.innerHTML = `${tiny}<span>${escHTML(title)}</span>`;
  btn.addEventListener('click', () => {
    const s = winState[id];
    if (!s) { openWindow(id); return; }
    if (s.minimised) {
      s.minimised = false;
      s.el.style.display = '';
      focusWindow(id);
      updateTaskbarBtn(id, true);
    } else if (s.el.classList.contains('inactive')) {
      focusWindow(id);
    } else {
      minimizeWindow(id);
    }
  });
  document.getElementById('taskbar-windows').appendChild(btn);
}

function removeTaskbarBtn(id) {
  const btn = document.getElementById(`tbtn-${id}`);
  if (btn) btn.remove();
}

function updateTaskbarBtn(id, active) {
  const btn = document.getElementById(`tbtn-${id}`);
  if (!btn) return;
  btn.classList.toggle('active', active);
}

/* ═══════════════════════════════════════════════════════════════════
   DESKTOP ICONS
═══════════════════════════════════════════════════════════════════ */
let isTouchDevice = false;

function buildIcons() {
  const grid = document.getElementById('icon-grid');
  grid.innerHTML = '';

  // Detect touch once on first real event
  window.addEventListener('touchstart', () => { isTouchDevice = true; }, { once: true });

  DESKTOP_ICONS.forEach((item) => {
    const btn = document.createElement('button');
    btn.className = 'desktop-icon';
    btn.id        = `icon-${item.id}`;
    btn.setAttribute('role', 'listitem');
    btn.setAttribute('aria-label', `Open ${item.label}`);
    btn.setAttribute('tabindex', '0');

    const svgEl = document.createElement('span');
    svgEl.className   = 'icon-img';
    svgEl.innerHTML   = ICON_SVG[item.icon] || '';
    svgEl.setAttribute('aria-hidden', 'true');

    const label = document.createElement('span');
    label.className   = 'icon-label';
    label.textContent = item.label;

    btn.appendChild(svgEl);
    btn.appendChild(label);
    grid.appendChild(btn);

    // Double-click on desktop, single tap on touch
    let lastClick = 0;
    btn.addEventListener('click', (e) => {
      if (isTouchDevice) {
        item.action();
        return;
      }
      const now = Date.now();
      if (now - lastClick < 450) { item.action(); lastClick = 0; }
      else { lastClick = now; }
    });

    // Keyboard: Enter or Space activates immediately
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.action(); }
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════
   START MENU
═══════════════════════════════════════════════════════════════════ */
function buildStartMenu() {
  const menu = document.getElementById('start-menu');
  const banner = document.createElement('div');
  banner.className   = 'start-menu-banner';
  banner.textContent = 'RanOS 96';
  banner.setAttribute('aria-hidden', 'true');

  const items = document.createElement('div');
  items.className = 'start-menu-items';

  const menuItems = [
    ...WINDOWS.map(w => ({ label: w.title, icon: w.icon, action: () => { openWindow(w.id); closeStartMenu(); } })),
    null, // separator
    { label: 'Resume.pdf',     icon: 'resume',  action: () => { downloadResume(); closeStartMenu(); } },
    null,
    { label: 'Contact',        icon: 'contact', action: () => { openWindow('contact'); closeStartMenu(); } },
  ];

  menuItems.forEach((item) => {
    if (!item) {
      const sep = document.createElement('div');
      sep.className = 'start-menu-sep';
      sep.setAttribute('aria-hidden', 'true');
      items.appendChild(sep);
      return;
    }
    const btn = document.createElement('button');
    btn.className = 'start-item';
    btn.setAttribute('role', 'menuitem');
    const iconSVG = ICON_SVG[item.icon] || '';
    const tiny = iconSVG.replace('viewBox="0 0 48 48"', 'viewBox="0 0 48 48" width="20" height="20"');
    btn.innerHTML = `<span class="item-icon" aria-hidden="true">${tiny}</span>${escHTML(item.label)}`;
    btn.addEventListener('click', item.action);
    items.appendChild(btn);
  });

  menu.appendChild(banner);
  menu.appendChild(items);
}

let startMenuOpen = false;

function toggleStartMenu() {
  startMenuOpen = !startMenuOpen;
  const menu = document.getElementById('start-menu');
  const btn  = document.getElementById('start-btn');
  menu.hidden = !startMenuOpen;
  btn.setAttribute('aria-expanded', String(startMenuOpen));
  if (startMenuOpen) {
    const firstItem = menu.querySelector('.start-item');
    if (firstItem) firstItem.focus();
  }
}

function closeStartMenu() {
  startMenuOpen = false;
  document.getElementById('start-menu').hidden = true;
  document.getElementById('start-btn').setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) {
    if (startMenuOpen) closeStartMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && startMenuOpen) closeStartMenu();
});

/* ═══════════════════════════════════════════════════════════════════
   CLOCK
═══════════════════════════════════════════════════════════════════ */
function updateClock() {
  const now  = new Date();
  const h    = now.getHours();
  const m    = now.getMinutes().toString().padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12  = h % 12 || 12;
  document.getElementById('clock-time').textContent = `${h12}:${m} ${ampm}`;
}

/* ═══════════════════════════════════════════════════════════════════
   MUTE TOGGLE (placeholder — no sound used by default)
═══════════════════════════════════════════════════════════════════ */
let muted = true;
function setupMuteBtn() {
  const btn = document.getElementById('mute-btn');
  btn.addEventListener('click', () => {
    muted = !muted;
    btn.textContent   = muted ? '🔇' : '🔊';
    btn.title         = muted ? 'Unmute sound' : 'Mute sound';
    btn.setAttribute('aria-pressed', String(muted));
    btn.setAttribute('aria-label', muted ? 'Sound muted — click to unmute' : 'Sound on — click to mute');
  });
}

/* ═══════════════════════════════════════════════════════════════════
   DESKTOP CATS
═══════════════════════════════════════════════════════════════════ */
const CAT_REACT_MSGS = [
  'meow!', 'purr~', 'mrrrow!', '*purring*', '=^.^=',
  'nya~', 'mew!', 'prrrr', 'miaow!', '♥',
];

class DesktopCat {
  constructor(cfg, index) {
    this.cfg       = cfg;
    this.state     = 'idle';
    this.stateTime = 1500 + Math.random() * 2000;
    this.x         = 100 + index * 120;
    this.y         = 0; // set properly in init
    this.targetX   = this.x;
    this.targetY   = this.y;
    this.direction = 1;   // 1 = right, -1 = left
    this.el        = null;
    this.bodyEl    = null;
    this.bubbleEl  = null;
    this.zzzEl     = null;
    this.speed     = 0.6 + Math.random() * 0.4;
  }

  mount() {
    const container = document.getElementById('cats-container');
    const desktop   = document.getElementById('desktop');

    // Set initial y to bottom 20% of desktop
    const minY = desktop.offsetHeight * 0.65;
    const maxY = desktop.offsetHeight - 70;
    this.y       = minY + Math.random() * (maxY - minY);
    this.targetY = this.y;
    this.x       = Math.random() * (desktop.offsetWidth - 60);
    this.targetX = this.x;

    this.el = document.createElement('div');
    this.el.className = `cat cat-${this.cfg.id}`;
    this.el.style.left = this.x + 'px';
    this.el.style.top  = this.y + 'px';

    const svgStr = makeCatSVG(this.cfg);
    this.bodyEl  = document.createElement('div');
    this.bodyEl.className = 'cat-body';
    this.bodyEl.innerHTML = svgStr;

    this.bubbleEl = document.createElement('div');
    this.bubbleEl.className = 'cat-bubble';
    this.bubbleEl.setAttribute('aria-hidden', 'true');

    this.zzzEl = document.createElement('div');
    this.zzzEl.className = 'cat-zzz';
    this.zzzEl.textContent = 'z z z';
    this.zzzEl.setAttribute('aria-hidden', 'true');

    this.el.appendChild(this.bodyEl);
    this.el.appendChild(this.bubbleEl);
    this.el.appendChild(this.zzzEl);
    container.appendChild(this.el);

    this.el.addEventListener('click',      () => this.react());
    this.el.addEventListener('touchstart', (e) => { e.preventDefault(); this.react(); }, { passive: false });
  }

  react() {
    const msg = CAT_REACT_MSGS[Math.floor(Math.random() * CAT_REACT_MSGS.length)];
    this.bubbleEl.textContent = msg;
    this.bubbleEl.classList.add('visible');
    this.setState('reacting', 2200);
  }

  setState(s, dur) {
    this.state     = s;
    this.stateTime = dur || 0;
  }

  newTarget() {
    const desktop = document.getElementById('desktop');
    const minY    = desktop.offsetHeight * 0.55;
    const maxY    = desktop.offsetHeight - 68;
    this.targetX  = 20 + Math.random() * (desktop.offsetWidth - 80);
    this.targetY  = minY + Math.random() * (maxY - minY);
  }

  update(dt) {
    this.stateTime -= dt;

    if (this.state === 'reacting') {
      if (this.stateTime <= 0) {
        this.bubbleEl.classList.remove('visible');
        this.setState('idle', 800 + Math.random() * 1200);
      }
      return;
    }

    if (this.state === 'idle' || this.state === 'sitting' || this.state === 'sleeping') {
      if (this.stateTime <= 0) {
        this.setState('walking');
        this.newTarget();
      }
      return;
    }

    if (this.state === 'walking') {
      const dx   = this.targetX - this.x;
      const dy   = this.targetY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 4) {
        const r = Math.random();
        if      (r < 0.35) this.setState('sitting',  2000 + Math.random() * 3000);
        else if (r < 0.55) this.setState('sleeping', 3500 + Math.random() * 4000);
        else                { this.setState('idle', 600); this.newTarget(); }
      } else {
        this.x += (dx / dist) * this.speed * dt;
        this.y += (dy / dist) * this.speed * dt;
        this.direction = dx > 0 ? 1 : -1;
      }
    }
  }

  render() {
    if (!this.el) return;
    this.el.style.left = Math.round(this.x) + 'px';
    this.el.style.top  = Math.round(this.y) + 'px';

    // Flip sprite for direction
    this.bodyEl.style.transform = this.direction < 0 ? 'scaleX(-1)' : 'scaleX(1)';

    // State classes
    this.el.classList.remove('walking', 'sleeping', 'sitting', 'idle');
    this.el.classList.add(this.state === 'reacting' ? 'idle' : this.state);
  }
}

let cats = [];

function initCats() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.matchMedia('(max-width: 700px)').matches) return;

  cats = CONTENT.cats.map((cfg, i) => {
    const c = new DesktopCat(cfg, i);
    c.mount();
    return c;
  });

  let last = 0;
  function loop(ts) {
    const dt = Math.min(ts - last, 50);
    last = ts;
    cats.forEach(c => { c.update(dt); c.render(); });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

/* ═══════════════════════════════════════════════════════════════════
   CONTENT RENDERERS
═══════════════════════════════════════════════════════════════════ */
function renderAbout() {
  const m = CONTENT.meta;
  return `
    <div class="about-header">
      <div class="about-avatar" aria-hidden="true">${CONTENT.about.emoji}</div>
      <div>
        <div class="about-name">${escHTML(m.name)}</div>
        <div class="about-role">${escHTML(m.title)}</div>
        <div class="about-links">
          <a href="mailto:${escHTML(m.email)}" class="about-link">📧 Email</a>
          <a href="${escHTML(m.github)}"   class="about-link" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
          <a href="${escHTML(m.linkedin)}" class="about-link" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
        </div>
      </div>
    </div>
    <p class="about-bio">${escHTML(CONTENT.about.bio).replace(/\n\n/g, '</p><p class="about-bio" style="margin-top:12px;">').replace(/\n/g, '<br>')}</p>`;
}

function renderCerts() {
  const cards = CERTIFICATIONS.map(c => {
    const btn = c.url
      ? `<a href="${escHTML(c.url)}" class="cert-btn" target="_blank" rel="noopener noreferrer">🔎 View Certificate</a>`
      : `<button class="cert-btn disabled" disabled aria-disabled="true">Certificate link coming soon</button>`;
    return `
      <div class="cert-card">
        <div class="cert-card-top">
          <div class="cert-icon" aria-hidden="true">${c.icon}</div>
          <div class="cert-info">
            <div class="cert-name">${escHTML(c.name)}${c.sub ? `<br><span style="font-size:6.5px;color:#555">${escHTML(c.sub)}</span>` : ''}</div>
            <div class="cert-issuer">${escHTML(c.issuer)}</div>
            <div class="cert-date">${escHTML(c.date)}</div>
          </div>
        </div>
        ${btn}
      </div>`;
  }).join('');

  return `
    <p class="certs-note">Click <strong>View Certificate</strong> to see the proof of completion for each one.</p>
    <div class="cert-grid">${cards}</div>`;
}

function renderSkills() {
  const sections = Object.entries(CONTENT.skills).map(([cat, skills]) => {
    const chips = skills.map(s => `<span class="chip">${escHTML(s)}</span>`).join('');
    return `
      <div class="skills-category">
        <div class="skills-category-title">${escHTML(cat)}</div>
        <div class="chip-grid">${chips}</div>
      </div>`;
  }).join('');
  return `<div>${sections}</div>`;
}

function renderProjects() {
  const cards = CONTENT.projects.map(p => {
    const tech  = p.tech.map(t => `<span class="chip">${escHTML(t)}</span>`).join('');
    const links = [];
    if (p.github) links.push(`<a href="${escHTML(p.github)}" class="project-link" target="_blank" rel="noopener noreferrer">🐙 GitHub →</a>`);
    if (p.demo)   links.push(`<a href="${escHTML(p.demo)}"   class="project-link" target="_blank" rel="noopener noreferrer">🌐 Demo →</a>`);
    return `
      <div class="project-card">
        <div class="project-name">${escHTML(p.name)}</div>
        <p class="project-desc">${escHTML(p.description)}</p>
        <div class="project-tech">${tech}</div>
        ${links.length ? `<div class="project-links">${links.join('')}</div>` : ''}
      </div>`;
  }).join('');
  return `<div class="projects-grid">${cards}</div>`;
}

function renderEdu() {
  const items = CONTENT.education.map(e => `
    <div class="edu-item">
      <div class="edu-year">${escHTML(e.year)}</div>
      <div>
        <div class="edu-degree">${escHTML(e.degree)}</div>
        <div class="edu-institution">${escHTML(e.institution)}</div>
        ${e.honors ? `<div class="edu-honors">${escHTML(e.honors)}</div>` : ''}
      </div>
    </div>`).join('');

  const honors = CONTENT.honors.map(h => `<div class="honor-item">${escHTML(h)}</div>`).join('');

  return `
    <div class="edu-list">${items}</div>
    <div class="honors-list" style="margin-top:20px">
      <div class="honors-title">🏆 Honors & Awards</div>
      ${honors}
    </div>`;
}

function renderContact() {
  const m = CONTENT.meta;
  return `
    <div class="contact-list">
      <a href="mailto:${escHTML(m.email)}" class="contact-item">
        <span class="contact-item-icon">📧</span>
        <div>
          <div class="contact-item-label">Email</div>
          <div class="contact-item-value">${escHTML(m.email)}</div>
        </div>
      </a>
      <a href="${escHTML(m.linkedin)}" class="contact-item" target="_blank" rel="noopener noreferrer">
        <span class="contact-item-icon">💼</span>
        <div>
          <div class="contact-item-label">LinkedIn</div>
          <div class="contact-item-value">${escHTML(m.linkedin.replace('https://', ''))}</div>
        </div>
      </a>
      <a href="${escHTML(m.github)}" class="contact-item" target="_blank" rel="noopener noreferrer">
        <span class="contact-item-icon">🐙</span>
        <div>
          <div class="contact-item-label">GitHub</div>
          <div class="contact-item-value">${escHTML(m.github.replace('https://', ''))}</div>
        </div>
      </a>
    </div>
    <p style="margin-top:20px;font-size:12px;color:#888;font-family:'Press Start 2P',monospace;line-height:1.8">
      I'm always happy to chat — whether it's about an opportunity, a project, or just saying hi 👋
    </p>`;
}

function renderCatsWindow() {
  const cards = CONTENT.cats.map(cat => {
    const svgStr = makeCatSVG(cat, 1.5);
    return `
      <div class="cat-card">
        <div class="cat-portrait" aria-label="${escHTML(cat.name)} the cat">
          <img src="${escHTML(cat.photo)}"
               alt="Photo of ${escHTML(cat.name)}"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
               style="display:block"/>
          <div style="display:none;align-items:center;justify-content:center;width:100%;height:100%">
            ${svgStr}
          </div>
        </div>
        <div class="cat-card-name">${escHTML(cat.name)}</div>
        <div class="cat-card-desc">${escHTML(cat.description)}</div>
      </div>`;
  }).join('');
  return `<div class="cats-grid">${cards}</div>`;
}

/* ═══════════════════════════════════════════════════════════════════
   RESUME DOWNLOAD
═══════════════════════════════════════════════════════════════════ */
function downloadResume() {
  const a = document.createElement('a');
  a.href     = 'assets/resume.pdf';
  a.download = 'RanPearl_Resume.pdf';
  a.target   = '_blank';
  a.rel      = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/* ═══════════════════════════════════════════════════════════════════
   KEYBOARD NAVIGATION — Tab through icons with arrow keys
═══════════════════════════════════════════════════════════════════ */
function setupIconKeyNav() {
  const grid = document.getElementById('icon-grid');
  grid.addEventListener('keydown', (e) => {
    const icons  = [...grid.querySelectorAll('.desktop-icon')];
    const idx    = icons.indexOf(document.activeElement);
    if (idx === -1) return;
    let next = idx;
    if (e.key === 'ArrowRight') next = idx + 1;
    if (e.key === 'ArrowLeft')  next = idx - 1;
    if (e.key === 'ArrowDown')  next = idx + 2;
    if (e.key === 'ArrowUp')    next = idx - 2;
    next = Math.max(0, Math.min(next, icons.length - 1));
    if (next !== idx) { e.preventDefault(); icons[next].focus(); }
  });
}

/* ═══════════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════════ */
function escHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function clampX(x, w) {
  const dw = window.innerWidth;
  return Math.max(0, Math.min(x, dw - w));
}
function clampY(y, h) {
  const dh = window.innerHeight - 40; // above taskbar
  return Math.max(0, Math.min(y, dh - h));
}

/* ═══════════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════════ */
(function init() {
  // Wire start button
  document.getElementById('start-btn').addEventListener('click', toggleStartMenu);

  // Build UI
  buildIcons();
  buildStartMenu();
  setupMuteBtn();
  setupIconKeyNav();

  // Clock
  updateClock();
  setInterval(updateClock, 1000);

  // Boot sequence
  document.getElementById('boot-skip').addEventListener('click', endBoot);
  runBootSequence();

  // Cats (after a short delay so desktop is painted first)
  setTimeout(initCats, 300);

  // On desktop resize: re-clamp window positions
  window.addEventListener('resize', () => {
    Object.entries(winState).forEach(([, s]) => {
      if (s.maximised) return;
      const el = s.el;
      const x  = parseInt(el.style.left, 10) || 0;
      const y  = parseInt(el.style.top,  10) || 0;
      el.style.left = Math.max(0, Math.min(x, window.innerWidth  - el.offsetWidth))  + 'px';
      el.style.top  = Math.max(0, Math.min(y, window.innerHeight - el.offsetHeight - 40)) + 'px';
    });
  });
})();
