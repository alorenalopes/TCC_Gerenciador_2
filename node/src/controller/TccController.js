const mongoose = require('mongoose');

const Tcc = mongoose.model('Tcc');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const Tccs = await Tcc.paginate({}, { page, limit: 3})

        return res.json(Tccs);
    },

    async exibir(req, res){ 
        const TccRetorno = await Tcc.findById(req.params.id);

        return res.json(TccRetorno);
    },

    async membros(req, res){
        const TccCriar = await Tcc.create(req.body);

        return res.json(TccCriar);
    },

    async update(req, res){
        const TccAlterar = await Tcc.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(TccAlterar);
    },
    
    async delete(req, res){
        await Tcc.findByIdAndRemove(req.params.id);

        return res.send();
    }
};