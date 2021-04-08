window.onload = () =>{

    console.log("holi toy funcionando :)");

    const menu = document.getElementById('menu-hamburguer');
    const menuClose = document.getElementById('menu-close');
    const menuList = document.getElementById('menu-list');
    const menuItem1 = document.getElementById('menu-item1');
    const menuItem2 = document.getElementById('menu-item2');
    const menuItem3 = document.getElementById('menu-item3');
    const iconArrow1 = document.getElementById('icon-arrow1');
    const iconArrow2 = document.getElementById('icon-arrow2');
    const iconArrow3 = document.getElementById('icon-arrow3');

    menu.addEventListener('click', () => {
        menu.style.display = 'none';
        menuClose.style.display = 'block';
        menuList.style.display = 'block';
        menuList.classList.add("menu-list-trans");
    });
    
    menuClose.addEventListener('click', () => {
        menuList.classList.remove('menu-list-trans');
        menu.style.display = 'block';
        menuClose.style.display = 'none';
    });

    menuItem1.addEventListener('click', () => {
        iconArrow1.classList.toggle('rotate');
    });
    
    menuItem2.addEventListener('click', () => {
        iconArrow2.classList.toggle('rotate');
    });

    menuItem3.addEventListener('click', () => {
        iconArrow3.classList.toggle('rotate');
        menuItem3.classList.toggle('menu-item3-active');
    });
};