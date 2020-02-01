const fs = require("fs");

const knexConfig = {
  client: "postgresql",
  connection: {
    database: "restaurants",
    user: "postgres",
    password: "postgres"
  },
  pool: { min: 2, max: 10 },
  migrations: { tableName: "knex_migrations" }
};

class FoodItemService {
  constructor(knex) {
    this.knex = knex;
  }

  list(restParams) {
    return new Promise((resolve, reject) => {
      let data;
      if (restParams !== undefined) {
        data = this.knex
          .select("food_name", "food_price", "food_image", "restaurants_id", "food_item.id")
          .from("food_item")
          .innerJoin(
            "restaurants",
            "food_item.restaurants_id",
            "restaurants.id"
          )
          .where("restaurants.id", restParams);
      
      return data.then(rows => {
        // console.log(rows, 'data obtained');
        // console.log(rows)

        resolve(rows);
      });
      } 
      //111
    });
  }
}
// console.log(knexConfig)
const knex = require("knex")(knexConfig);
const hi = new FoodItemService(knex);

hi.list();

module.exports = FoodItemService;
