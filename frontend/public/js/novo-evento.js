
//preview img evento
const imageInput = document.getElementById('imagem');
const imagePreview = document.getElementById('imgPreview');
const previewImg = document.getElementById('preview');
const icon = imagePreview.querySelector('.icon');


imagePreview.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
            icon.style.display = 'none';
        };

        reader.readAsDataURL(file);
    } else {
        previewImg.src = '';
        previewImg.style.display = 'none';
        icon.style.display = 'block';
    }
});

// pop-up info admin
const imgPerfil = document.getElementById('fotoPerfil');
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


//foto perfil
const fotoInput = document.getElementById('foto-adm'); 
const fotoPerfil = document.getElementById('fotoPerfil');
const fotoButton = document.getElementById('fotoButton');

fotoButton.addEventListener('click', () => {
    fotoInput.click(); 
});

fotoInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            fotoPerfil.src = e.target.result;
        };
        reader.readAsDataURL(file); 
    } else {
        fotoPerfil.src = '../public/images/passatempo_logo.png';
    }
});

