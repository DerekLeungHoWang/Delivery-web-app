exports.seed = function (knex) {
  return knex('order_items').del()
    .then(() => {
   knex('orders').del()
    })
    .then(() => {
   knex('review').del()
    })
    .then(() => {
   knex('food_item').del()
    })
    .then(() => {
   knex('restaurants').del()
    })
    .then(() => {
   knex('users').del()
    }).then(()=>{
      return Promise.all([
        knex('users').insert([
          { email: "derek@gmail.com", password: "123" },
          { email: "test@gmail.com", password: "test" },
          { email: "david@gmail.com", password: "1" },
      ]).then(() => {
        return knex('restaurants').insert([
          { restaurants_name: "Babbo Trattoria", opening_hours: "12:00 - 11:00", cuisine: "Italian", path_to_img: "http://3.bp.blogspot.com/-XXJmWzJe1C4/VQvH1I9vT3I/AAAAAAAA964/m-AqBIpprug/s1600/IMG_3507.JPG" },
          { restaurants_name: "Mad for Garlic", opening_hours: "12:00 - 10:00", cuisine: "Italian", path_to_img: "https://static7.orstatic.com/userphoto2/photo/W/Q0S/0551PYAA41FAAC01B36A32px.jpg" },
          { restaurants_name: "Lo Spazio", opening_hours: "12:00 - 15:30, 18:00 - 22:00", cuisine: "Italian", path_to_img: "https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/13102833_232089243848474_7685238347048062236_n.jpg?_nc_cat=104&_nc_ohc=yKsqD-7ZQZwAX-Lszar&_nc_ht=scontent.fhkg4-2.fna&oh=560c15875a1028a9a72a31f73097fc7e&oe=5ED46E4D" },
      ]).then(() => {
        return knex('food_item').insert([
          { food_name: 'Spaghetti with meatball', food_price: 82.50, food_image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', restaurants_id: 1 },
          { food_name: 'Lasagna', food_price: 78.65, food_image: 'https://images.unsplash.com/photo-1560750133-c5d4ef4de911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', restaurants_id: 1 },
          { food_name: 'Magherita Pizza', food_price: 90.00, food_image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80', restaurants_id: 1 },            { food_name: 'Garlic Bread Tower', food_price: 48.00, food_image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80', restaurants_id: 2 },
          { food_name: 'Grilled tenderloin with cloved garlic', food_price: 238.00, food_image: 'https://www.lecremedelacrumb.com/wp-content/uploads/2019/06/grilled-pork-tenderloin-7.jpg', restaurants_id: 2 },
          { food_name: 'Fettuccine Alfredo', food_price: 130.00, food_image: 'https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg', restaurants_id: 2 },
          { food_name: 'Pasta Carbonara', food_price: 110.00, food_image: 'https://www.jocooks.com/wp-content/uploads/2012/05/creamy-carbonara-1.jpg', restaurants_id: 3 },
          { food_name: 'Linguini with clam sauce', food_price: 120.00, food_image: 'https://www.emerils.com/sites/default/files/styles/wmax-600-sq/public/em-legacy-images//IMG_3447.JPG?itok=mtkimwG-', restaurants_id: 3 },
          { food_name: 'Risotto with Calamari', food_price: 110.00, food_image: 'https://img.taste.com.au/7Y9cqf-M/w1200-h630-cfill/taste/2016/11/lemon-risotto-with-calamari-89912-1.jpeg', restaurants_id: 3 },
          { food_name: 'Do it yourself Tiramisu', food_price: 46.24, food_image: 'https://dpv87w1mllzh1.cloudfront.net/alitalia_discover/attachments/data/000/002/587/original/la-ricetta-classica-del-tiramisu-con-uova-savoiardi-e-mascarpone-1920x1080.jpg?1567093636', restaurants_id: 3 },
          { food_name: 'Spicy Meditteranean Shrimp', food_price: 68.00, food_image: 'https://therecipecritic.com/wp-content/uploads/2016/10/brownbuttergarlicshrimp3.jpg', restaurants_id: 3 },
          { food_name: 'Blue Mussels with garlic', food_price: 91.00, food_image: 'https://images.unsplash.com/photo-1466553556096-7e2c49388e34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80', restaurants_id: 3 },
          { food_name: 'pepperoni Pizza', food_price: 100.00, food_image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', restaurants_id: 3 },
          { food_name: 'Cannoli', food_price: 38.00, food_image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_1460,h_1825/k%2FPhoto%2FRecipes%2F2019-08-recipe-how-to-make-cannolis%2FHow-to-Make-Cannolis_100', restaurants_id: 3 },
          { food_name: 'Lemon Sorbet', food_price: 43.00, food_image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/04/lemon-sorbet.jpg?itok=f6N8BTQL', restaurants_id: 3 },
          { food_name: 'Slow Cooked Ox Tongue', food_price: 58.00, food_image: 'https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Slow-Cooker-Ox-Tongue-in-Mushroom-Cream-Sauce-Final-1.jpg', restaurants_id: 2 },
          { food_name: 'Sauteed Tiger Prawns', food_price: 58.00, food_image: 'https://www.aheadofthyme.com/wp-content/uploads/2018/02/tiger-prawns-in-garlic-ginger-soy-sauce-2.jpg', restaurants_id: 2 },
          { food_name: 'House Made MEAT Balls', food_price: 68.00, food_image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/italian-meatballs-329-horizontal-2-1545406095.jpg?resize=980:*', restaurants_id: 1 },
          { food_name: 'Seared Large Scallops', food_price: 168.00, food_image: 'https://peasandcrayons.com/wp-content/uploads/2012/02/perfect-seared-scallops-recipe-2.jpg', restaurants_id: 1 },
      ]).then(()=>{
        return knex('review').insert([
          {user_id: 1, restaurants_id: 1, restaurant_image: 'http://3.bp.blogspot.com/-XXJmWzJe1C4/VQvH1I9vT3I/AAAAAAAA964/m-AqBIpprug/s1600/IMG_3507.JPG', comment: 'I hate this restaurant'},
      ]).then(()=>{
        return knex('orders').insert([
          {user_id: 1, status: 'delivered', amount: 402.00},
      ]).then(()=>{
        return knex('order_items').insert([
          {food_item_id:1, order_id:1, quantity:3},
          {food_item_id:2, order_id:1, quantity:2},
      ])
    })
    })
    })
    })
    })
      .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
  };