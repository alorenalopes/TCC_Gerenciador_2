const connection = require('../database/connection');

module.exports = {
    async exibir(request, response) {

        const { matricula_aluno } = request.params;

        const infos = await connection({ P: 'Pessoa' })
            .where('P.matricula', matricula_aluno)
            .select({ nome_aluno: 'P.nome' }, { nome_prof: 'Prof.nome' }, 'P.email', 'P.cpf', 'T.nome_tcc', 'T.matricula_prof')
            .innerJoin({ T: 'Tcc' }, 'T.matricula_aluno', '=', 'P.matricula')
            .innerJoin({ Prof: 'Pessoa' }, 'T.matricula_prof', '=', 'Prof.matricula');

        return response.json(infos);

    },

    async create(request, response) {
        const { matricula, cpf, nome, email, senha, tipo } = request.body;

        const pessoa = await connection('Pessoa')
            .select('nome')
            .where('cpf', cpf)
            .where('email', email)
            .first();

        if (pessoa) {
            return response.status(400).json('Matrícula e/ou email já estão cadastrados no sistema');
        }

        await connection('Pessoa').insert({
            matricula,
            cpf,
            nome,
            email,
            senha,
            tipo,
        })

        return response.status(204).send();
    },

    async delete(request, response) {

        const { matricula } = request.params;

        await connection('Pessoa').where('matricula', matricula).delete();
        return response.status(204).send();

    },
};