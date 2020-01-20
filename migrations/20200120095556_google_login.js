exports.up = function(knex) {
    return knex.schema.alterTable('users', (table)=>{
        table.string('googleID');
        table.string('googleAccessToken');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('users', (table)=>{
        table.dropColumn('googleID');
        table.dropColumn('googleAccessToken')
    })
  };
  