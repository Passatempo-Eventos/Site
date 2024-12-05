const Saude = require("../models/Saude.js")

exports.mostrar = async (req, res) => {
    try {
        const saude = await Saude.find()
        // res.status(200).json({ saude })
        res.render("saude", { saude })
    } catch (e) {
        res.status(500).json({ msg: "Erro ao buscar eventos de saúde e bem estar." })
    }
}

exports.criar = async (req,res) => {
    const { titulo, descricao, exemplo, imagem, descImagem } = req.body
    const novoEvento = new Saude({ titulo, descricao, exemplo, imagem, descImagem })
    await novoEvento.save()
    res.status(200).json({ msg: "Evento de saúde e bem estar criado com sucesso!"})
}

exports.atualizar = async (req, res) => {
    const id = req.params.id
    const { titulo, descricao, exemplo, imagem, descImagem } = req.body
    try {
        const filtro = { _id: id }
        const atualizar = { $set: { titulo, descricao, exemplo, imagem, descImagem }}
        const resultado = await Saude.updateOne(filtro, atualizar)
        res.status(200).json({ msg: "Evento de saúde e bem estar atualizado com sucesso!" })
    } catch(e) {
        console.log(e)
        res.status(500).json({ msg: "Erro ao tentar atualizar evento de saúde e bem estar!" })
    }

}
