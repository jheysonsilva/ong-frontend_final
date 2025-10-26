document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('nav ul.menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('mostrar');
    });
  }
});
