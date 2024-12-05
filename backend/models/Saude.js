const mongoose = require("mongoose")

const saudeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    exemplo: { type: String },
    imagem: { type: String, required: true },
    descImagem: { type: String, required: false },
}, { timestamps: true })

module.exports = mongoose.model("Saude", saudeSchema)
