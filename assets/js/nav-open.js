const nav_menu = document.getElementById("nav-menu");
const nav_button = document.getElementById("nav-button");

let timer;

function showButton() {
    nav_button.classList.remove("hidden");
}

function hideButton() {
    if (!nav_button.classList.contains("open")) 
        nav_button.classList.add("hidden");
}

function updateTimer() {
    clearTimeout(timer);
    showButton();

    if (nav_button.classList.contains("open")) {
        return;
    } 

    timer = setTimeout(hideButton, 1500);
}

nav_button.addEventListener("click", () => {
    nav_menu.classList.toggle("open");
    nav_button.classList.toggle("open");

    nav_button.textContent = nav_button.classList.contains("open") ? ".close" : ".open";
    updateTimer(); 
});

window.addEventListener("pointerdown", updateTimer);
window.addEventListener("scroll", updateTimer);

nav_button.classList.add("hidden");