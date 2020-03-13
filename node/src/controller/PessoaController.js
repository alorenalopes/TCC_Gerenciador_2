const mongoose = require('mongoose');

const Pessoa = mongoose.model('Pessoa');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const Pessoas = await Pessoa.paginate({}, { pagenpm, limit: 3})

        return res.json(Pessoas);
    },

    async exibir(req, res){ 
        const PessoaRetorno = await Pessoa.findById(req.params.id);

        return res.json(PessoaRetorno);
    },

    async membros(req, res){
        const PessoaCriar = await Pessoa.create(req.body);

        return res.json(PessoaCriar);
    },

    async update(req, res){
        const PessoaAlterar = await Pessoa.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(PessoaAlterar);
    },
    
    async delete(req, res){
        await Pessoa.findByIdAndRemove(req.params.id);

        return res.send();
    }
};