
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisine_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_type').insert([
        {cuisine_name: 'Italian', image_url:'https://www.sassyhongkong.com/wp-content/uploads/2019/12/eat-drink-restaurants-michelin-guide-2020.jpg'},
        {cuisine_name: 'Japanese', image_url:'https://www.sassyhongkong.com/wp-content/uploads/2019/08/eat-drink-dining-city-restaurant-week-book-hero.jpeg'},
        {cuisine_name: 'Chinese', image_url:'https://www.sassyhongkong.com/wp-content/uploads/2013/10/duddells-dim-sum-hong-kong-500x500.jpg'},
        {cuisine_name: 'Alcohol', image_url:'https://www.sassyhongkong.com/wp-content/uploads/2019/09/eat-drink-october-bars-feather-and-bone.jpg'},
        {cuisine_name: 'Korean', image_url:'https://pbs.twimg.com/media/DohY3AWWwAAbjTF.jpg'},
        {cuisine_name: 'Thai', image_url:'https://www.sassyhongkong.com/wp-content/uploads/2013/10/chachawan-thai-restaurant-500x500.jpg'},
        {cuisine_name: 'Desserts', image_url:'https://images.unsplash.com/photo-1531240062960-4842b265a1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1706&q=80'},
        {cuisine_name: 'Alcoholic Bubble Tea', image_url:'https://nestheprint.com/wp-content/uploads/2019/10/How-to-make-Bubble-Tea-8-500x500.jpg'},
      ]);
    });
};
