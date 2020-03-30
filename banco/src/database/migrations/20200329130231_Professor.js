exports.up = function(knex) {
    return knex.schema.createTable('Professor', function(table){
        table.string('matricula_prof').primary();
        table.string('area').notNullable();
        table.decimal('disponibilidade',1).notNullable();

        table.foreign('matricula_prof').references('matricula').inTable('Pessoa');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Professor');
};
