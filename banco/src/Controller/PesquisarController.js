const connection = require('../database/connection');

module.exports = {
    async exibir(request, response){

      const{nome} = request.params;
    
      const {page = 1} = request.query;

      const profs = await connection('Pessoa')
      .limit(3)
      .select('*')
      .join('Professor', 'matricula', '=', 'Professor.matricula_prof')
      .where('nome', 'like', "%"+nome+"%")
      .offset((page - 1)* 3);

      return response.json(profs);
        
        },
};