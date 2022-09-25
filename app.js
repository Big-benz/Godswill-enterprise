const menuToggle = document.querySelector(".list-items");
const openBtn = document.querySelector(".open-menu-icon");
const closeBtn = document.querySelector(".close-menu-icon");

openBtn.addEventListener("click", function(){
    menuToggle.classList.toggle("active")
})