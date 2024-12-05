const mongoose = require("mongoose")

const oficinaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
    descImagem: { type: String, required: false },
}, { timestamps: true })

module.exports = mongoose.model("Oficina", oficinaSchema)
