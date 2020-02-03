var ordersTemplate = Handlebars.compile(
  `
    {{#each data_final }}
    <div class="cart-area">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <table class="table table-responsive">
                      <tbody >
                          <tr>
                              <td class="cart_product_img d-flex align-items-center">
                              <img src="{{food_item_image_arr}}" width="90px" height="90px" class="rounded ">
                              <span> &nbsp; &nbsp;</span>
                              <h6>{{food_item_name_arr}} </h6>
                              </td>
                              <td class="price"><span> $ {{all_food_price_arr}}   </span></td>
                              <td class="qty">
                                  <div class="product-quantity">
                                      <input type="number" class="qty-text" id="{{@key}}" step="1" min="1" max="99"
                                          name="quantity" value={{quantity}} data-foodItemPrice={{all_food_price_arr}}>    
                                  </div>
                              </td> 
                              <td class="row_total_price"><span> $ {{row_total}} </span></td>
                              <td class="item-removal">
                              <i class="remove-item-btn fas fa-trash-alt"></i>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div> 
  {{/each}}
    `
);

class displayCart {
  constructor() {
    this.order = this.getOrder();
    this.previous = {};
  }

  //=====================GETTING ALL ITEMS PRICE
  getPriceArray() {
    let addToCartBtn = $(":button.add-to-cart-btn");
    let all_food_price_arr = [];

    for (let i = 0; i < addToCartBtn.length; i++) {
      all_food_price_arr.push(addToCartBtn[i].dataset.price);
    }

    return all_food_price_arr;
  }
  //GETTING ALL ITEM'S RESTAURANTS'ID
  getRestaurantID() {
    let addToCartBtn = $(":button.add-to-cart-btn");
    let restaurant_id_arr = [];
    for (let i = 0; i < addToCartBtn.length; i++) {
      restaurant_id_arr.push(addToCartBtn[i].dataset.restaurants_id);
    }
    return restaurant_id_arr;
  }

  getFoodItemName() {
    let addToCartBtn = $(":button.add-to-cart-btn");
    let restaurant_name_arr = [];
    for (let i = 0; i < addToCartBtn.length; i++) {
      restaurant_name_arr.push(addToCartBtn[i].id);
    }
    return restaurant_name_arr;
  }
  getFoodItemID() {
    let addToCartBtn = $(":button.add-to-cart-btn");
    let food_item_id_arr = [];
    for (let i = 0; i < addToCartBtn.length; i++) {
      food_item_id_arr.push(addToCartBtn[i].dataset.food_item_id);
    }
    return food_item_id_arr;
  }

  getFoodItemImage() {
    let addToCartBtn = $(":button.add-to-cart-btn");
    let food_item_image_arr = [];
    for (let i = 0; i < addToCartBtn.length; i++) {
      food_item_image_arr.push(addToCartBtn[i].dataset.food_item_image);
    }
    return food_item_image_arr;
  }

  getOrder() {
    let order_obj;
    let all_food_price_arr = this.getPriceArray();
    let restaurant_id_arr = this.getRestaurantID();
    let food_item_name_arr = this.getFoodItemName();
    let food_item_id_arr = this.getFoodItemID();
    let food_item_image_arr = this.getFoodItemImage();

    let foodArr = [];
    for (let i = 0; i < food_item_name_arr.length; i++) {
      order_obj = {
        restaurant_id_arr: restaurant_id_arr[i],
        food_item_name_arr: food_item_name_arr[i],
        all_food_price_arr: all_food_price_arr[i],
        food_item_id_arr: food_item_id_arr[i],
        food_item_image_arr: food_item_image_arr[i]
      };

      foodArr.push(order_obj);
    }

    return foodArr;
  }

  count(e) {
    let food_item_name =
      e.currentTarget.parentNode.parentNode.children[0].children[0].innerText;

    console.log(e.currentTarget.parentNode.parentNode.children[0].children[0].innerText);

    // this.previous = food_item_name;
    let food_item_quantity = parseInt(
      e.currentTarget.parentNode.children[1].value
    );
    console.log(e.currentTarget.parentNode.children[1].value);

    let foodArr = this.getOrder();
    if (localStorage.foodArr === undefined) {
      localStorage.setItem("foodArr", JSON.stringify(foodArr));
    }
    console.log(localStorage);

    console.log(foodArr);

    this.save(food_item_name, food_item_quantity);

    return "foodArr_with_count;";
  }
  countInCart(e) {
    let food_item_name =
      e.currentTarget.parentNode.parentNode.parentNode.children[0].children[2]
        .innerText;
    let food_item_quantity = e.currentTarget.parentNode.children[0].value;
    console.log(food_item_name);
    console.log(food_item_quantity);

    this.save(food_item_name, food_item_quantity);

    return "hi";
  }

