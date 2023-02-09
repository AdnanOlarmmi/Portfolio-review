// nav code in plain js
const nav = document.querySelector('nav');
const navToggle = document.querySelector('.menu-bars');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
