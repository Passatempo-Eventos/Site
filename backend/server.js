require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const usuarioRoutes = require("./routes/usuarioRoutes.js")
const eventosRoutes = require("./routes/eventosRoutes.js")
const oficinasRoutes = require("./routes/oficinasRoutes.js")

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static("../frontend/public"))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../frontend/views"))

app.use("/", usuarioRoutes)
app.use("/", eventosRoutes)
app.use("/", oficinasRoutes)

// Função para criar conexão com o banco de dados (MongoDB)
async function conectarMongo() {
    const dbUsuario = process.env.DB_USUARIO
    const dbSenha = process.env.DB_SENHA
    await mongoose.connect(`mongodb+srv://${dbUsuario}:${dbSenha}@cluster0.tmbsu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}

app.listen(PORT, () => {
    try {
        conectarMongo()
        console.log(`Servidor rodando na porta ${PORT}...`)
    } catch(e) {
        console.log(e)
    }
})
