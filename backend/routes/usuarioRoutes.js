const express = require("express")
const router = express.Router()

const usuarioController = require("../controllers/usuarioController.js")

// Rota para criar um usuário.
router.post("/signup", usuarioController.criar)
 
// Rota para verificar usuário.
router.post("/signin", usuarioController.verificar)

module.exports = router
