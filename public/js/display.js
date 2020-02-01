// var ordersTemplate = Handlebars.compile(
//   `
//     {{#each foodItem }}
//     <div class="cart-area">
//       <div class="container">
//           <div class="row">
//               <div class="col-12">
//                   <table class="table table-responsive">
//                       <tbody >
//                           <tr>
                          
//                               <td class="cart_product_img d-flex align-items-center">
//                               <h5>productID: {{@key}}</h6>
//                               <span> &nbsp; &nbsp;</span>
                            
//                               <h6>{{foodItemName}} </h6>
                                  
//                               </td>
//                               <td class="price"><span> $ {{foodItemPrice}}   </span></td>
//                               <td class="qty">
//                                   <div class="product-quantity">
              
//                                       <input type="number" class="qty-text" id="{{@key}}" step="1" min="1" max="99"
//                                           name="quantity" value={{food_item_count}} data-foodItemPrice={{foodItemPrice}}>
    
//                                   </div>
//                               </td>
                              
//                               <td class="row_total_price"><span> $ {{totalPrice}} </span></td>
//                               <td class="item-removal">
//                               <button class="remove-item-btn">Remove</button>
//                               </td>
//                           </tr>
//                       </tbody>
  
  
//                   </table>
//               </div>
//           </div>
//       </div>
//   </div>  {{/each}}
//     `
// );

// const food_item_name_array = [];
// const food_item_price_array = [];
// const food_item_quantity_array = [];
// let array = [];
// const reloadOrders = localStorage => {
//   // 
//   // 
//   // 
//   let foodItemName = localStorage.food_item_name.split(",");
//   let foodItemPrice = localStorage.food_item_price.split(",");

  
  
//   //if the same food is ordered, quanity+1;

//   let obj;
  
//   for (let i = 0; i < foodItemName.length; i++) {
//     obj = { foodItemName: foodItemName[i], foodItemPrice: foodItemPrice[i] };
//     array.push(obj);
    
//   }

//   //============================Count quantity of each food_item that is added to cart======================/
//   //============================Count quantity of each food_item that is added to cart======================/
//   //============================Count quantity of each food_item that is added to cart======================/
//   countQTY = () => {
    
//     let current = null;
//     let count = 0;
//     let array_count = [];

//     addCountToObj = () => {
//       for (let i = 0; i < array_count.sort().length; i++) {
//         if (array[i].foodItemName === current) {
          
          

//           array[i].food_item_count = count;
          
//         }
//       }
//     };

//     for (let i = 0; i < array.length; i++) {
//       array_count.push(array[i].foodItemName);
//     }
//     array_count.sort();
    

//     for (let i = 0; i < array_count.sort().length; i++) {
      
//       if (array_count.sort()[i] != current) {
        
//         if (count > 0) {
          
          
          

//           // 

//           addCountToObj();
//         }
        
//         current = array_count.sort()[i];
        

//         count = 1;
//       } else {
//         console.log(
//           "if this line is shown, array_count.sort()[i] === current "
//         );
//         console.log(
//           current,
//           "<><><><><><><><><><><> this is current, line 103, current has more then 1 count++"
//         );
//         count++;

        
        
//       }
//     }

//     if (count > 0) {
      
//       addCountToObj();
      
//       for (let i = 0; i < array.length; i++) {
        
//       }

//       let a = array.filter((item, index) => {
//         return array.indexOf(item) === index;
//       });

//       function dedupe(array) {
//         return array.reduce(
//           function(p, c) {
//             // create an identifying id from the object values
//             let id = [
//               c.foodItemName,
//               c.foodItemPrice,
//               c.food_item_count,
//               c.totalPrice
//             ].join("|");
            
//             // if the id is not found in the temp array
//             // add the object to the output array
//             // and add the key to the temp array
//             if (p.temp.indexOf(id) === -1) {
//               p.out.push(c);
//               p.temp.push(id);
//             }
            

//             return p;

//             // return the deduped array
//           },
//           {
//             temp: [],
//             out: []
//           }
//         ).out;
//       }

      

//       array = dedupe(array);

//       //COUNTING THE TOTAL
//       for (let i = 0; i < array.length; i++) {
//         let total = Number(array[i].foodItemPrice) * array[i].food_item_count;
//         array[i].totalPrice = total.toFixed();
//       }

      
//     }




//   };

//   countQTY();

  

//   // for(let i = 0; i<array.length;i++){
//   //   if (array.indexOf())
//   // };

//   let data = {
//     foodItem: array
//   };

