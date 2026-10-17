const navigation = document.querySelector('.navigation');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-links');

if (navigation && menuButton && menu) {
  navigation.classList.add('enhanced');

  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open', !isOpen);
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  window.matchMedia('(max-width: 768px)').addEventListener('change', closeMenu);
}
