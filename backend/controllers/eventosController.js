const Evento = require("../models/Evento.js")

exports.mostrar = async (req, res) => {
    try {
        const eventosSociais = await Evento.find({ tipo: "social"})
        const eventosCorporativos = await Evento.find({ tipo: "corporativo"})
        //res.status(200).json({ eventos })
        res.render("eventos", { eventosSociais, eventosCorporativos })
    } catch (e) {
        res.status(500).json({ msg: "Erro ao buscar eventos." })
    }
}

exports.criar = async (req,res) => {
    const { tipo, titulo, descricao, imagem } = req.body
    const novoEvento = new Evento({ tipo, titulo, descricao, imagem })
    await novoEvento.save()
    res.status(200).json({ msg: "Evento criado com sucesso!"})
}

exports.atualizar = async (req, res) => {
    const id = req.params.id
    const { tipo, titulo, descricao, imagem } = req.body
    try {
        const filtro = { _id: id }
        const atualizar = { $set: { tipo, titulo, descricao, imagem }}
        const resultado = await Evento.updateOne(filtro, atualizar)
        res.status(200).json({ msg: "Evento atualizado com sucesso!" })
    } catch(e) {
        console.log(e)
        res.status(500).json({ msg: "Erro ao tentar atualizar evento" })
    }

}
