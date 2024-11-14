const mongoose = require("mongoose")

const saudeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    exemplo: { type: String },
    imagem: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("Saude", saudeSchema)
