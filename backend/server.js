require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")
const usuarioRoutes = require("./routes/usuarioRoutes.js")
const eventosRoutes = require("./routes/eventosRoutes.js")
const oficinasRoutes = require("./routes/oficinasRoutes.js")
const saudeRoutes = require("./routes/saudeRoutes.js")
const adminRoutes = require("./routes/adminRoutes.js")

const PORT = process.env.PORT || 3000 // no momento funcionando apenas com a porta 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static("../frontend"))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "../frontend/views"))

app.use("/", usuarioRoutes)
app.use("/", eventosRoutes)
app.use("/", oficinasRoutes)
app.use("/", saudeRoutes)
app.use("/", adminRoutes)

// Função para criar conexão com o banco de dados (MongoDB)
async function conectarMongo() {
    const stringConexao = process.env.DB_CONEXAO
    await mongoose.connect(stringConexao)
}

app.listen(PORT, () => {
    try {
        conectarMongo()
        console.log(`Servidor rodando na porta ${PORT}...`)
    } catch(e) {
        console.log(e)
    }
})
