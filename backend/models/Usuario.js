const mongoose = require("mongoose")

// Cria o schema Usuario
const usuarioSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true}
})

module.exports = mongoose.model("Usuario", usuarioSchema)
