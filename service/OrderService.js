const fs = require("fs");

class OrderService {
  constructor(knex) {
    this.knex = knex;
  }

  add(user,order) {
    let query = this.knex
      .select("id")
      .from("users")
      // .innerJoin('orders','users.id', 'orders.user_id')
      .where("users.email", user);
    // .orderBy('users.id', 'asc')

    return query.then(rows => {
      if (rows.length === 1) {
        // console.log(rows);
        console.log('order======<><><><>><>>>>>>>>>>><><<><<<<><>');
        let data;
        let sum = 0;
        for(let i = 0; i< order.length;i++){
           data = JSON.parse(order[i].row_total);
          sum+=data;
            
        }
        // console.log(sum, 'line 27 orderservicejs');
     
        return this.knex
          .insert({
            user_id: rows[0].id,
            status: false,
            amount: sum
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


