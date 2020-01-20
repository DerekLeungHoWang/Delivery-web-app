
exports.up = function(knex) {
  return knex.schema.createTable('order_items', (table)=>{
      table.increments();
      table.integer('food_item_id').unsigned();
      table.foreign('food_item_id').references('food_item.id');
      table.integer('order_id').unsigned();
      table.foreign('order_id').references('orders.id')
      table.integer('quantity');    
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('order_items');
};
