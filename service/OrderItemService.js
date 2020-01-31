const fs = require("fs");

class OrderItemService {
  constructor(knex) {
    this.knex = knex;
  }

  add(user, order) {}

  list(user) {
    if (typeof user !== "undefined") {
      let query = this.knex
        .select("orders.user_id", "orders.status", "orders.amount")
        .from("orders")
        .innerJoin("users", "orders.user_id", "users.id")
        .where("users.email", user)
        .orderBy("orders.id", "asc");

      return query.then(rows => {
        console.log(rows, "---------------line24 service");

        resolve(rows);
      });
    }

    //   let query = this.knex
    //     .select("order_items.food_item_id", "order_items.order_id", "order_items.quantity")
    //     .from("order_items")
    //     .innerJoin("orders", "orders.user_id", "users.id")
    //     .innerJoin('food_item',"food_item.id", "order_items.food_item_id")

    //     console.log(query,'line 57');
    //   return query.then(rows => {
    //       console.log('line 28');

    //       console.log(rows);

    //     //resolve(rwos)
    //   });
  }
}

module.exports = OrderItemService;
