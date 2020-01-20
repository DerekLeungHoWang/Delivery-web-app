const fs = require('fs');


class OrderService{
    constructor(knex){
        this.knex = knex;
    }

    add(newOrder, user){

        let query = this.knex
        .select('id')
        .from('users')
        .where('users.email', user)      

            return query.then((rows) =>{
                console.log(rows[0].id, '<=====this is the id');
                console.log(rows.length);
                
                if(rows.length === 1){


                    return this.knex.insert({ 
                        user_id: rows[0].id,
                        
                    }).into('order_items')
            }else{
                    throw new Error('Cannot add a note to a user that doesnt exist')
                }
            });
     
    };

    list(user){
        if(typeof user !== 'undefined'){
            let query = this.knex.select('notes.id', 'notes.content')
                .from('notes')
                .innerJoin('users', 'notes.user_id', 'users.id')
                .where('users.username', user) //user is the argument
                .orderBy('notes.id', 'asc')
                //what is asc
                return query.then((rows)=>{
                    console.log(rows, 'pp');
                    return rows.map(row=>({
                        id: row.id,
                        content: row.content
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