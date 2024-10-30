require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const app = express()
app.use(express.json())
app.use(cors())

// Cria conexão com o banco de dados (MongoDB)
async function conectarMongo() {
    const dbUsuario = process.env.DB_USUARIO
    const dbSenha = process.env.DB_SENHA
    await mongoose.connect(`mongodb+srv://${dbUsuario}:${dbSenha}@cluster0.tmbsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}

// Cria o Schema de usuários
const usuarioSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true}
})
const Usuario = mongoose.model("Usuario", usuarioSchema)

// Registrar usuários (sign up)
app.post("/signup", async (req, res) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
        const senhaCript = await bcrypt.hash(senha, 10)
        const usuario = new Usuario({email: email, senha: senhaCript})
        const mongoRes = await usuario.save()
    
        console.log(mongoRes)
        res.status(201).end()
    } catch(e) {
        console.log(e)
        res.status(409).end()
    }
})

// Login (sign in)
app.post("/signin", async (req,res) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
    
        // verificar se email existe no banco
        const emailExiste = await Usuario.findOne({email: email})
        if (!emailExiste) {
            res.status(401).json({msg: "Email inválido!"})
        }
        // caso o email exista
        // verificar se a senha é valida
        const senhaValida = await bcrypt.compare(senha, emailExiste.senha)
        if (!senhaValida) {
            res.status(401).json({msg: "Senha inválida!"})
        }
        res.status(200).end()
    } catch(e) {
        console.log(e)
    }
})

app.listen(3000, () => {
    try {
        conectarMongo()
        console.log("Conectado ao banco!")
    } catch(e) {
        console.log(e)
    }
})
