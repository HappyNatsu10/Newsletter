const togglebtn = document.querySelector('.toggle_btn')
const togglebtnicon = document.querySelector('.toggle_btn img')
const dropDownMenu = document.querySelector('.dropdown_menu')

togglebtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    togglebtn.classList =isOpen
    ? 'images/icon-menu.svg'
    : 'images/icon-menu-close.svg'
}