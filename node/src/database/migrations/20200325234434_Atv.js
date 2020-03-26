
exports.up = function(knex) {
    return knex.schema.createTable('Atv', function(table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('descricao').notNullable();
        table.string('data').notNullable();
        table.string('codigo_tcc').notNullable();

        table.foreign('codigo_tcc').references('id').inTable('Tcc');
    });
  
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Atv');
};
