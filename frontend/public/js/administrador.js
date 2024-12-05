const protocolo = "http://"
const baseURL = "localhost:3000"


const criarEvento = async () => {
    let tipoInput = document.querySelector('#tipo')
    let tituloInput = document.querySelector('#titulo')
    let imgUrlInput = document.querySelector('#imagem-url')
    let descImagemInput = document.querySelector('#descricao-img')
    let descricaoInput = document.querySelector('#descricao')
    let exemploInput = document.querySelector('#exemplo-input')
    let tipo = tipoInput.value
    let titulo = tituloInput.value
    let imagemUrl = imgUrlInput.value
    let descImagem = descImagemInput.value
    let descricao = descricaoInput.value
    let exemplo = exemploInput.value

    if (tipo && titulo && descricao) {
        try {
            const eventosEndpoint = "/eventos"
            const oficinasEndpoint = "/oficinas"
            const saudeEndpoint = "/saude"
            if (tipo == 1) {
                const urlCompleta = `${protocolo}${baseURL}${eventosEndpoint}`
                const response = await axios.post(urlCompleta, { tipo: "social", titulo: titulo, descricao: descricao, imagem: imagemUrl, descImagem: descImagem  })
            }
            if (tipo == 2) {
                const urlCompleta = `${protocolo}${baseURL}${eventosEndpoint}`
                const response = await axios.post(urlCompleta, { tipo: "corporativo", titulo: titulo, descricao: descricao, imagem: imagemUrl, descImagem: descImagem })
            }
            if (tipo == 3) {
                const urlCompleta = `${protocolo}${baseURL}${oficinasEndpoint}`
                const response = await axios.post(urlCompleta, { titulo: titulo, descricao: descricao, imagem: imagemUrl, descImagem: descImagem })
            }
            if (tipo == 4) {
                const urlCompleta = `${protocolo}${baseURL}${saudeEndpoint}`
                const response = await axios.post(urlCompleta, { titulo: titulo, descricao: descricao, exemplo: exemplo, imagem: imagemUrl, descImagem: descImagem })
            }


            tipoInput.value = ''
            tituloInput.value = ''
            imgUrlInput.value = ''
            descImagemInput.value = ''
            descricaoInput.value = ''
            exemploInput.value = ''

            exibirAlerta('.alert-modal-add', 'Evento adicionado com sucesso!', ['show', 'alert-success'], ['d-none'], 2000)
            //exibirModal('#alertModal')
            ocultarModal('#alertModal', 2000)


        } catch (e) {
            exibirAlerta('.alert-modal-add', 'Falha de conexão. Por favor, tente mais tarde.', ['show', 'alert-danger'], ['d-none'], 2000)
            //exibirModal('#alertModal')
            ocultarModal('#alertModal', 2000)
        }

    } else {
        exibirAlerta('.alert-modal-add', 'Preencha todos os campos.', ['show', 'alert-danger'], ['d-none'], 2000)
        //exibirModal('#alertModal')
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
