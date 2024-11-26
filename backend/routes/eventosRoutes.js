const express = require("express")
const router = express.Router()
const Evento = require("../models/Evento.js")

const eventosController = require("../controllers/eventosController.js")

// Rota para mostrar os eventos
router.get("/eventos", eventosController.mostrar) 

// Rota para criar um evento
router.post("/eventos", eventosController.criar)

// Rota para atualizar um evento
router.put("/eventos/:id", eventosController.atualizar)

module.exports = router
