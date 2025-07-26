function toggleInput(id) {
  const input = document.getElementById(id);
  input.style.display = input.style.display === 'none' ? 'block' : 'none';
}

function calcolaTasse() {
  const fatturato = parseFloat(document.getElementById('fatturato').value) || 0;
  const dich = document.getElementById('penaleDich').checked ? parseInt(document.getElementById('dichInput').value) || 0 : 0;
  const pag = document.getElementById('penalePag').checked ? parseInt(document.getElementById('pagInput').value) || 0 : 0;

  const tasseBase = fatturato * 0.05;
  const penali = fatturato * ((dich + pag) * 0.02);
  const totale = tasseBase + penali;

  document.getElementById('output').innerHTML = `
    Tasse base (5%): €${tasseBase.toFixed(2)}<br>
    Penali (+${(dich + pag) * 2}%): €${penali.toFixed(2)}<br><br>
    Totale Tasse: <strong>€${totale.toFixed(2)}</strong>
  `;
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
}
