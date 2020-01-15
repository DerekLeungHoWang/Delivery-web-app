exports.up = function(knex, Promise) {
    return knex.schema.createUserTable()
    .then(createRestaurantsTable)

    function createUserTable(){
        return knex.schema.
    }


  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('users');
  };



  ('users', (table)=>{
    table.increments();
    table.string('fullName');
    table.string('email').unique();
    table.string('password');
    table.string('address');
    table.string('password');
    table.timestamps(false, true);
})