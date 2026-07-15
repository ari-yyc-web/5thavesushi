// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => preloader.classList.add('done'), 500);
});

// Nav scroll state (passive listener so scrolling never waits on JS)
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
navBurger.addEventListener('click', () => {
  navBurger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navBurger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Cursor dot (desktop)
const cursorDot = document.getElementById('cursorDot');
if (cursorDot) {
  window.addEventListener('mousemove', (e) => {
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .g-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursorDot.style.transform = 'translate(-50%,-50%) scale(2.4)');
    el.addEventListener('mouseleave', () => cursorDot.style.transform = 'translate(-50%,-50%) scale(1)');
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-img');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => io.observe(el));

// Stagger hero lines on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-title .line').forEach((line, i) => {
    setTimeout(() => line.classList.add('in'), 700 + i * 140);
  });
  document.querySelectorAll('.hero-sub.reveal, .hero-actions.reveal, .eyebrow.reveal').forEach((el, i) => {
    if (el.closest('.hero')) setTimeout(() => el.classList.add('in'), 1100 + i * 120);
  });
});

// Reservation / inquiry forms (guarded — not every page has one)
document.querySelectorAll('form[data-mock-submit]').forEach(form => {
  const success = form.querySelector('.form-success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (success) success.classList.add('show');
    form.reset();
    if (success) setTimeout(() => success.classList.remove('show'), 6000);
  });
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-question');
  if (!q) return;
  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    item.closest('.faq-list').querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
