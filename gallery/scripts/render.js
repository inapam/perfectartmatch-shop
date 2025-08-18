async function loadData() {
  const resp = await fetch('./data/submissions.json');
  return resp.json();
}

function card(item) {
  const hidden = item.hidden ? 'card muted' : 'card';
  return `<div class="${hidden}">
    <img src="${item.image || ''}" alt="artwork">
    <h3>${item.title || 'Untitled'}</h3>
    <p><strong>${item.artist || ''}</strong> • ${item.category || ''}</p>
    <p>${item.description || ''}</p>
  </div>`;
}

function render(list) {
  const grid = document.getElementById('grid');
  grid.innerHTML = list.map(card).join('');
}

function applyFilters(data) {
  const a = document.getElementById('filter-artist').value.trim().toLowerCase();
  const c = document.getElementById('filter-category').value.trim().toLowerCase();
  return data.filter(x =>
    (!a || (x.artist || '').toLowerCase().includes(a)) &&
    (!c || (x.category || '').toLowerCase().includes(c))
  );
}

(async () => {
  const data = await loadData();
  const inputA = document.getElementById('filter-artist');
  const inputC = document.getElementById('filter-category');
  const clear = document.getElementById('clear-filters');

  function update() { render(applyFilters(data)); }
  inputA.addEventListener('input', update);
  inputC.addEventListener('input', update);
  clear.addEventListener('click', () => { inputA.value=''; inputC.value=''; update(); });

  update();
})();