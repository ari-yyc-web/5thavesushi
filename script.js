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

// Mobile menu (side drawer)
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

function closeMobileMenu() {
  navBurger.classList.remove('open');
  mobileMenu.classList.remove('open');
  if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove('open');
}

navBurger.addEventListener('click', () => {
  const opening = !mobileMenu.classList.contains('open');
  navBurger.classList.toggle('open', opening);
  mobileMenu.classList.toggle('open', opening);
  if (mobileMenuBackdrop) mobileMenuBackdrop.classList.toggle('open', opening);
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', closeMobileMenu);
});
if (mobileMenuBackdrop) {
  mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
}

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

// Inquiry forms — real submission to a form endpoint (Formspree or similar).
// Guarded: not every page has one. Success is shown ONLY after the endpoint
// actually accepts the submission — never optimistically — so a guest is never
// told "received" when nothing was sent. If the endpoint is missing or still the
// placeholder, or the request fails, we surface an error and point to the phone.
document.querySelectorAll('form[data-async-submit]').forEach(form => {
  const success = form.querySelector('.form-success');
  const errorEl = form.querySelector('.form-error');
  const btn = form.querySelector('[type="submit"]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (success) success.classList.remove('show');
    if (errorEl) errorEl.classList.remove('show');

    const endpoint = form.getAttribute('action');
    if (!endpoint || /YOUR_FORM_ID/.test(endpoint)) {
      // Not configured yet — fail loudly instead of faking success.
      if (errorEl) errorEl.classList.add('show');
      return;
    }

    const label = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        if (success) success.classList.add('show');
        form.reset();
        if (success) setTimeout(() => success.classList.remove('show'), 8000);
      } else {
        if (errorEl) errorEl.classList.add('show');
      }
    } catch (err) {
      if (errorEl) errorEl.classList.add('show');
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = label; }
    }
  });
});

// Menu jump chips — highlight the group you're currently reading.
// The menu pages run ~10 phone screens, so without this the sticky chip strip
// gives no clue where you are. Guarded: other pages have no chips.
const dishJump = document.querySelector('.dish-jump');
if (dishJump) {
  const chips = new Map();
  dishJump.querySelectorAll('a').forEach(a => {
    const group = document.querySelector(a.getAttribute('href'));
    if (group) chips.set(group, a);
  });

  let current = null;
  const setActive = (chip) => {
    if (chip === current) return;
    if (current) current.classList.remove('is-active');
    chip.classList.add('is-active');
    current = chip;
    // Keep the active chip in view in the horizontally scrolling strip.
    chip.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  };

  // Topmost group intersecting the band just below the nav wins.
  const spy = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting);
    if (!visible.length) return;
    const top = visible.reduce((a, b) =>
      a.boundingClientRect.top < b.boundingClientRect.top ? a : b);
    const chip = chips.get(top.target);
    if (chip) setActive(chip);
  }, { rootMargin: '-140px 0px -55% 0px', threshold: 0 });

  chips.forEach((_, group) => spy.observe(group));
}

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
