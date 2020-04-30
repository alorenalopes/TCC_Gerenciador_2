const connection = require('../database/connection');

module.exports = {
    async exibir(request, response) {

        const { page = 1 } = request.query;

        const [count] = await connection('Professor')
            .count();

        const profs = await connection('Professor')
            .limit(3)
            .select('*')
            .join('Pessoa', 'matricula_prof', '=', 'Pessoa.matricula')
            .offset((page - 1) * 3);

        response.header('X-Total-Count', count['count(*)']);
        response.header('X-Total-Page', Math.ceil(count['count(*)'] / 3));

        return response.json(profs);

    },

    async exibirProf(request, response) {

        const { matricula_prof } = request.params;


        const nomes = await connection('Pessoa')
            .where('matricula', matricula_prof)
            .select('*')
            .join('Professor','matricula', '=', 'matricula_prof');

        return response.json(nomes);

    },

    async create(request, response) {
        const { matricula_prof} = request.body;
        const area = ""
        const disponibilidade = ""

        const prof = await connection('Pessoa')
        .select('nome')
        .where('matricula', matricula_prof)
        .first();

        if(!prof){
            return response.status(400).json('Matrícula não cadastrada');
        }

        await connection('Professor').insert({
            matricula_prof,
            area,
            disponibilidade,
        })

        return response.status(204).send();
    },

    async update(request, response) {
        const { area, disponibilidade } = request.body;
        const {matricula_prof} = request.headers;

        await connection('Professor')
        .where('matricula_prof', matricula_prof)
        .update({
            matricula_prof : matricula_prof,
            area : area,
            disponibilidade : disponibilidade,
        })

        return response.status(204).send();
    },

    async delete(request, response) {

        const { matricula_prof } = request.params;

        await connection('Professor').where('matricula_prof', matricula_prof).delete();
        return response.status(204).send();

    },
};