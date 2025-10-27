document.addEventListener('DOMContentLoaded', () => {
  const btnModoEscuro = document.getElementById('modoEscuroBtn');
  const btnAltoContraste = document.getElementById('altoContrasteBtn');

  btnModoEscuro?.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
  });

  btnAltoContraste?.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
});
