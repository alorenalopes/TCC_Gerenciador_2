exports.up = function(knex) {
    return knex.schema.createTable('Tcc', function(table){
        table.string('id').primary();
        table.string('nome_tcc').notNullable();
        table.string('matricula_prof').notNullable();
        table.string('matricula_aluno').notNullable();

        table.foreign('matricula_prof').references('matricula').inTable('Pessoa');
        table.foreign('matricula_aluno').references('matricula').inTable('Pessoa');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Tcc');
};
