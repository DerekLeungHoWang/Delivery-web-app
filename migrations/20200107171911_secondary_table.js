exports.up = function(knex) {
    return knex.schema.createTable('orders', (table)=>{
        table.increments();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.boolean('status');
        table.decimal('amount',null)
        table.timestamps(false, true);
    }).createTable('food_item', (table)=>{
        table.increments();
        table.string('food_name');
        table.decimal('food_price',null).unsigned();
        table.string('food_image');
        table.integer('restaurants_id').unsigned();
        table.foreign('restaurants_id').references('restaurants.id');
        table.timestamps(false, true);
      })
  };   
  
  exports.down = function(knex) {
    return knex.schema.dropTable('orders')
    .dropTable('food_item')
  };

