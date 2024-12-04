const express = require("express")
const router = express.Router()

const adminController = require("../controllers/adminController.js")

// Rota para mostrar os eventos
router.get("/admin", adminController.mostrar) 

module.exports = router
