const express = require("express")
const router = express.Router()
const Saude = require("../models/Saude.js")

const saudeController = require("../controllers/saudeController.js")

// Rota para mostrar os eventos de saúde e bem estar
router.get("/saude", saudeController.mostrar) 

// Rota para criar um evento de saúde e bem estar
router.post("/saude", saudeController.criar)

// Rota para atualizar um evento de saúde e bem estar
router.put("/saude/:id", saudeController.atualizar)

module.exports = router