
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('food_item').del()
  
    .then(function () {
      // Inserts seed entries
      return knex('food_item').insert([
        {food_name: 'Spaghetti with meatball', food_price:'82', food_image:'https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', restaurant_id:'1'},
        {food_name: 'Lasagna', food_price:'78', food_image:'https://images.unsplash.com/photo-1560750133-c5d4ef4de911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', restaurant_id:'1'},
        {food_name: 'Magherita Pizza', food_price:'90', food_image:'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80', restaurant_id:'1'},
        {food_name: 'Garlic Bread Tower', food_price:'48', food_image:'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80', restaurant_id:'2'},
        {food_name: 'Grilled tenderloin with cloved garlic', food_price:'238', food_image:'https://www.lecremedelacrumb.com/wp-content/uploads/2019/06/grilled-pork-tenderloin-7.jpg', restaurant_id:'2'},
        {food_name: 'Fettuccine Alfredo', food_price:'130', food_image:'https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg', restaurant_id:'2'},
        {food_name: 'Pasta Carbonara', food_price:'110', food_image:'https://www.jocooks.com/wp-content/uploads/2012/05/creamy-carbonara-1.jpg', restaurant_id:'3'},
        {food_name: 'Linguini with clam sauce', food_price:'120', food_image:'https://www.emerils.com/sites/default/files/styles/wmax-600-sq/public/em-legacy-images//IMG_3447.JPG?itok=mtkimwG-', restaurant_id:'3'},
        {food_name: 'Risotto with Calamari', food_price:'110', food_image:'https://img.taste.com.au/7Y9cqf-M/w1200-h630-cfill/taste/2016/11/lemon-risotto-with-calamari-89912-1.jpeg', restaurant_id:'3'},
        {food_name: 'Do it yourself Tiramisu', food_price:'46', food_image:'https://dpv87w1mllzh1.cloudfront.net/alitalia_discover/attachments/data/000/002/587/original/la-ricetta-classica-del-tiramisu-con-uova-savoiardi-e-mascarpone-1920x1080.jpg?1567093636', restaurant_id:'3'},
        {food_name: 'Spicy Meditteranean Shrimp', food_price:'68', food_image:'https://therecipecritic.com/wp-content/uploads/2016/10/brownbuttergarlicshrimp3.jpg', restaurant_id:'3'},
        {food_name: 'Blue Mussels with garlic', food_price:'91', food_image:'https://images.unsplash.com/photo-1466553556096-7e2c49388e34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80', restaurant_id:'3'},
        {food_name: 'pepperoni Pizza', food_price:'100', food_image:'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', restaurant_id:'3'},
     
      ]);
    });
};
