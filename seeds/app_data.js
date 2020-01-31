exports.seed = function (knex) {
  return knex('food_item').del()
    .then(() => {
  knex('restaurants').del()
    })
    .then(()=>{
      return Promise.all([

        knex('restaurants').insert([
          { restaurants_name: "Babbo Trattoria", opening_hours: "12:00 - 23:00", cuisine: "Italian", path_to_img: "http://3.bp.blogspot.com/-XXJmWzJe1C4/VQvH1I9vT3I/AAAAAAAA964/m-AqBIpprug/s1600/IMG_3507.JPG" },
          { restaurants_name: "Mad for Garlic", opening_hours: "12:00 - 22:00", cuisine: "Italian", path_to_img: "https://static7.orstatic.com/userphoto2/photo/W/Q0S/0551PYAA41FAAC01B36A32px.jpg" },
          { restaurants_name: "Lo Spazio", opening_hours: "12:00 - 15:30, 18:00 - 22:00", cuisine: "Italian", path_to_img: "https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/13102833_232089243848474_7685238347048062236_n.jpg?_nc_cat=104&_nc_ohc=yKsqD-7ZQZwAX-Lszar&_nc_ht=scontent.fhkg4-2.fna&oh=560c15875a1028a9a72a31f73097fc7e&oe=5ED46E4D" },
          { restaurants_name: "Love Cafe", opening_hours: "Forever Open", cuisine: "Japanese", path_to_img: "https://static5.orstatic.com/userphoto2/photo/10/T58/05R978B992D44ADB202402px.jpg" },
          { restaurants_name: "Bari Uma", opening_hours: "Always Closed", cuisine: "Japanese", path_to_img: "https://scontent.fhkg10-1.fna.fbcdn.net/v/t1.0-9/11180617_825776274184595_5796437834057239336_n.jpg?_nc_cat=105&_nc_ohc=_AAVIhSz4N0AX_nxc1U&_nc_ht=scontent.fhkg10-1.fna&oh=76d3d4f7e42f8ca42f461b6309bc0d3f&oe=5EA2C296" },
          { restaurants_name: "Running BBQ Running", opening_hours: "11:00 - 23:30", cuisine: "Japanese", path_to_img: "https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2019/01/gyu-kaku-japanese-steakhouse-uptown-charlotte.jpg" },
          { restaurants_name: "Sodam Chicken", opening_hours: "10:00 - 3:00", cuisine: "Japanese", path_to_img: "https://static6.orstatic.com/userphoto2/photo/Y/RKC/05G0MT678D98EE986D3459px.jpg" },
          { restaurants_name: "Via Tokyo", opening_hours: "12:30 - 22:00", cuisine: "Japanese", path_to_img: "https://scontent.fhkg10-1.fna.fbcdn.net/v/t31.0-8/10338460_774256889281355_4474148243043698308_o.jpg?_nc_cat=106&_nc_ohc=HdUqV--aSiMAX9O7Ke4&_nc_ht=scontent.fhkg10-1.fna&oh=fc8af8ce1c9e4c1a0c1e8e995feb1919&oe=5E9121CE" },
          { restaurants_name: "Deluxe Daieki Japanese", opening_hours: "10:30 - 22:00", cuisine: "Japanese", path_to_img: "https://1.bp.blogspot.com/-BbgEwlACLbM/VlSCih1YoFI/AAAAAAAAt64/DDSk2co0cCQ/s1600/IMG_7009.JPG" },
          { restaurants_name: "Fivelements Habitat", opening_hours: "9:00 - 14:30, 17:00 - 23:00", cuisine: "Japanese", path_to_img: "https://jpninfo.com/wp-content/uploads/2018/03/sushi-platter.jpg" },
          { restaurants_name: "Day and Nite by Master Kama", opening_hours: "0:00 - 24:00", cuisine: "Japanese", path_to_img: "https://seablue.hk/wp-content/uploads/2016/10/20160928_masterkama_01.jpg" },
          { restaurants_name: "Shika Teppan-Yaki", opening_hours: "18:00 - 23:00", cuisine: "Japanese", path_to_img: "https://static7.orstatic.com/userphoto2/photo/11/TA2/05S7M2D4444601FD947332px.jpg" },
          { restaurants_name: "Toretore Hamayaki", opening_hours: "12:00 - 22:00", cuisine: "Japanese", path_to_img: "https://static8.orstatic.com/userphoto/photo/H/E0W/02RQER26B80B6657950982px.jpg" },
          { restaurants_name: "Firebird", opening_hours: "17:00 - 22:00", cuisine: "Japanese", path_to_img: "https://static6.orstatic.com/userphoto/photo/K/GJZ/039Q3T48FB8CA505683ABApx.jpg" },
          { restaurants_name: "Rock Salt Japanese", opening_hours: "2:00 - 16:30, 18:00 - 23:00", cuisine: "Japanese", path_to_img: "https://static8.orstatic.com/userphoto2/photo/W/PRY/053APZA3F8F36B399FA6D3px.jpg" },
          { restaurants_name: "Ichiran", opening_hours: "12:00 - 24:00", cuisine: "Japanese", path_to_img: "https://cdn.vox-cdn.com/thumbor/ZLFJImcxC8_U6S6cdnWH86ARToU=/0x0:5315x3543/1720x0/filters:focal(0x0:5315x3543):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10462359/Ichiran_Midtown_West_36.jpg" },
      ]).then(() => {
        return knex('food_item').insert([
          { food_name: 'Spaghetti with meatball', food_price: 82.50, food_image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', restaurants_id: 1 },
          { food_name: 'Lasagna', food_price: 78.65, food_image: 'https://images.unsplash.com/photo-1560750133-c5d4ef4de911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', restaurants_id: 1 },
          { food_name: 'Magherita Pizza', food_price: 90.00, food_image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80', restaurants_id: 1 },         
          { food_name: 'Garlic Bread Tower', food_price: 48.00, food_image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80', restaurants_id: 2 },
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
          { food_name: 'Sushi Platter', food_price: 48, food_image: 'https://www.kksushi.ca/media/com_eshop/products/resized/image_594b61105bfde_L08-650x650.jpg', restaurants_id: 4 },
          { food_name: 'Crab Roll', food_price: 42, food_image: 'https://images.unsplash.com/photo-1556906918-c3071bd11598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', restaurants_id: 4 },
          { food_name: 'Onigiri', food_price: 38, food_image: 'https://images.unsplash.com/photo-1562131247-d6cd58732a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', restaurants_id: 4 },
          { food_name: 'More Sushi', food_price: 50, food_image: 'https://images.unsplash.com/photo-1562131247-bd2efe88ec9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', restaurants_id: 4 },
          { food_name: 'Japanese Curry', food_price: 72, food_image: 'http://justusku.co.id/wp-content/uploads/2019/10/Beef-Katsu-Curry-Rice-500x500.jpg', restaurants_id: 4 },
          { food_name: 'Tempura', food_price: 62, food_image: 'http://theblowfishgroup.com/izanagi/wp-content/uploads/2018/12/iza10011-2.jpg', restaurants_id: 4 },
          { food_name: 'Katsu Don', food_price: 88, food_image: 'https://www.kesushi.co.uk/wp-content/uploads/2016/09/Tori-katsu-don.jpg', restaurants_id: 4 },
          { food_name: 'Sashimi Platter', food_price: 124, food_image: 'https://i.imgur.com/cQlgG9j.jpg?1', restaurants_id: 4 },
          { food_name: 'Seared Scallops', food_price: 132, food_image: 'https://www.lowcarbingasian.com/wp-content/uploads/2019/07/Japanese-Style-Butter-Seared-Scallops-LowCarbingAsian-Cover-1320x1320.jpg', restaurants_id: 4 },
          { food_name: 'Miso Cod', food_price: 102, food_image: 'https://ikj0mi6yxc28lxlz3nhxtrmy-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/Miso-marinated-fish.jpg', restaurants_id: 4 },
          { food_name: 'Tonkotsu Ramen', food_price: 98, food_image: 'https://taikenjapan.shop/wp-content/uploads/2017/11/03_kumamotoB-500x500.jpg', restaurants_id: 4 },
          { food_name: 'Karaage', food_price: 46, food_image: 'https://ikj0mi6yxc28lxlz3nhxtrmy-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Japanese-Fried-Chicken_HikariMiso.jpg', restaurants_id: 4 },
          { food_name: 'NodeJs in 1 Day ', food_price: 10.99, food_image: 'https://webdesignledger.com/wp-content/uploads/2015/09/00-featured-nodejs.jpg', restaurants_id: 4 },
          { food_name: 'Javascript in 1 Hour', food_price: 11.99, food_image: 'https://kieranpotts.com/content/images/2019/09/javascript-960-720.png', restaurants_id: 4 },
          { food_name: 'Wagyu A5', food_price: 400, food_image: 'https://ct.yimg.com/xd/api/res/1.2/QtKsSIzqPr_krzzmly8KXg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD0xMDAwO3E9ODU7cm90YXRlPWF1dG87dz0xMDAw/https://s.yimg.com/ob/image/e39be1e4-d2d8-42a6-893f-c927d21a0cf8.jpg', restaurants_id: 4 },
          { food_name: 'Japanese Kobe Steak', food_price: 500, food_image: 'https://famu.ca/wp-content/uploads/2019/11/KobeBeefA5_RibeyeSteak-1.jpg', restaurants_id: 4 },
          { food_name: 'Fish', food_price: 128, food_image: 'https://www.lowcarbingasian.com/wp-content/uploads/2019/07/BBQ-Grilled-Pacific-Saury-Sanma-LowCarbingAsian-Cover-1320x1320.jpg', restaurants_id: 4 },
          { food_name: 'Brick', food_price: 399, food_image: 'https://www.picclickimg.com/d/w1600/pict/193288347338_/Supreme-Brick-FW16.jpg', restaurants_id: 4 },
      ])

    })
      .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
  };