const express = require("express")
const router = express.Router()
const Oficina = require("../models/Oficina.js")

const oficinasController = require("../controllers/oficinasController.js")

// Rota para mostrar as oficinas
router.get("/oficinas", oficinasController.mostrar) 

// Rota para criar uma oficina
router.post("/oficinas", oficinasController.criar)

// Rota para atualizar uma oficina
router.put("/oficinas/:id", oficinasController.atualizar)

module.exports = router