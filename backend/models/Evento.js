const mongoose = require("mongoose")

const eventoSchema = new mongoose.Schema({
    tipo: { type: String, enum: ["social", "corporativo"], required: true },
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model("Evento", eventoSchema)
