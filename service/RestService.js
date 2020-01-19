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

class RestService {
  constructor(knex) {
    this.knex = knex;
  }

  list() {
    return new Promise((resolve, reject) => {
      let data = this.knex
        .select(
          "id",
          "restaurants_name",
          "opening_hours",
          "cuisine",
          "path_to_img"
        )
        .from("restaurants")
        .where("cuisine", "Italian");

      return data.then(rows => {
        // console.log(rows, 'data obtained');
        // console.log(rows)
        resolve(rows);
      });
    });
  }
}
// console.log(knexConfig)
const knex = require("knex")(knexConfig);
const hi = new RestService(knex);

hi.list();

module.exports = RestService;
