//preview img evento
const imageInput = document.getElementById('imagem')
const imagePreview = document.getElementById('imgPreview')
const previewImg = document.getElementById('preview')
const icon = imagePreview.querySelector('.icon')


imagePreview.addEventListener('click', () => {
    imageInput.click()
})

imageInput.addEventListener('change', function (event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()

        reader.onload = function (e) {
            previewImg.src = e.target.result
            previewImg.style.display = 'block'
            icon.style.display = 'none'
        }

        reader.readAsDataURL(file)
    } else {
        previewImg.src = ''
        previewImg.style.display = 'none'
        icon.style.display = 'block'
    }
})

// pop-up info admin
const imgPerfil = document.getElementById('fotoPerfilSidebar')
const admInfo = document.getElementById('admInfo')

imgPerfil.addEventListener('click', () => {
    if (admInfo.style.display === 'block') {
        admInfo.style.display = 'none'
    } else {
        admInfo.style.display = 'block'
    }
})

document.addEventListener('click', (event) => {
    if (!admInfo.contains(event.target) && event.target !== imgPerfil) {
        admInfo.style.display = 'none'
    }
})


//foto perfil sidebar
const fotoInputSidebar = document.getElementById('fotoAdmSidebar')
const fotoPerfilSidebar = document.getElementById('fotoPerfilSidebar')
const fotoButtonSidebar = document.getElementById('fotoButtonSidebar')

fotoButtonSidebar.addEventListener('click', () => {
    fotoInputSidebar.click()
})

fotoInputSidebar.addEventListener('change', function (event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = function (e) {
            fotoPerfilSidebar.src = e.target.result
        }
        reader.readAsDataURL(file)
    } else {
        fotoPerfilSidebar.src = '../public/images/passatempo_logo.png'
    }
})

//foto perfil navbar
const fotoInputNavbar = document.getElementById('fotoAdmNavbar')
const fotoPerfilNavbar = document.getElementById('fotoPerfilNavbar')
const fotoButtonNavbar = document.getElementById('fotoButtonNavbar')

fotoButtonNavbar.addEventListener('click', () => {
    fotoInputNavbar.click()
})

fotoInputNavbar.addEventListener('change', function (event) {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = function (e) {
            fotoPerfilNavbar.src = e.target.result
        }
        reader.readAsDataURL(file)
    } else {
        fotoPerfilNavbar.src = '../public/images/passatempo_logo.png'
    }
})


//adicionar
const addButton = document.getElementById('addButton')
addButton.addEventListener('click', function () {
    addEvento()
})


async function addEvento() {
    let tipoInput = document.querySelector('#tipo')
    let tituloInput = document.querySelector('#titulo')
    let imgInput = document.querySelector('#imagem')
    let imgDescricaoInput = document.querySelector('#descricao-img')
    let descricaoInput = document.querySelector('#descricao')
    let tipo = tipoInput.value
    let titulo = tituloInput.value
    let img = imgInput.value
    let imgDescricao = imgDescricaoInput.value
    let descricao = descricaoInput.value

    if (tipo && titulo && descricao) {
        try {
            console.log(tipo)
            const eventosEndpoint = "/eventos"
            const oficinasEndpoint = "/oficinas"
            const saudeEndpoint = "/saude"
            if (tipo === 1) {
                const urlCompleta = `${protocolo}${baseURL}${eventosEndpoint}`
                await axios.post(urlCompleta, { tipo: "social", titulo, descricao, imagem: "https://plus.unsplash.com/premium_photo-1732569119693-05321f406646?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D" })
            }
            //
            //const addEndpoint = '/add-evento'
            //const URLcompleta = `${protocolo}${baseURL}${addEndpoint}`
            //
            //await axios.post(URLcompleta, {
            //    tipo,
            //    titulo,
            //    img,
            //    imgDescricao,
            //    descricao,
            //})

            tipoInput.value = ''
            tituloInput.value = ''
            imgInput.value = ''
            imgDescricaoInput.value = ''
            descricaoInput.value = ''

            //falta parte backend
            exibirAlerta('.alert-modal-add', 'Evento adicionado com sucesso!', ['show', 'alert-success'], ['d-none'], 2000)
            exibirModal('#alertModal')
            ocultarModal('#alertModal', 2000)


        } catch (e) {
            exibirAlerta('.alert-modal-add', 'Falha de conexão. Por favor, tente mais tarde.', ['show', 'alert-danger'], ['d-none'], 2000)
            exibirModal('#alertModal')
            ocultarModal('#alertModal', 2000)
        }

    } else {
        exibirAlerta('.alert-modal-add', 'Preencha todos os campos.', ['show', 'alert-danger'], ['d-none'], 2000)
        exibirModal('#alertModal')
        ocultarModal('#alertModal', 2000)
    }
}


function exibirAlerta(seletor, mensagem, classesToAdd, classesToRemove, timeout) {
    const alerta = document.querySelector(seletor)
    alerta.innerHTML = mensagem
    alerta.classList.add(...classesToAdd)
    alerta.classList.remove(...classesToRemove)
    setTimeout(() => {
        alerta.classList.remove(...classesToAdd)
        alerta.classList.add(...classesToRemove)
    }, timeout)
}

function exibirModal(seletor) {
    const modal = new bootstrap.Modal(document.querySelector(seletor))
    modal.show()
}

function ocultarModal(seletor, timeout) {
    setTimeout(() => {
        let modal = bootstrap.Modal.getInstance(document.querySelector(seletor))
        modal.hide()
    }, timeout)
}

//campo exemplo p/ saude e bem estar
document.addEventListener('DOMContentLoaded', () => {
    const tipoSelect = document.getElementById('tipo')
    const exemplo = document.getElementById('exemplo')
    const savedTipo = localStorage.getItem('selectedTipo')
    if (savedTipo) {
        tipoSelect.value = savedTipo
        if (savedTipo === '4') {
            exemplo.classList.remove('d-none')
        }
    }
    tipoSelect.addEventListener('change', function () {
        localStorage.setItem('selectedTipo', this.value)

        if (this.value === '4') {
            exemplo.classList.remove('d-none')
        } else {
            exemplo.classList.add('d-none')
        }
    })
})
