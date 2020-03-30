const connection = require('../database/connection');

module.exports = {
    async exibir(request, response){

        const profs = await connection('Professor').select('*');
        
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