const Evento = require("../models/Evento.js")
const Oficina = require("../models/Oficina.js")
const Saude = require("../models/Saude.js")

exports.mostrar = async (req, res) => {
    try {
        const eventosSociais = await Evento.find({ tipo: "social"})
        const eventosCorporativos = await Evento.find({ tipo: "corporativo"})
        const oficinas = await Oficina.find()
        const saude = await Saude.find()
        //res.status(200).json({ eventos })
        res.render("admin", { eventosSociais, eventosCorporativos, oficinas, saude })
    } catch (e) {
        res.status(500).json({ msg: "Erro ao buscar eventos." })
    }
}
