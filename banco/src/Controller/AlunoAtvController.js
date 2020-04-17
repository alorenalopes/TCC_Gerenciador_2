const connection = require('../database/connection');

module.exports = {

    async exibir(request, response) {

        const { matricula_aluno } = request.params;
        const status = "Concluído"

        const atvs = await connection('Tcc')
            .select('*')
            .where('matricula_aluno', matricula_aluno)
            .join('Atv', 'Tcc.id', '=', 'Atv.codigo_tcc')


        const [count] = await connection('Tcc')
            .count()
            .where('matricula_aluno', matricula_aluno)
            .join('Atv', 'Atv.codigo_tcc', '=', 'Tcc.id')

        const [count_concluido] = await connection('Atv')
            .count()
            .where('status', status)
            .join('Tcc', 'Tcc.id', '=', 'Atv.codigo_tcc')


        response.header('X-Total', count['count(*)']);
        response.header('X-Total-Concluido', count_concluido['count(*)']);
        response.header('X-Porcentagem', (count_concluido['count(*)']* 100)/count['count(*)']);


        return response.json(atvs);

    },


};