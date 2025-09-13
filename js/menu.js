document.addEventListener('DOMContentLoaded', () => {
  const enlaceDesplegable = document.querySelector('.desplegable-toggle');
  const menuDesplegable = document.querySelector('.menu-desplegable');

  enlaceDesplegable.addEventListener('click', (e) => {
    e.preventDefault();
    menuDesplegable.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!enlaceDesplegable.contains(e.target) && !menuDesplegable.contains(e.target)) {
      menuDesplegable.classList.remove('show');
    }
  });
});