const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');
const body = document.querySelector('body')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('no-overflow');
});