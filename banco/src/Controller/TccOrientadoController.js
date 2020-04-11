const connection = require('../database/connection');

module.exports = {
    async exibir(request, response){

        const { matricula_prof} = request.params;

        const tccs = await connection('TccOrientado')
        .where('matricula_prof', matricula_prof)
        .select('*')
        
        return response.json(tccs);
        
        },
    
    async create(request,response){
        const {nome, nome_aluno, link} = request.body;
        const { matricula_prof} = request.params;
        
        await connection('TccOrientado').insert({
            nome,
            nome_aluno,
            link,
            matricula_prof,
        })

        return response.status(204).send();
    },

    async delete(request, response) {

        const { id } = request.params;

        await connection('TccOrientado').where('id', id).delete();
        return response.status(204).send();

    },
};