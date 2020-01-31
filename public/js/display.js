
var ordersTemplate = Handlebars.compile(
    `
    {{#each someOrders }}
    
    <div class="cart-area">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <table class="table table-responsive">
                      <tbody >
                          <tr>
                          
                              <td class="cart_product_img d-flex align-items-center">
                              <h5>productID: {{id}}</h6>
                              <span> &nbsp; &nbsp;</span>
                              <a href="#"><img id="cart-img" src="{{food_image}}" alt="Product"></a>
                              <h6>{{food_item}} </h6>
                                  
                              </td>
                              <td class="price"><span>{{price}}</span></td>
                              <td class="qty">
                                  <div class="quantity">
                                      <span class="qty-minus"
                                          onclick="var effect = document.getElementById('qty{{@index}}'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i
                                              class="fa fa-minus" aria-hidden="true"></i></span>
                                      <input type="number" class="qty-text" id="qty{{@index}}" step="1" min="1" max="99"
                                          name="quantity" value="1">
                                      <span class="qty-plus"
                                          onclick="var effect = document.getElementById('qty{{@index}}'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i
                                              class="fa fa-plus" aria-hidden="true"></i></span>
                                  </div>
                              </td>
                              <td class="total_price"><span>{{price}}</span></td>
                            
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
  


  $('.dynamic').on('click', '.add-to-cart-btn', function(event){
    event.preventDefault()
    console.log("clicked")
    
    
    var food_item_name = event.target.id;
    var food_item_price = $('.food-price').html()
   console.log(food_item_price)
    
    
    
    console.log(food_item_name);
    addToCart(food_item_name, food_item_price)
    
})

function addToCart(food_item_name, food_item_price) {
  event.preventDefault();
  console.log('okay?')


  axios.post('/api/orders',{
    food_item_name:food_item_name,
    food_item_price:food_item_price

  }).then((res)=>{
    console.log("LINE 77 controller.js");
    
    console.log(res.data);
  }).catch((err)=>{
    console.log(err); 
  })

}


$(document).ready(function () {
  $.ajax({
      type: "GET",
      url: url,
      dataType: 'knex',
      success: function (result) {
          if (result.isAuthenticated() == "true") {
              $("#").show();
              $("#notlogin").hide();

          } else {
              $("#withlogin").hide();
              $("#notlogin").show();
          }
      }
  });
});