document.querySelectorAll('.scroll').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.nav-transparente');
  if (window.scrollY > 100) {
    nav.classList.add('sticky-active');
  } else {
    nav.classList.remove('sticky-active');
  }
});

