const bcrypt = require("bcrypt")
const Usuario = require("../models/Usuario.js")

// Função para criar um usuário
exports.criar = async (req, res) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
        const senhaCript = await bcrypt.hash(senha, 10)
        const usuario = new Usuario({ email: email, senha: senhaCript })
        const mongoRes = await usuario.save()
    
        console.log(mongoRes)
        res.status(201).json({ msg: "Usuário criado com sucesso!" })
    } catch(e) {
        console.log(e)
        res.status(409).end()
    }
}

// Função para verificar se o usuário existe
exports.verificar = async (req, res) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
    
        // Verificar se email existe no banco
        const emailExiste = await Usuario.findOne({ email: email })
        if (!emailExiste) {
            res.status(401).json({ msg: "Email inválido!" })
        }
        // Caso o email for encontrado
        // verificar se a senha é valida
        const senhaValida = await bcrypt.compare(senha, emailExiste.senha)
        if (!senhaValida) {
            res.status(401).json({msg: "Senha inválida!"})
        }
        res.status(200).end()
    } catch(e) {
        console.log(e)
    }
}
