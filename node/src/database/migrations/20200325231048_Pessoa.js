
exports.up = function(knex) {
    return knex.schema.createTable('Pessoa', function(table){
        table.string('matricula').primary();
        table.string('cpf',14).notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.decimal('tipo', 1).notNullable();
    });
  
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Pessoa');
};
