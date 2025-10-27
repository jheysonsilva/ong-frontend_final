document.addEventListener('DOMContentLoaded', () => {
  const modoEscuroBtn = document.getElementById('modoEscuroBtn');
  const altoContrasteBtn = document.getElementById('altoContrasteBtn');

  if(modoEscuroBtn) {
    modoEscuroBtn.addEventListener('click', () => {
      document.body.classList.toggle('modo-escuro');
    });
  }

  if(altoContrasteBtn) {
    altoContrasteBtn.addEventListener('click', () => {
      document.body.classList.toggle('alto-contraste');
    });
  }
});
