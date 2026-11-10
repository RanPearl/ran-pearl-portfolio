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

const roles = ['Computer Science Student', 'OJT Applicant', 'Curious Problem Solver'];
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
