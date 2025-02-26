const mode = document.querySelector(".mode");
const body = document.querySelector("body");
const cover = document.getElementById("cover");

mode.addEventListener("click",(e) => {

    body.classList.toggle("dark-mode");
    cover.classList.toggle("move-right");
    cover.classList.toggle("move-left");

    
})