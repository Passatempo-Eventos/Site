const Evento = require("../models/Evento.js")

exports.mostrar = async (req, res) => {
    try {
        const eventos = await Evento.find()
        //res.status(200).json({ eventos })
        res.render("eventos", { eventos })
    } catch (e) {
        res.status(500).json({ msg: "Erro ao buscar eventos." })
    }
}

exports.criar = async (req,res) => {
    const { titulo, descricao, imagem } = req.body
    const novoEvento = new Evento({ titulo, descricao, imagem })
    await novoEvento.save()
    res.status(200).json({ msg: "Evento criado com sucesso!"})
}

exports.atualizar = async (req, res) => {
    const id = req.params.id
    const { titulo, descricao, imagem } = req.body
    try {
        const filtro = { _id: id }
        const atualizar = { $set: { titulo, descricao, imagem }}
        const resultado = await Evento.updateOne(filtro, atualizar)
        res.status(200).json({ msg: "Evento atualizado com sucesso!" })
    } catch(e) {
        console.log(e)
        res.status(500).json({ msg: "Erro ao tentar atualizar evento" })
    }

}
