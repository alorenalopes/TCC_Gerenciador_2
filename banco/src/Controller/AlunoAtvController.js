const connection = require('../database/connection');

module.exports = {

    async exibir(request, response) {

        const { matricula_aluno } = request.params;

        const atvs = await connection('Tcc')
            .select('*')
            .where('matricula_aluno', matricula_aluno)
            .join('Atv', 'Tcc.id', '=', 'Atv.codigo_tcc')

        return response.json(atvs);

    },

    
};