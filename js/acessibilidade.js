document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btnModoEscuro = document.getElementById('modoEscuroBtn');
  const btnAltoContraste = document.getElementById('altoContrasteBtn');

  btnModoEscuro?.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');
  });

  btnAltoContraste?.addEventListener('click', () => {
    body.classList.toggle('alto-contraste');
  });
});
