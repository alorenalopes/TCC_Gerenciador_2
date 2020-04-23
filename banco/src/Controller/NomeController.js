const connection = require('../database/connection');

module.exports = {

    async exibir(request, response) {

        const {matricula} = request.params;

        const nomes = await connection('Pessoa')
        .where('matricula', matricula)
        .select(['Pessoa.nome',
        'Pessoa.matricula',
        'Pessoa.email'
        ]);

        return response.json(nomes);

    },

};