const express = require("express")
const router = express.Router()

const usuarioController = require("../controllers/usuarioController.js")

// Rota para criar um usuário.
router.post("/signup", usuarioController.criar)
 
// Rota para autenticar usuário.
router.post("/login", usuarioController.autenticar)

module.exports = router
