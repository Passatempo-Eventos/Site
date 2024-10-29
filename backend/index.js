require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(cors())

async function conectarMongo() {
    const dbUsuario = process.env.DB_USUARIO
    const dbSenha = process.env.DB_SENHA
    await mongoose.connect(`mongodb+srv://${dbUsuario}:${dbSenha}@cluster0.tmbsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}

app.listen(3000, () => {
    try {
        conectarMongo()
        console.log("Conectado ao banco!")
    } catch(e) {
        console.log(e)
    }
})
