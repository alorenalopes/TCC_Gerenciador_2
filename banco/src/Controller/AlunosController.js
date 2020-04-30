const connection = require('../database/connection');

module.exports = {

    async exibir(request, response) {

        const { matricula_aluno } = request.params;

        const alunos = await connection('Tcc')
            .select('*')
            .where('matricula_prof', matricula_aluno)
            .join('Pessoa', 'matricula_aluno', '=', 'Pessoa.matricula')

        return response.json(alunos);

    },    
};