exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
      table.increments();
      table.string("full_name");
      table.string("email").unique();
      table.string("password");
      table.string("address");
      table.timestamps(false, true);
    })
    .createTable("restaurants", table => {
      table.increments();
      table.string("restaurants_name");
      table.string("opening_hours");
      table.string("cuisine");
      table.string("path_to_img");
      table.timestamps(false, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users").dropTable("restaurants");
};
