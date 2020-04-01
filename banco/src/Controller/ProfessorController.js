const connection = require('../database/connection');

module.exports = {
    async exibir(request, response){

        const {page = 1} = request.query; 

        const [count] = await connection('Professor')
        .count();
        
        const profs = await connection('Professor')
        .limit(3)
        .select('*')
        .join('Pessoa', 'matricula_prof', '=', 'Pessoa.matricula')
        .offset((page - 1)* 3);

        response.header('X-Total-Count',count['count(*)']);
        
        return response.json(profs);
        
        },
    
    async create(request,response){
        const {matricula_prof, area, disponibilidade} = request.body;

        await connection('Professor').insert({
            matricula_prof,
            area,
            disponibilidade,
        })

        return response.status(204).send();
    }
};