
exports.up = function(knex) {
    return knex.schema.createTable('TccOrientado', function(table){
        table.increments();
        table.string('nome').notNullable();
        table.string('nome_aluno').notNullable();
        table.string('link').notNullable();
        table.string('matricula_prof').notNullable();

        table.foreign('matricula_prof').references('matricula').inTable('Pessoa');
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable('TccOrientado');
};
