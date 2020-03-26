
exports.up = function(knex) {
    return knex.schema.createTable('Professor', function(table){
        table.string('matricula_prof').primary();
        table.string('area').notNullable();
        table.string('disponibilidade').notNullable();

        table.foreign('matricula_prof').references('matricula').inTable('Pessoa');
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('Professor');
};
