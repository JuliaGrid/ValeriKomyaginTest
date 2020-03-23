let menuArrow = document.querySelector('.header-nav-arrow');
let menu = document.querySelector('.header-menu');
let activeItem = document.querySelector('.active');
let activeItemText = document.querySelector('.active').textContent;
let menuName = document.querySelector('.header-nav-name');


function openCloseMenu() {
    activeItem.style.display = 'none';
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
        menuArrow.style.transform = 'rotate(180deg)';
    } else {
        menu.style.display = 'none';
        menuArrow.style.transform = 'rotate(0deg)';
    }

}

menuArrow.onclick = openCloseMenu;

menuName.insertAdjacentHTML('afterbegin', `${activeItemText}`);

