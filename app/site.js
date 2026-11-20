applyTheme(savedTheme());
document.querySelector('#theme').addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('portfolio-theme', next); } catch {}
});
for (const button of document.querySelectorAll('.details-button')) {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    panel.showModal();
    panel.scrollTop = 0;
    const gallery = panel.querySelector('.gallery');
    gallery.scrollLeft = 0;
    gallery.dispatchEvent(new Event('scroll'));
  });
}
const dialog = document.querySelector('#image-viewer');
document.addEventListener('click', event => {
  const link = event.target.closest('a.zoom');
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const photo = dialog.querySelector('img');
  photo.src = link.href;
  photo.alt = link.querySelector('img').alt;
  dialog.querySelector('#caption').textContent = link.nextElementSibling.textContent;
  dialog.showModal();
});
for (const modal of document.querySelectorAll('dialog')) {
  modal.addEventListener('click', event => {
    if (event.target !== modal) return;
    const rect = modal.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) modal.close();
  });
}

for (const controls of document.querySelectorAll('.gallery-controls')) {
  const gallery = controls.parentElement.nextElementSibling;
  const [previous, next] = controls.querySelectorAll('button');
  function updateControls() {
    previous.disabled = gallery.scrollLeft < 1;
    next.disabled = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 1;
  }
  gallery.addEventListener('scroll', updateControls);
  new ResizeObserver(updateControls).observe(gallery);
  controls.addEventListener('click', event => {
    const step = Number(event.target.closest('button')?.dataset.step);
    if (!step) return;
    const distance = gallery.children[1].offsetLeft - gallery.children[0].offsetLeft;
    gallery.scrollBy({ left: distance * step });
  });
}

for (const toggle of document.querySelectorAll('.mobile-toggle')) {
  const group = document.getElementById(toggle.getAttribute('aria-controls'));
  const extra = Array.from(group.children).slice(Number(group.dataset.preview));
  if (!extra.length) continue;
  extra.forEach(item => item.classList.add('mobile-extra'));
  toggle.classList.add('ready');
  toggle.addEventListener('click', () => {
    const expanded = group.classList.toggle('show-all');
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.textContent = expanded ? toggle.dataset.less : toggle.dataset.more;
    if (!expanded) toggle.scrollIntoView({ block: 'nearest' });
  });
}
