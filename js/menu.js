// menu.js - Menu responsivo
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const menu = document.querySelector('nav ul.menu');

  btn?.addEventListener('click', () => {
    menu?.classList.toggle('mostrar');
  });
});
