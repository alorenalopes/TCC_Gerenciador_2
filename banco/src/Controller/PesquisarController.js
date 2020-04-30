const connection = require('../database/connection');

module.exports = {
    async exibir(request, response){

      const{nome} = request.params;
    
      const profs = await connection('Pessoa')
      .select('*')
      .join('Professor', 'matricula', '=', 'Professor.matricula_prof')
      .where('nome', 'like', "%"+nome+"%")

      return response.json(profs);
        
        },
};