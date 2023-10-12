export default function headerMenuHamburguer() {
  const menuMobile = document.querySelector('header .nav-bar .menu');
  const menuHamburguerOpen = document.querySelector('.menu-align-end');
  const menuHamburguerClose = document.querySelector('.close-menu');

  menuHamburguerOpen.addEventListener('click', () => {
    menuMobile.classList.add('mobile-navbar')
    document.body.style.overflow = 'hidden';
  })

  menuHamburguerClose.addEventListener('click', () => {
    menuMobile.classList.remove('mobile-navbar')
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';
  })
}
