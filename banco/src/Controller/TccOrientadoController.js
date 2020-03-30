const connection = require('../database/connection');

module.exports = {
    async exibir(request, response){

        const tccs = await connection('TccOrientado').select('*');
        
        return response.json(tccs);
        
        },
    
    async create(request,response){
        const {nome, nome_aluno, link, matricula_prof} = request.body;
        
        await connection('TccOrientado').insert({
            nome,
            nome_aluno,
            link,
            matricula_prof,
        })

        return response.status(204).send();
    }
};