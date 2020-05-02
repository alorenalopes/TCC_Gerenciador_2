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
        const { id } = request.params;
        const arquivo_filename = request.file.filename;
        const arquivo_path = request.file.path;
        const status = 'Concluído'

        await connection('Atv')
            .where('id', id)
            .update({
                arquivo_filename: arquivo_filename,
                arquivo_path: arquivo_path,
                status: status
            })

        return response.status(204).send();
    },

    async delete(request, response) {
        const { id } = request.params;
        const arquivo_filename = "";
        const arquivo_path = "";
        const arquivo = request.headers.arquivo;
        const status = 'A fazer'

        await connection('Atv')
            .where('id', id)
            .update({
                arquivo_filename: arquivo_filename,
                arquivo_path: arquivo_path,
                status: status
            })

        fs.unlink(arquivo, (err) => {
            if (err) throw err;
        });


        return response.status(204).send();
    },

    async listar(request, response) {

        const { id } = request.params;

        const arquivos = await connection('Atv')
            .where('id', id)
            .select(['Atv.arquivo_filename',
                'Atv.arquivo_path',
                'Atv.id',
                'Atv.nome'])

        return response.json(arquivos);
    }
};