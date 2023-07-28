const menuBars = document.querySelector('.fa-bars');
const overlay = document.querySelector('.overlay');
const myLinks = document.querySelector('.my-links');
const closeBar = document.querySelector('.fa-xmark');
const menuLinks = document.querySelectorAll('.link');

menuBars.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  myLinks.classList.remove('hidden');
});

closeBar.addEventListener('click', () => {
  overlay.classList.add('hidden');
  myLinks.classList.add('hidden');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    myLinks.classList.add('hidden');
    overlay.classList.add('hidden');
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});