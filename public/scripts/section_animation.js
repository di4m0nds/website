const sections = document.querySelectorAll('.section__info');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 200) {
      section.classList.add('active-animation');
    }
  });
});