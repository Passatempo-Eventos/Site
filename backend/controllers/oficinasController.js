const Oficina = require("../models/Oficina.js")

exports.mostrar = async (req, res) => {
    try {
        const oficinas = await Oficina.find()
        //res.status(200).json({ oficinas })
        res.render("oficinas", { oficinas })
    } catch (e) {
        res.status(500).json({ msg: "Erro ao buscar as oficinas." })
    }
}

exports.criar = async (req,res) => {
    const { titulo, descricao, imagem } = req.body
    const novaOficina = new Oficina({ titulo, descricao, imagem })
    await novaOficina.save()
    res.status(200).json({ msg: "Oficina criada com sucesso!"})
}

exports.atualizar = async (req, res) => {
    const id = req.params.id
    const { titulo, descricao, imagem } = req.body
    try {
        const filtro = { _id: id }
        const atualizar = { $set: { titulo, descricao, imagem }}
        const resultado = await Oficina.updateOne(filtro, atualizar)
        res.status(200).json({ msg: "Oficina atualizada com sucesso!" })
    } catch(e) {
        console.log(e)
        res.status(500).json({ msg: "Erro ao tentar atualizar a oficina!" })
    }

}
