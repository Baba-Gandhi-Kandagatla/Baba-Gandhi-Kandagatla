function applyTheme(value) {
  const dark = value === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('#theme')?.setAttribute('aria-pressed', String(dark));
}
function savedTheme() {
  try { return localStorage.getItem('portfolio-theme'); } catch { return null; }
}
applyTheme(savedTheme());
