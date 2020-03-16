const mongoose = require('mongoose');

const Atividades = mongoose.model('Atividades');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const Atividadess = await Atividades.paginate({}, { page, limit: 3})

        return res.json(Atividadess);
    },

    async exibir(req, res){ 
        const AtividadesRetorno = await Atividades.findById(req.params.id);

        return res.json(AtividadesRetorno);
    },

    async membros(req, res){
        const AtividadesCriar = await Atividades.create(req.body);

        return res.json(AtividadesCriar);
    },

    async update(req, res){
        const AtividadesAlterar = await Atividades.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(AtividadesAlterar);
    },
    
    async delete(req, res){
        await Atividades.findByIdAndRemove(req.params.id);

        return res.send();
    }
};