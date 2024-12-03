// pop-up info admin
const imgPerfil = document.getElementById('fotoPerfilSidebar');
const admInfo = document.getElementById('admInfo');

imgPerfil.addEventListener('click', () => {
    if (admInfo.style.display === 'block') {
        admInfo.style.display = 'none';
    } else {
        admInfo.style.display = 'block';
    }
});

document.addEventListener('click', (event) => {
    if (!admInfo.contains(event.target) && event.target !== imgPerfil) {
        admInfo.style.display = 'none';
    }
});


//foto perfil sidebar
const fotoInputSidebar = document.getElementById('fotoAdmSidebar');
const fotoPerfilSidebar = document.getElementById('fotoPerfilSidebar');
const fotoButtonSidebar = document.getElementById('fotoButtonSidebar');

fotoButtonSidebar.addEventListener('click', () => {
    fotoInputSidebar.click();
});

fotoInputSidebar.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            fotoPerfilSidebar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        fotoPerfilSidebar.src = './public/images/passatempo_logo.png';
    }
});

//foto perfil navbar
const fotoInputNavbar = document.getElementById('fotoAdmNavbar');
const fotoPerfilNavbar = document.getElementById('fotoPerfilNavbar');
const fotoButtonNavbar = document.getElementById('fotoButtonNavbar');

fotoButtonNavbar.addEventListener('click', () => {
    fotoInputNavbar.click();
});

fotoInputNavbar.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            fotoPerfilNavbar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        fotoPerfilNavbar.src = './public/images/passatempo_logo.png';
    }
});