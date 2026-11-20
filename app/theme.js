const systemTheme = matchMedia('(prefers-color-scheme: dark)');
function applyTheme(value) {
  const dark = value ? value === 'dark' : systemTheme.matches;
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('#theme')?.setAttribute('aria-pressed', String(dark));
}
function savedTheme() {
  try { return localStorage.getItem('portfolio-theme'); } catch { return null; }
}
applyTheme(savedTheme());
systemTheme.addEventListener('change', () => applyTheme(savedTheme()));