//   $("#orders").html(ordersTemplate(data));
//   //==========================THE quantity part==========================//
  
 

  
//   $(".product-quantity input").change(function(event) {
//     let row_price = parseFloat(
//       $(event.currentTarget)
//         .parent()
//         .parent()
//         .parent()
//         .children(":nth-child(2)")[0]
//         .innerText.replace(/[^\d.]/g, "")
//     );
    

    
//     // 
    

    

//     let row_quantity = event.currentTarget.value;
    
//     //  let row_price = event.currentTarget

//     updateTotal(row_quantity, row_price);
//   });

//   updateTotal = (row_quantity, row_price) => {
//     let row_total = row_quantity * row_price;
    

//     $(event.currentTarget)
//       .parent()
//       .parent()
//       .parent()
//       .children(":nth-child(4)")[0].innerText = `$${row_total.toFixed()}`;

//     let grand_total = 0;
//     for (let i = 0; i < $(".row_total_price").length; i++) {
//       let rows_grand = parseFloat(
//         $(".row_total_price")[i].innerText.replace(/[^\d.]/g, "")
//       );
//       console.log(
//         parseFloat($(".row_total_price")[i].innerText.replace(/[^\d.]/g, ""))
//       );
//       grand_total += rows_grand;
//     }
    
    

//     $(".grand-total-value").html(`$${grand_total}`);


  
    
//   };

//   let grand_total_when_qty1 = 0;
//   for (let i = 0; i < $(".row_total_price").length; i++) {
//     let rows_grand_when_qty1 = parseFloat(
//       $(".row_total_price")[i].innerText.replace(/[^\d.]/g, "")
//     );
//     grand_total_when_qty1 += rows_grand_when_qty1;
      
  
//      $(".grand-total-value").html(`$${grand_total_when_qty1.toFixed()}`);
   
//   }

   
//   //==========================GRAND TOTAL BEGIN==========================//

//   //==========================GRAND TOTAL ENDS==========================//
// };
// //==========================THE quantity part ends==========================//

// $(document).ready(function() {
 
//   axios
//     .get("/api/orders/")
//     .then(res => {
      

      
//       reloadOrders(localStorage);
//     })
//     .catch(err => {
      
//     });
  
// });

// $(".dynamic").on("click", ".add-to-cart-btn", function(event) {
//   event.preventDefault();
  
  
  

//   // 

//   let id = event.target.dataset.name;
//   let food_item_name = event.target.id;
//   let food_item_price = event.target.dataset.price;

  

  

//   // axios.get(`/api/food_item/${id}`)
//   //      .then((res)=>{
//   //        
//   //       //  
//   //      })

//   // var food_item_price = $(".food-price").html();
//   // 

//   addToCart(food_item_name, food_item_price);

  
// });

// function addToCart(food_item_name, food_item_price) {
  

//   event.preventDefault();
//   if ((food_item_name_array !== null) | (food_item_name_array !== undefined)) {
    
//     food_item_name_array.push(food_item_name);
//     food_item_price_array.push(food_item_price);
    
    

//     localStorage.setItem("food_item_name", food_item_name_array);
//     localStorage.setItem("food_item_price", food_item_price_array);
//     reloadOrders(localStorage);
//   }
// }

// $(".total").on("click", ".checkout-btn", () => {
  
// });









// $(document).on('click', '.remove-item-btn', function (event) {
//   // removeItem(event)

//   //need row quantity and row_price
  
//   let row_Price =parseFloat(event.currentTarget.parentElement.parentElement.children[1].innerText.replace(/[^\d.]/g, ""));
  
  
//   let grand_total = parseFloat($('.grand-total-value').html().replace(/[^\d.]/g, ""))
//   let row_total = parseFloat(event.target.parentElement.parentElement.children[3].innerText.replace(/[^\d.]/g, ""))
  
  
  
  
//     grand_total -= row_total
    
    
//     $('.grand-total-value').html(`$${grand_total.toFixed()}`)
    
    
//     removeItem(event)
 
    
// });
// removeItem =(event)=>{

//   event.target.parentElement.parentElement.remove();
  
  
// }

// $('.cart-area').on('mouseover','.checkout-btn', function (event){

//     // access and select the table
//     // loop through all the values needed
//     // send them in a post request - axios to the backend (api)
// })

// // $(document).on('mouseover', '.checkout-btn', function(event){
  

// //   // for(let i =0; i< array.length; i++){
     
// //   //   console.log(array[0]);
// //   //   console.log(localStorage);
    
     
// //   // }

// //   console.log($('.cart-area').children);
 
  
  
// //   // axios.post('/api/orders',{
// //   //   food_item_name: ,
// //   //   food_item_price: ,
// //   //   quantity:
    
// //   //   }).then((res)=>{
    
// //   //   }

// //   // localStorage.clear();
// // })







// $(document).on('click', '#pay-btn', function(event){
  
 
  

// })


