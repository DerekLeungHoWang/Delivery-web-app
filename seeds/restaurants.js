
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {restaurant_name: "Babbo Trattoria", opening_hours:"12:00 - 11:00", cuisine:"Italian", path_to_img:"http://3.bp.blogspot.com/-XXJmWzJe1C4/VQvH1I9vT3I/AAAAAAAA964/m-AqBIpprug/s1600/IMG_3507.JPG"},
        {restaurant_name: "Mad for Garlic", opening_hours:"12:00 - 10:00", cuisine:"Italian", path_to_img:"https://static7.orstatic.com/userphoto2/photo/W/Q0S/0551PYAA41FAAC01B36A32px.jpg"},
        {restaurant_name: "Lo Spazio", opening_hours:"12:00 - 15:30, 18:00 - 22:00", cuisine:"Italian", path_to_img:"https://scontent.fhkg4-2.fna.fbcdn.net/v/t1.0-9/13102833_232089243848474_7685238347048062236_n.jpg?_nc_cat=104&_nc_ohc=yKsqD-7ZQZwAX-Lszar&_nc_ht=scontent.fhkg4-2.fna&oh=560c15875a1028a9a72a31f73097fc7e&oe=5ED46E4D"},
       
      ]);
    });
};
