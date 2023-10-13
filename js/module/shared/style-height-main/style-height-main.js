export default function styleHeightMain() {
  function setMainHeight() {
    if(window.location.pathname !== '/home.html') {
      if (window.innerHeight > 712) {
        document.querySelector('main').style.height = '100vh';
      } else {
        document.querySelector('main').style.height = '100%';
      }
    }
  }

  window.addEventListener('resize', setMainHeight);
  document.addEventListener('DOMContentLoaded', setMainHeight);
}
