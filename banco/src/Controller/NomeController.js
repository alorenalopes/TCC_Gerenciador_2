const connection = require('../database/connection');

module.exports = {

    async exibir(request, response) {

        const {matricula} = request.params;

        const nomes = await connection('Pessoa')
        .where('matricula', matricula)
        .select('nome')

        return response.json(nomes);

    },

};