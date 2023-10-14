export default function headerActive() {
  // Log initial values for debugging
  console.log('URL:', window.location.href);
  
  const url = window.location.href;
  const match = url.match(/\/([^\/]+)\.html$/);
  const links = document.querySelectorAll('.menu-right nav ul li');

  // Log values to check if the script is reaching this point
  console.log('Match:', match);
  console.log('Links:', links);

  if (match && match[1]) {
    switch (match[1]) {
      case '/':
        links[0].classList.add('active');
        break;
      case 'projetos':
        links[1].classList.add('active');
        break;
      case 'contato':
        links[2].classList.add('active');
        break;
    }
  } else {
    // Log a message if there's an issue with the match
    console.error('Error: Unable to match the URL.');
  }
}

// Run the script after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
  headerActive();
});
