// menu.js - Menu responsivo e acessível
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('nav ul.menu');

  if (menuBtn && menu) {
    // Alterna visibilidade do menu ao clicar no botão
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('mostrar');

      // Atualiza aria-expanded para acessibilidade
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
      menuBtn.setAttribute('aria-expanded', !expanded);
    });

    // Configura atributos ARIA iniciais
    menuBtn.setAttribute('aria-label', 'Menu de navegação');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
