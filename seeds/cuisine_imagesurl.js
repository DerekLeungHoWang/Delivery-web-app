
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisine_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('cuisine_type').insert([
        {cuisine_name: 'Italian', image_url:'https://images.unsplash.com/photo-1572262371552-fc095665f55b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2259&q=80'},
        {cuisine_name: 'Japanese', image_url:'https://images.unsplash.com/photo-1554905093-c6f47e7b9efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'},
        {cuisine_name: 'Chinese', image_url:'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2629&q=80'},
        {cuisine_name: 'Western', image_url:'https://images.unsplash.com/photo-1460122109654-7e46ab4fc9b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1980&q=80'},
        {cuisine_name: 'Korean', image_url:'https://images.unsplash.com/photo-1487769723072-0e6602799af7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'},
        {cuisine_name: 'Thai', image_url:'https://images.unsplash.com/photo-1441850605338-1b0b5a22e7b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'},
        {cuisine_name: 'Desserts', image_url:'https://images.unsplash.com/photo-1455560460927-c48345dd421d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
        {cuisine_name: 'Bubble Tea', image_url:'https://images.unsplash.com/photo-1525803377221-4f6ccdaa5133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80'},
      ]);
    });
};
