const fs = require("fs");

class OrderItemService {
  constructor(knex) {
    this.knex = knex;
  }

  async add(order) {
    //order =======================================================
    console.log(
      "order ======================================================="
    );

    let query = this.knex("orders");

    return query.then( async rows => {
   
      console.log(rows);
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
      //   console.log("line 28");
      console.log(order);
      console.log("line 31 loging order ------------->");

        console.log(typeof rows.slice(-1)[0].id);

      let latest_order_id = rows.slice(-1)[0].id;
      console.log(latest_order_id);

      const ordersToInsert = order.map(order => ({
        food_item_id: parseInt(order.food_item_id_arr),
        order_id: parseInt(latest_order_id),
        quantity: parseInt(order.quantity)
      }));
      

      console.log(ordersToInsert, "line 47 OrderItemService <<<<<===========>>>>");
      // console.log(ordersToInsert[1].food_item_id, typeof ordersToInsert[1].food_item_id);
      console.log(ordersToInsert[0].order_id, typeof ordersToInsert[0].order_id);
      console.log(ordersToInsert[1].order_id, typeof ordersToInsert[1].order_id);

      // console.log(ordersToInsert[1].quantity, typeof ordersToInsert[1].quantity);

      console.log("=======SEPERATION LINE ============================================");
      
      let x = [{food_item_id: 3, order_id: 1, quantity: 4},{food_item_id: 5, order_id: 1, quantity: 2}]
      console.log(x[0].food_item_id, typeof x[0].food_item_id);
      console.log(x[0].order_id, typeof x[0].order_id);
      console.log(x[0].quantity, typeof x[0].quantity);
      
    

    // let data = await this.knex.insert([{food_item_id: 3, order_id: 1, quantity: 4},{food_item_id: 5, order_id: 1, quantity: 2}]).into("order_items");
    let data = await this.knex.insert(ordersToInsert).into("order_items");
      console.log(data)
      return data
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


// let data = await this.knex.insert([{food_item_id: 3, order_id: 1, quantity: 4},{food_item_id: 5, order_id: 1, quantity: 2}]).into("order_items").returning('id');
