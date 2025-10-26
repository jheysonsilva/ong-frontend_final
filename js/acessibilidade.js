document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btnModoEscuro = document.getElementById('modoEscuroBtn');
  const btnAltoContraste = document.getElementById('altoContrasteBtn');

  if (btnModoEscuro) btnModoEscuro.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');
  });

  if (btnAltoContraste) btnAltoContraste.addEventListener('click', () => {
    body.classList.toggle('alto-contraste');
  });
});
