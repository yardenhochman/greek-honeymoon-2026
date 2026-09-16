(() => {
  const key = 'honeymoon-packing-v1';
  let checked = new Set();
  let canSave = true;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    if (Array.isArray(saved)) checked = new Set(saved.filter(id => typeof id === 'string'));
    localStorage.setItem(key, JSON.stringify([...checked]));
  } catch { canSave = false; }
  const inputs = [...document.querySelectorAll('[data-pack-item]')];
  const known = new Set(inputs.map(input => input.dataset.packItem));
  checked = new Set([...checked].filter(id => known.has(id)));
  function render() {
    for (const input of inputs) {
      input.checked = checked.has(input.dataset.packItem);
      input.closest('li').classList.toggle('is-packed', input.checked);
    }
    document.querySelector('[data-pack-count]').textContent = checked.size;
    if (!canSave) document.querySelector('[data-pack-storage]').textContent = 'Checkmarks cannot be saved in this browser; they will last only until the page closes.';
  }
  document.addEventListener('change', event => {
    const input = event.target.closest('[data-pack-item]');
    if (!input) return;
    if (input.checked) checked.add(input.dataset.packItem); else checked.delete(input.dataset.packItem);
    try { localStorage.setItem(key, JSON.stringify([...checked])); } catch { canSave = false; }
    render();
  });
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-pack-view]');
    if (!button) return;
    for (const control of document.querySelectorAll('[data-pack-view]')) control.setAttribute('aria-pressed', String(control === button));
    for (const panel of document.querySelectorAll('[data-pack-panel]')) panel.hidden = panel.dataset.packPanel !== button.dataset.packView;
  });
  window.addEventListener('storage', event => {
    if (event.key !== key) return;
    try { const saved = JSON.parse(event.newValue || '[]'); if (Array.isArray(saved)) checked = new Set(saved.filter(id => known.has(id))); } catch { return; }
    render();
  });
  render();
})();
