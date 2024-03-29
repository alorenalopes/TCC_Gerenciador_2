const connection = require('../database/connection');
const generateId = require('../../src/generateId');


module.exports = {

    async exibir(request, response) {

        const { codigo_tcc } = request.params

        const atvs = await connection('Atv')
            .where('codigo_tcc', codigo_tcc)
            .select('*')

        return response.json(atvs)

    },

    async delete(request, response) {

        const { id } = request.params

        await connection('Atv').where('id', id).delete()
        return response.status(204).send()

    },

    async create(request, response) {
        const { nome, descricao, dataEntrega } = request.body
        const { codigo_tcc } = request.params
        const status = "A fazer"
        const id = generateId()

        const tcc = await connection('Tcc')
            .select('nome_tcc')
            .where('id', codigo_tcc)
            .first();

        if (!tcc) {
            return response.status(400).json('Tcc não cadastrado');
        }

        await connection('Atv').insert({
            id,
            nome,
            descricao,
            dataEntrega,
            status,
            codigo_tcc,
        })

        return response.status(204).send();
    },

    async update(request, response) {
        const { id } = request.params;
        let status = ""

        const status_atual = await connection('Atv')
            .where('id', id)
            .select('status')
            .first()

        if (status_atual.status === "A fazer") {
            status = "Concluído"
        } else if (status_atual.status === "Concluído") {
            status = "A fazer"
        }

        await connection('Atv')
            .where('id', id)
            .update({
                status: status,
            })

        return response.status(204).send();

    },

    async feedback(request, response) {
        const { id } = request.params;
        const {feedback} = request.body;

        const atv = await connection('Atv')
            .where('id', id)
            .select('nome')
            .first()

        if (!atv) {
            return response.status(400).json('Atividade não cadastrada');
        } 

        await connection('Atv')
            .where('id', id)
            .update({
                feedback: feedback,
            })

        return response.status(204).send();

    },

    async descricao(request, response) {
        const { id } = request.params;
        const {descricao} = request.body;

        const atv = await connection('Atv')
            .where('id', id)
            .select('nome')
            .first()

        if (!atv) {
            return response.status(400).json('Atividade não cadastrada');
        } 

        await connection('Atv')
            .where('id', id)
            .update({
                descricao: descricao,
            })

        return response.status(204).send();

    },
};