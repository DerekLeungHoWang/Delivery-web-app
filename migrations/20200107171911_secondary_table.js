exports.up = function(knex) {
    return knex.schema.createTable('orders', (table)=>{
        table.increments();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.string('status');
        table.decimal('amount',6,2)
        table.timestamps(false, true);
    }).createTable('food_item', (table)=>{
        table.increments();
        table.string('food_name');
        table.decimal('food_price',6,2).unsigned();
        table.string('food_image');
        table.integer('restaurants_id').unsigned();
        table.foreign('restaurants_id').references('restaurants.id');
        table.timestamps(false, true);
      }).createTable('review', (table)=>{
        table.increments();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.integer('restaurants_id').unsigned();
        table.foreign('restaurants_id').references('restaurants.id');
        table.string('restaurant_image');
        table.string('comment');
      }) 
  };   
  
  exports.down = function(knex) {
    return knex.schema.dropTable('orders')
    .dropTable('food_item')
    .dropTable('review')
  };

