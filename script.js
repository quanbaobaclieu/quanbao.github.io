const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.classList.toggle('is-open');
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
}

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (menuButton) menuButton.classList.remove('is-open');
    if (nav) nav.classList.remove('is-open');
    if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const revealObserverSupported = 'IntersectionObserver' in window;
if (revealObserverSupported) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const stats = document.querySelectorAll('[data-count]');
const animateStats = (entry, observer) => {
  const target = entry.target;
  const value = Number(target.dataset.count);
  const suffix = target.dataset.suffix || '';
  const duration = 900;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    target.textContent = `${Math.round(value * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  if (observer) observer.unobserve(target);
};

if (revealObserverSupported) {
  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) animateStats(entry, observer);
    });
  }, { threshold: 0.7 });
  stats.forEach((stat) => statsObserver.observe(stat));
} else {
  stats.forEach((stat) => {
    stat.textContent = `${stat.dataset.count}${stat.dataset.suffix || ''}`;
  });
}

const quoteForm = document.getElementById('quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const status = form.querySelector('.form-status');
    status.textContent = `Cảm ơn ${name || 'bạn'} — Quân Bảo sẽ liên hệ trong ít phút.`;
    form.reset();
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
