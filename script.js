const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuNav = document.querySelector('.menu-nav');

menuHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.toggle('active');
  menuNav.classList.toggle('active');
});

// Scroll-triggered animations
const sections = document.querySelectorAll('.secao-conteudo');

window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > sectionTop - windowHeight / 2 && scrollPosition < sectionTop + sectionHeight) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
});