const connection = require('../database/connection');

module.exports = {
    async exibir(request, response){

        const propostas = await connection('Proposta').select('*');
        
        return response.json(propostas);
        
        },
    
    async create(request,response){
        const {nome, descricao, matricula_prof} = request.body;
        await connection('Proposta').insert({
            nome,
            descricao,
            matricula_prof,
        })

        return response.status(204).send();
    }
};