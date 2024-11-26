const mongoose = require("mongoose")

const oficinaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("Oficina", oficinaSchema)
