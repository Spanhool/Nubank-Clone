const navbar = document.querySelector('header nav');
const menuToggle = navbar.querySelector('.menu-toggle');
const mobileNav = window.matchMedia('(max-width: 900px)');

function setMenuOpen(open) {
  navbar.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navbar.addEventListener('click', (event) => {
  if (event.target.closest('.links-navbar a, .botoes-navbar button')) {
    setMenuOpen(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navbar.classList.contains('menu-open')) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target)) setMenuOpen(false);
});

mobileNav.addEventListener('change', () => {
  if (navbar.contains(document.activeElement)) menuToggle.blur();
  setMenuOpen(false);
});
