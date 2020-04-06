const connection = require('../database/connection');

module.exports = {

    async atvAluno(request, response) {

        const { codigo_tcc } = request.params;

        const [count] = await connection('Atv')
            .count();

        const atvs = await connection('Atv')
            .select('*')
            .join('Tcc', 'codigo_tcc', '=', 'Tcc.id')

        response.header('X-Total-Count', count['count(*)']);

        return response.json(atvs);

    },
};