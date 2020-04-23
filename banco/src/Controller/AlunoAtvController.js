const connection = require('../database/connection');
const fs = require('fs');

module.exports = {

    async exibir(request, response) {

        const { matricula_aluno } = request.params;
        const status = "Concluído"

        const atvs = await connection('Tcc')
            .select('*')
            .where('matricula_aluno', matricula_aluno)
            .join('Atv', 'Tcc.id', '=', 'Atv.codigo_tcc')


        const [count] = await connection('Tcc')
            .count()
            .where('matricula_aluno', matricula_aluno)
            .join('Atv', 'Atv.codigo_tcc', '=', 'Tcc.id')

        const [count_concluido] = await connection('Atv')
            .count()
            .where('status', status)
            .join('Tcc', 'Tcc.id', '=', 'Atv.codigo_tcc')


        response.header('X-Total', count['count(*)']);
        response.header('X-Total-Concluido', count_concluido['count(*)']);
        response.header('X-Porcentagem', (count_concluido['count(*)'] * 100) / count['count(*)']);


        return response.json(atvs);
    },

    async update(request, response) {
        const {id} = request.params;
        const arquivo = request.file.path;
        
        await connection('Atv')
        .where('id', id)
        .update({
            arquivo: arquivo,
        })

        return response.status(204).send();
    },

    async delete(request, response) {
        const {id} = request.params;
        const arquivo = "";
        const arquivolocal = request.headers.arquivo;

        await connection('Atv')
        .where('id', id)
        .update({
            arquivo: arquivo,
        })

        fs.unlink(arquivolocal, (err) => {
            if (err) throw err;
            console.log('path/file.txt was deleted');
          });

        
        return response.status(204).send();
    },
       
    async listar(request, response) {

        const { id } = request.params;

        const arquivos = await connection('Atv')
            .where('id', id)
            .select('Atv.arquivo')

        return response.json(arquivos);
    }
};