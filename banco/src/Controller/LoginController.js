const connection = require('../Database/connection');

module.exports = {
    async login(request, response){

        const matricula  = request.headers.matricula;
        const senha  = request.headers.senha;
        
        const login = await connection('Pessoa')
        .select('*')
        .where('matricula', matricula)
        .where('senha', senha)
        .first();

        if(!login){
            return response.status(400).json('Usuário não encontrado');
        }
        
        return response.json(login);
        
        },
    }