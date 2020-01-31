const fs = require("fs");

class OrderService {
  constructor(knex) {
    this.knex = knex;
  }

  add(user,content) {
    let query = this.knex
      .select("id")
      .from("users")
      // .innerJoin('orders','users.id', 'orders.user_id')
      .where("users.email", user);
    // .orderBy('users.id', 'asc')

    return query.then(rows => {
      if (rows.length === 1) {
        console.log(rows);

        return this.knex
          .insert({
            user_id: rows[0].id,
            status: false,
            amount: 999
          })
          .into("orders");
      } else {
        throw new Error("Cannot add a note to a user that doesnt exist");
      }
    });
  }

  list(user) {
    if (typeof user !== "undefined") {
      let query = this.knex
        .select("orders.user_id", "orders.status", "orders.amount")
        .from("orders")
        .innerJoin("users", "orders.user_id", "users.id")
        .where("users.email", user)
        .orderBy("orders.id", "asc");

      return query.then(rows => {
        return rows.map(row => ({
          user_id: row.user_id,
          status: row.status,
          amount: row.amount
        }));
      });
    }
  }
}

module.exports = OrderService;

// add(newOrder,user){
//     console.log(newOrder,user);
//     console.log(this.orders, 'line 43 ===========>>>>>');
//     let query = this.knex
//     .select('id')
//     .from('users')
//     .where('users.username', user);

//         return query.then((rows)=>{
//            console.log(rows[0].id);
//            return this.knex.insert({
//             content:newOrder,
//             user_id: rows[0].id

//         }).into('orders')

//         })
// }

// list(user){
//     if(typeof user !== undefined){
//         let query = this.knex.select('food_name','food_price', 'food_image', 'restaurants_id')
//         .from('food_item')
//         // .where('users.username', user)

//         console.log('line 43 orderserviceJS');

//         return query.then((rows)=>{
//             console.log('line 45 Orderservice JS');
//             return rows.map(row=>({
//                 food_item: row.food_name,
//                 food_price:row.food_price,
//                 food_image: row.food_image,
//                 restaurants_id:row.restaurants_id
//             }));
//         });
//     }

// }
