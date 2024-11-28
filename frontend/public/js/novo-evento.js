
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


//sair
const sairButton = document.getElementById('sairButton');
sairButton.addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/Site/frontend/index.html'
});

//cancelar
const cancelarButton = document.getElementById('cancelarButton');
cancelarButton.addEventListener('click', function () {
    window.location.href = '' //redirecionar para página principal do adm
});

//adicionar
const addButton = document.getElementById('addButton');
addButton.addEventListener('click', function () {
    addEvento();
});


async function addEvento() {
    let tipoInput = document.querySelector('#tipo');
    let tituloInput = document.querySelector('#titulo');
    let imgInput = document.querySelector('#imagem');
    let imgDescricaoInput = document.querySelector('#descricao-img');
    let descricaoInput = document.querySelector('#descricao');
    let tipo = tipoInput.value;
    let titulo = tituloInput.value;
    let img = imgInput.value;
    let imgDescricao = imgDescricaoInput.value;
    let descricao = descricaoInput.value;

    if (tipo && titulo && img && imgDescricao && descricao) {
        try {
            const addEndpoint = '/add-evento';
            const URLcompleta = `${protocolo}${baseURL}${addEndpoint}`;

            await axios.post(URLcompleta, {
                tipo,
                titulo,
                img,
                imgDescricao,
                descricao,
            });

            tipoInput.value = '';
            tituloInput.value = '';
            imgInput.value = '';
            imgDescricaoInput.value = '';
            descricaoInput.value = '';

            exibirAlerta('.alert-modal-add', 'Evento adicionado com sucesso!', ['show', 'alert-success'], ['d-none'], 2000);
            exibirModal('#alertModal');
            ocultarModal('#alertModal', 2000);


        } catch (e) {
            exibirAlerta('.alert-modal-add', 'Falha de conexão. Por favor, tente mais tarde.', ['show', 'alert-danger'], ['d-none'], 2000);
            exibirModal('#alertModal');
            ocultarModal('#alertModal', 2000);
        }

    } else {
        exibirAlerta('.alert-modal-add', 'Preencha todos os campos.', ['show', 'alert-danger'], ['d-none'], 2000);
        exibirModal('#alertModal');
        ocultarModal('#alertModal', 2000);
    }
}


function exibirAlerta(seletor, mensagem, classesToAdd, classesToRemove, timeout) {
    const alerta = document.querySelector(seletor);
    alerta.innerHTML = mensagem;
    alerta.classList.add(...classesToAdd);
    alerta.classList.remove(...classesToRemove);
    setTimeout(() => {
        alerta.classList.remove(...classesToAdd);
        alerta.classList.add(...classesToRemove);
    }, timeout);
}

function exibirModal(seletor) {
    const modal = new bootstrap.Modal(document.querySelector(seletor));
    modal.show();
}

function ocultarModal(seletor, timeout) {
    setTimeout(() => {
        let modal = bootstrap.Modal.getInstance(document.querySelector(seletor))
        modal.hide()
    }, timeout)
}

