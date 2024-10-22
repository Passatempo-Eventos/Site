const navMenu = document.querySelector(".nav-menu");

function openMenu() {
    if (navMenu.classList.contains("d-none")) {
        navMenu.classList.remove("d-none");
    }
    else {
        navMenu.classList.add("d-none");
    }
}
