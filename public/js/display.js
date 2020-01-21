

var ordersTemplate = Handlebars.compile(
  `
    {{#each foodItem }}
    <div class="cart-area">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <table class="table table-responsive">
                      <tbody >
                          <tr>
                          
                              <td class="cart_product_img d-flex align-items-center">
                              <h5>productID: {{@key}}</h6>
                              <span> &nbsp; &nbsp;</span>
                            
                              <h6>{{foodItemName}} </h6>
                                  
                              </td>
                              <td class="price"><span> $ {{foodItemPrice}}   </span></td>
                              <td class="qty">
                                  <div class="product-quantity">
              
                                      <input type="number" class="qty-text" id="{{@key}}" step="1" min="1" max="99"
                                          name="quantity" value="1" data-foodItemPrice={{foodItemPrice}}>
    
                                  </div>
                              </td>
                              <td class="row_total_price"><span> $ {{foodItemPrice}} </span></td>
                             
                          </tr>
                      </tbody>
  
  
                  </table>
              </div>
          </div>
      </div>
  </div>  {{/each}}
    `
);


const food_item_name_array = [];
const food_item_price_array = [];
// let food_item_price = [];

const reloadOrders = (localStorage) => {
  
  // console.log("line15 controller. js");
  // console.log(localStorage.food_item_price);
  // console.log(localStorage.food_item_name);
  let foodItemName = localStorage.food_item_name.split(',')
  let foodItemPrice = localStorage.food_item_price.split(',')
  
  console.log(foodItemName);
  console.log(foodItemPrice);
  let obj;
  let array = []
    for(let i = 0; i< foodItemName.length; i++){    
          obj ={foodItemName: foodItemName[i], foodItemPrice: foodItemPrice[i]}
          array.push(obj)
    }


 
  

    let data = {
      foodItem:array
    }

  $("#orders").html(
    ordersTemplate(data)
  );
  //==========================THE quantity part==========================//

// let total;
// for(let i =0; i<array.length;i++){
//    total = parseFloat(array[i].foodItemPrice.replace(/[^\d.]/g, ''));
// }

// $('.total_price').html(total)


console.log()
  $('.product-quantity input').change( function(event) {
    let row_price =parseFloat($(event.currentTarget).parent().parent().parent().children(':nth-child(2)')[0].innerText.replace(/[^\d.]/g, ''))
   console.log(row_price);
   
    console.log(event.currentTarget.id);
    // console.log(event.currentTarget.value);
    console.log(event.currentTarget);
    
    console.log('quantity changed');
  
   let row_quantity = event.currentTarget.value
    console.log(row_quantity);
  //  let row_price = event.currentTarget

    updateTotal(row_quantity,row_price);
   
  });

  updateTotal=(row_quantity,row_price)=>{
    
    let row_total = row_quantity*row_price
    console.log(row_total);
    
    $(event.currentTarget).parent().parent().parent().children(':nth-child(4)')[0].innerText = `$${row_total}` 

    console.log(test);
    
  

  }


//==========================THE quantity part ends==========================//
};



$(document).ready(function() {
  
  axios
    .get("/api/orders/")
    .then(res => {
      console.log("LINE 52 controller.js");
    
      console.log(localStorage,"line68")
      reloadOrders(localStorage);
    })
    .catch(err => {
      console.log(err);
    });
});

$(".dynamic").on("click", ".add-to-cart-btn", function(event) {
  event.preventDefault();
  console.log("clicked");
  console.log(event.target.dataset.restaurants_id, "this is the restaurant id")
  console.log(event.target.dataset.id, "this is the foodITEM_id")
 
  // console.log(event.target.dataset.what)

  let id = event.target.dataset.name
  let food_item_name = event.target.id;
  let food_item_price = event.target.dataset.price
  console.log(food_item_price, " this is the food price");
  
  console.log(food_item_name, "this is the food NAME");

  // axios.get(`/api/food_item/${id}`)
  //      .then((res)=>{
  //        console.log("THIS is the res line 128 dp js ==============================>");
  //       //  console.log(res.data);
  //      })
       

  // var food_item_price = $(".food-price").html();
  // console.log(food_item_price,);
  

  addToCart(food_item_name, food_item_price);
});

function addToCart(food_item_name, food_item_price) {
  event.preventDefault();
  if ((food_item_name_array !== null) | (food_item_name_array !== undefined)) {
    food_item_name_array.push(food_item_name);
    food_item_price_array.push(food_item_price);

    localStorage.setItem("food_item_name", food_item_name_array);
    localStorage.setItem("food_item_price", food_item_price_array);
    
  } else {
    const food_item_name_array = [food_item_name];
    const food_item_price_array = [food_item_price];
    localStorage.setItem("food_item_name", food_item_name_array);
    localStorage.setItem("food_item_name", food_item_price_array);
  
  }
  reloadOrders(localStorage)

}


$('.total').on('click','.checkout-btn', ()=>{
  console.log('clicked checkout');

  
  
})

// axios.post('/api/orders',{
  // food_item_name:food_item_name,
  // food_item_price:food_item_price,
  // quantity:1

// }).then((res)=>{

// }
