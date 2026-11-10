const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.querySelector('.theme-label');

function applyTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  themeIcon.textContent = dark ? '☀' : '☾';
  themeLabel.textContent = dark ? 'Light mode' : 'Dark mode';
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  try { localStorage.setItem('ranPearlTheme', theme); } catch (error) {}
}
let savedTheme = 'light';
try { savedTheme = localStorage.getItem('ranPearlTheme') || 'light'; } catch (error) {}
applyTheme(savedTheme);
themeToggle.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

// Mobile navigation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
}));

// Rotating role text
const roleElement = document.getElementById('changingRole');
const roles = ['Computer Science Student', 'OJT Applicant', 'Future Developer', 'Curious Learner'];
let roleIndex = 0;
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleElement.animate([{opacity:0, transform:'translateY(5px)'},{opacity:1, transform:'translateY(0)'}], {duration:350});
  roleElement.textContent = roles[roleIndex];
}, 2600);

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
  });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));

// Reading progress and back-to-top
const progress = document.getElementById('readingProgress');
const backToTop = document.getElementById('backToTop');
function updateScrollUI() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
  backToTop.classList.toggle('visible', window.scrollY > 450);
}
window.addEventListener('scroll', updateScrollUI, {passive:true});
updateScrollUI();
backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Certificate modal: click anywhere on a certificate card
const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalProvider = document.getElementById('modalProvider');
const imageFallback = document.getElementById('imageFallback');
const openCertificate = document.getElementById('openCertificate');
function closeModal() {
  modal.classList.remove('open'); modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = ''; modalImage.src = ''; openCertificate.href = '#';
}
document.querySelectorAll('.certificate-card').forEach(card => card.addEventListener('click', () => {
  const imagePath = card.dataset.certificate;
  modalTitle.textContent = card.dataset.title;
  modalProvider.textContent = card.dataset.provider;
  imageFallback.hidden = true;
  modalImage.hidden = false;
  modalImage.onerror = () => { modalImage.hidden = true; imageFallback.hidden = false; };
  modalImage.onload = () => { modalImage.hidden = false; imageFallback.hidden = true; };
  modalImage.src = imagePath;
  openCertificate.href = imagePath;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}));
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.querySelectorAll('[data-close-modal]').forEach(item => item.addEventListener('click', closeModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

// Project category filters
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const emptyFilter = document.getElementById('emptyFilter');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  let visibleCount = 0;
  projectCards.forEach(card => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.hidden = !show;
    if (show) visibleCount++;
  });
  emptyFilter.hidden = visibleCount !== 0;
}));

// Expandable project details
 document.querySelectorAll('.expand-project').forEach(button => button.addEventListener('click', () => {
  const card = button.closest('.project-card');
  const expanded = card.classList.toggle('expanded');
  button.innerHTML = expanded ? 'Read less <span>－</span>' : 'Read more <span>＋</span>';
  button.setAttribute('aria-expanded', String(expanded));
}));

// Highlight the current navigation section
const sections = document.querySelectorAll('main section[id]');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.querySelectorAll('a').forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, {rootMargin:'-35% 0px -55% 0px'});
sections.forEach(section => sectionObserver.observe(section));
