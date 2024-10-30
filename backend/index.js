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

//
app.post("/signup", async (req, res) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
        const senhaCript = await bcrypt.hash(senha, 10)
        const usuario = new Usuario({email: email, senha: senhaCript})
        const mongoRes = usuario.save()
    
        console.log(mongoRes)
        res.status(201).end()
    } catch(e) {
        console.log(e)
        res.status(409).end()
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
