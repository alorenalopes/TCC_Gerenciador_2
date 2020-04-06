const connection = require('../database/connection');

module.exports = {

    async exibir(request, response) {

        const { matricula } = request.params;

        const alunos = await connection('Tcc')
            .select('*')
            .where('matricula_prof', matricula)
            .join('Pessoa', 'matricula_aluno', '=', 'Pessoa.matricula')

        return response.json(alunos);

    },
};