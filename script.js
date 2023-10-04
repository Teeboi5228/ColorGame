var hideMenu = document.querySelector(".fa-times");
var showMenu = document.querySelector(".fa-bars");
var menuList =document.querySelector(".nav-link");

hideMenu.addEventListener("click", function () {
    menuList.style.right = "-200px";
});
showMenu.addEventListener("click", function () {
    menuList.style.right = "0";
});
