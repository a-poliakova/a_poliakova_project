const btn = document.querySelector(".js-menu-btn");
const menu = document.querySelector(".js-menu-list");

btn.addEventListener("click", function(){
    menu.classList.toggle("header__menu-list_open");
    btn.classList.toggle("header__menu-btn_close");
})