  save(food_item_name, food_item_quantity) {
    let saved = JSON.parse(localStorage.getItem("foodArr"));
    console.log(saved);
    let new_saved;
    for (let i = 0; i < saved.length; i++) {
      console.log("here");
      console.log(saved[i].food_item_name_arr === food_item_name);

      if (saved[i].food_item_name_arr === food_item_name) {
        console.log(saved[i]); //this gets one of the five items
        new_saved = [
          ...saved.slice(0, i),
          Object.assign(
            {},
            saved[i],
            { quantity: food_item_quantity },
            {
              row_total: (
                JSON.parse(saved[i].all_food_price_arr) * food_item_quantity
              ).toFixed(2)
            }
          ),
          ...saved.slice(i + 1)
        ];
      }
      console.log(new_saved);
    }

    localStorage.setItem("foodArr", JSON.stringify(new_saved));
  }

  reloadOrders() {
    console.log(JSON.parse(localStorage.foodArr));

    let data = JSON.parse(localStorage.foodArr);

    let data_final = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].quantity > 0) {
        console.log(data[i]);
        data_final.push(data[i]);
      }
    }

    $("#orders").html(ordersTemplate({ data_final: data_final }));
    console.log(data_final);

    return data_final;
  }

  calculateTotal() {
    let data = this.reloadOrders();
    console.log(data);
    let sum = 0;
    data.forEach(rows => {
      sum += parseFloat(rows.row_total);
    });
    console.log(sum);
    localStorage.setItem("sum", sum);
    console.log(localStorage);
    if (sum === 0) {
      console.log("zero");
      localStorage.clear();
      $(".grand-total-value").html("");
    } else {
      $(".grand-total-value").html(`$HKD ${localStorage.sum}`);
    }
    return "nothing";
  }

  remove(e) {
    let food_item_name =
      e.currentTarget.parentNode.parentNode.children[0].children[2].innerText;
    console.log(food_item_name);

    // this.previous = food_item_name;
    let food_item_quantity =
      e.currentTarget.parentNode.parentNode.children[2].children[0].children[0]
        .value;
    console.log(food_item_quantity);

    let saved = JSON.parse(localStorage.getItem("foodArr"));
    console.log(saved);
    let new_saved;
    for (let i = 0; i < saved.length; i++) {
      console.log("here");
      console.log(saved[i].food_item_name_arr === food_item_name);

      if (saved[i].food_item_name_arr === food_item_name) {
        console.log(saved[i]); //this gets one of the five items
        new_saved = [
          ...saved.slice(0, i),
          Object.assign(
            {},
            saved[i],
            { quantity: 0 },
            {
              row_total:
                JSON.parse(saved[i].all_food_price_arr) * food_item_quantity
            }
          ),
          ...saved.slice(i + 1)
        ];
      }
      console.log(new_saved);
    }

    localStorage.setItem("foodArr", JSON.stringify(new_saved));

    return "hi";
  }
}

const newOrder = new displayCart();
//1. Get the order
newOrder.getOrder();

//reloader order when page refresh
$(document).ready(() => {
  newOrder.reloadOrders();
  newOrder.calculateTotal();
});

//reloader order after user add to cart
$(document).on("click", ".add-to-cart-btn", e => {
  newOrder.count(e);
  newOrder.reloadOrders();
  newOrder.calculateTotal();
});

$(document).on("change", ".qty-text", e => {
  newOrder.countInCart(e);
  newOrder.calculateTotal();
});
$(document).on("click", ".remove-item-btn", e => {
  newOrder.remove(e);
  newOrder.reloadOrders();
  newOrder.calculateTotal();
});

$(".checkout-form").submit(e => {
  e.preventDefault();
  let data_final = newOrder.reloadOrders()
  console.log("clicked this");
  axios
    .post("/api/orders", {
      content: data_final
    })
    .then(res => {
    console.log('checkingout');
  

    })
    .catch(err => {
      console.log(err);
    });

    axios
    .post("/api/order_item", {
      content: data_final
    }).catch(err => {
      console.log(err);
    });
    })
    .catch(err => {
      console.log(err);
    });
console.log(newOrder.getFoodItemImage());