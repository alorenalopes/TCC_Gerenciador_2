const connection = require('../database/connection');
const generateId = require('../../src/generateId');

module.exports = {

    async exibir(request, response) {

        const atvs = await connection('Atv').select('*');

        return response.json(atvs);

    },

    async delete(request, response) {

        const { id } = request.params;

        await connection('Atv').where('id', id).delete();
        return response.status(204).send();

    },

    async create(request, response) {
        const { nome, descricao, data } = request.body;
        const codigo_tcc = request.headers.authorization;
        const id = generateId();

        await connection('Atv').insert({
            id,
            nome,
            descricao,
            data,
            codigo_tcc,
        })

        return response.status(204).send();
    },
};