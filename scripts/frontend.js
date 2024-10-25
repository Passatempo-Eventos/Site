const toggleMenu = () => {
    const sidebar = document.querySelector(".sidebar")
    const overlay = document.querySelector(".overlay")

    sidebar.classList.toggle("activate")
    overlay.classList.toggle("d-none")
}
