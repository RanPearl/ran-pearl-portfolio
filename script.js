const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

const themeToggle = $('#themeToggle');
const savedTheme = localStorage.getItem('ranpearl-theme');
if (savedTheme === 'night') document.documentElement.dataset.theme = 'night';
themeToggle.textContent = document.documentElement.dataset.theme === 'night' ? '☀' : '☾';
themeToggle.addEventListener('click', () => {
  const night = document.documentElement.dataset.theme !== 'night';
  if (night) document.documentElement.dataset.theme = 'night';
  else delete document.documentElement.dataset.theme;
  localStorage.setItem('ranpearl-theme', night ? 'night' : 'day');
  themeToggle.textContent = night ? '☀' : '☾';
  showToast(night ? 'Night theme enabled' : 'Pink day theme enabled');
});

const menuToggle = $('#menuToggle');
const navLinks = $('#navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
$$('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

const roles = ['Computer Science Student', 'OJT Applicant', 'Problem Solver'];
let roleIndex = 0;
const typedRole = $('#typedRole');
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  typedRole.animate([{opacity:1, transform:'translateY(0)'},{opacity:0,transform:'translateY(5px)'}],{duration:170,fill:'forwards'}).onfinish = () => {
    typedRole.textContent = roles[roleIndex];
    typedRole.animate([{opacity:0,transform:'translateY(-5px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,fill:'forwards'});
  };
}, 2800);

$$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
  $$('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  $$('.project-card').forEach(card => {
    card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
  });
}));
$$('.details-toggle').forEach(btn => btn.addEventListener('click', () => {
  const card = btn.closest('.project-card');
  const expanded = card.classList.toggle('expanded');
  btn.setAttribute('aria-expanded', String(expanded));
  btn.firstChild.textContent = expanded ? 'Hide details ' : 'More project details ';
  btn.querySelector('span').textContent = expanded ? '−' : '＋';
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
$$('.section-block, .resume-callout, .project-card, .skill-card, .cert-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

const sections = $$('main section[id]');
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      $$('.nav-links a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section => navObserver.observe(section));

const toast = $('#toast');
let toastTimeout;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 1900);
}


// Certificate cards open a larger preview. Add the actual image files in assets/certificates.
const certificateModal = $('#certificateModal');
const certificatePreviewImage = $('#certificatePreviewImage');
const certificateMissing = $('#certificateMissing');
const certificateModalTitle = $('#certificateModalTitle');
let lastCertificateTrigger = null;

function openCertificate(card) {
  const imagePath = card.dataset.certificate;
  const title = card.dataset.certTitle || 'Certificate';
  lastCertificateTrigger = card;
  certificateModalTitle.textContent = title;
  certificateMissing.hidden = true;
  certificatePreviewImage.hidden = false;
  certificatePreviewImage.alt = `${title} certificate`;
  certificatePreviewImage.src = imagePath;
  certificatePreviewImage.onerror = () => {
    certificatePreviewImage.hidden = true;
    certificateMissing.hidden = false;
  };
  certificateModal.classList.add('open');
  certificateModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  $('[data-close-certificate]', certificateModal).focus?.();
}
function closeCertificate() {
  certificateModal.classList.remove('open');
  certificateModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  certificatePreviewImage.removeAttribute('src');
  if (lastCertificateTrigger) lastCertificateTrigger.focus();
}
$$('.cert-clickable').forEach(card => {
  card.addEventListener('click', () => openCertificate(card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCertificate(card);
    }
  });
});
$$('[data-close-certificate]').forEach(button => button.addEventListener('click', closeCertificate));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && certificateModal.classList.contains('open')) closeCertificate();
});

// Reading progress and back-to-top button.
const readingProgress = $('#readingProgress');
const backToTop = $('#backToTop');
function updateScrollControls() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  readingProgress.style.width = `${progress}%`;
  backToTop.classList.toggle('visible', window.scrollY > 450);
}
window.addEventListener('scroll', updateScrollControls, { passive: true });
updateScrollControls();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// A small greeting when the decorative cat is clicked.
const heroCat = $('.pixel-cat');
if (heroCat) {
  heroCat.setAttribute('role', 'button');
  heroCat.setAttribute('tabindex', '0');
  heroCat.setAttribute('aria-label', 'Say hello to the portfolio cat');
  const greetCat = () => showToast('Meow! Thanks for visiting ♥');
  heroCat.addEventListener('click', greetCat);
  heroCat.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      greetCat();
    }
  });
}
