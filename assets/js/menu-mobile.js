const menu = document.querySelector('.menu')
const menuMobile = document.querySelector('.menu__mobile')

menuMobile.addEventListener('click', () => menu.classList.toggle('--active'))
