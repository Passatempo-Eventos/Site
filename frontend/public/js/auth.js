const protocolo = "http://"
const baseURL = "localhost:3000"

const fazerLogin = async () => {
    let emailLoginInput = document.querySelector("#emailLoginInput")
    let senhaLoginInput = document.querySelector("#senhaLoginInput")
    let emailLogin = emailLoginInput.value
    let senhaLogin = senhaLoginInput.value

    if (emailLogin && senhaLogin) {
        try {
            const loginEndpoint = "/login"
            const urlCompleta = `${protocolo}${baseURL}${loginEndpoint}`
            const response = await axios.post(urlCompleta, { email: emailLogin, senha: senhaLogin })
            const token = response.data
            localStorage.setItem("token", token)
            emailLoginInput.value = ""
            senhaLoginInput.value = ""
            window.location.replace("../../views/saude.html") // teste para mudar página após o login
        } catch(e) {
           console.log(e) 
        }
    }
    else {
        console.log("Por favor, preencha todos os campos!")
    }
}
