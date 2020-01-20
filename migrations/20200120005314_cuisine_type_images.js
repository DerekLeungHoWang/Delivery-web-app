
exports.up = function(knex) {
    return knex.schema.createTable('cuisine_type', (table)=>{
        table.increments();
        table.string('cuisine_name');
        table.string('image_url');
    })      
};

exports.down = function(knex) {
    return knex.schema.dropTable('cuisine_type');
};
