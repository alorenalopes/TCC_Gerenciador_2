const mongoose = require('mongoose');

const Professor = mongoose.model('Professor');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const Professores = await Professor.paginate({}, { page, limit: 3})

        return res.json(Professores);
    },

    async exibir(req, res){ 
        const ProfessorRetorno = await Professor.findById(req.params.id);

        return res.json(ProfessorRetorno);
    },

    async membros(req, res){
        const ProfessorCriar = await Professor.create(req.body);

        return res.json(ProfessorCriar);
    },

    async update(req, res){
        const ProfessorAlterar = await Professor.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(ProfessorAlterar);
    },
    
    async delete(req, res){
        await Professor.findByIdAndRemove(req.params.id);

        return res.send();
    }
};