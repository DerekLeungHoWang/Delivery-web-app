const fs = require("fs");

class OrderItemService {
  constructor(knex) {
    this.knex = knex;
  }

  add(user, order) {
    //order =======================================================
    // console.log(
    //   "order ======================================================="
    // );

    // console.log(order);

    let foodIdArray = [];
    let foodQuantityArray = [];
    for (let i = 0; i < order.length; i++) {
      //   console.log(order[i]);

      foodIdArray.push(parseInt(order[i].food_item_id_arr));
      foodQuantityArray.push(parseInt(order[i].quantity));
    }

    // console.log(foodIdArray, "line=========================18");

    let query = this.knex("orders");

    return query.then(rows => {
      //   console.log("line 28");
      //   console.log(rows);

      //   console.log(rows.slice(-1)[0].id);

      let latest_order_id = rows.slice(-1)[0].id + 1;

      const ordersToInsert = order.map(order => ({
        food_item_id: order.food_item_id_arr,
        order_id: latest_order_id,
        quantity: order.quantity
      }));

      //   console.log(ordersToInsert);

      return this.knex.insert(ordersToInsert).into("order_items");
    });
  }

  list(user, order) {
    console.log(user.id);
    if (typeof user !== "undefined") {
      let query = this.knex
        .from("order_items")
        .innerJoin("orders", "order_items.order_id", "orders.id")
        .innerJoin("users", "orders.user_id", "users.id")
        .where("users.id", user.id);

      return query.then(rows => {
        console.log(rows);
        return rows.map(row => ({
          food_item_id: row.food_item_id,
          order_id: row.order_id,
          quantity: row.quantity
        }));
      });
    }
  }
}

module.exports = OrderItemService;

//===================================================================================
// let query = this.knex
// .select("order_items.food_item_id","order_items.order_id", "order_items.quantity")
// .from("order_items")

// return query.then(rows=>{
//     console.log('this line 14');

//     console.log(rows)

// })

//===================================================================================

//===================================================================================
// let query = this.knex
// .from("order_items")
// .innerJoin('food_item','order_items.food_item_id','=','food_item.id')

// console.log(query);

//===================================================================================

//   .from("food_item")
// //   .innerJoin("restaurants", "food_item.restaurants_id", "restaurants.id")
//   .whereIn("food_item.id", array);

//===================================================================================

//===================================================================================

//   return this.knex
//   .insert({
//       food_item_id:1,
//       order_id:1,
//       quantity:2
//   }).into("order_items");
//===================================================================================
