
exports.up = function(knex) {
    return knex.schema.createTable('Propostas', function(table){
        table.increments();
        table.string('nome').notNullable();
        table.string('descricao').notNullable();
        table.string('matricula_prof').notNullable();

        table.foreign('matricula_prof').references('matricula').inTable('Pessoa');
        });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Propostas');
};
