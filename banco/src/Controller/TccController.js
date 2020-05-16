const connection = require('../database/connection');
const generateId = require('../../src/generateId');

module.exports = {
    async exibir(request, response) {

        const tcc = await connection('Tcc')
            .select('*')

        return response.json(tcc);

    },

    async create(request, response) {
        const { nome_tcc, matricula_prof, matricula_aluno } = request.body;
        const id = generateId();

        const aluno = await connection('Tcc')
            .select('nome_tcc')
            .where('matricula_aluno', matricula_aluno)
            .first();

        if (aluno) {
            return response.status(400).json('Aluno com TCC em andamento');
        }

        await connection('Tcc').insert({
            id,
            nome_tcc,
            matricula_prof,
            matricula_aluno,
        })

        return response.status(204).send();
    },

    async delete(request, response) {

        const { id } = request.params;

        await connection('Tcc').where('id', id).delete();
        return response.status(204).send();

    },
};