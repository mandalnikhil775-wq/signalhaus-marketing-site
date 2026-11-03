const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}));

// Switch the illustrative dashboard between two sample time ranges.
const rangeButton = document.querySelector('#range-toggle');
const dashboardTitle = document.querySelector('.dash-title small');
const dashboardWindow = document.querySelector('.dash-window');
let showingQuarter = false;
rangeButton.addEventListener('click', () => {
  showingQuarter = !showingQuarter;
  rangeButton.textContent = showingQuarter ? 'Last 90 days⌄' : 'Last 30 days⌄';
  dashboardTitle.textContent = showingQuarter ? 'MONDAY, OCTOBER 19 · Q3 VIEW' : 'MONDAY, OCTOBER 19';
  dashboardWindow.classList.add('range-updated');
  window.setTimeout(() => dashboardWindow.classList.remove('range-updated'), 250);
});

// Update the Growth plan price when the billing period changes.
document.querySelectorAll('[data-billing]').forEach(button => {
  button.addEventListener('click', () => {
    const isYearly = button.dataset.billing === 'yearly';
    document.querySelectorAll('[data-billing]').forEach(option => {
      const selected = option === button;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('.price strong[data-monthly]').forEach(price => {
      price.textContent = isYearly ? price.dataset.yearly : price.dataset.monthly;
    });
  });
});
