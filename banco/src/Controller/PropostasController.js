const connection = require('../database/connection');

module.exports = {
    async exibir(request, response) {

        const { matricula_prof } = request.params;

        const propostas = await connection('Proposta')
            .where('matricula_prof', matricula_prof)
            .select('*')

        return response.json(propostas);

    },

    async create(request, response) {
        const { nome, descricao } = request.body;
        const { matricula_prof } = request.params;

        const prof = await connection('Pessoa')
        .select('nome')
        .where('matricula', matricula_prof)
        .first();

        if(!prof){
            return response.status(400).json('Professor não encontrado');
        }

        await connection('Proposta').insert({
            nome,
            descricao,
            matricula_prof,
        })

        return response.status(204).send();
    },

    async delete(request, response) {

        const { id } = request.params;

        await connection('Proposta').where('id', id).delete();
        return response.status(204).send();

    },
};