const menu = document.querySelector('.menu')
const menuMobile = document.querySelector('.menu__mobile')
const menuItems = document.querySelectorAll('.menu__item')

menuMobile.addEventListener('click', () => menu.classList.toggle('--active'))

menuItems.forEach(element => element.addEventListener('click', 
    () => menu.classList.toggle('--active')))
