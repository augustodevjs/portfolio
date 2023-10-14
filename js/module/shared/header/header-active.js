export default function headerActive() {
  const url = window.location.href;
  const match = url.match(/\/([^\/]+)\.html$/);
  const links = document.querySelectorAll('.menu-right nav ul li');

  if (match && match[1]) {
    switch (match[1]) {
      case 'home':
        links[0].classList.add('active');
        break;
      case 'projetos':
        links[1].classList.add('active');
        break;
      case 'contato':
        links[2].classList.add('active');
        break;
    }
  }
}
