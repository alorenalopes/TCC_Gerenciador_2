const connection = require('../database/connection');

module.exports = {
    async exibir(request, response){

        const pessoas = await connection('Pessoa').select('*');
        
        return response.json(pessoas);
        
        },
    
    async create(request,response){
        const {matricula,cpf, nome, email, senha, tipo} = request.body;
        await connection('Pessoa').insert({
            matricula,
            cpf,
            nome,
            email,
            senha,
            tipo,
        })

        return response.status(204).send();
    }
};