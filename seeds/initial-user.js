exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: "derek@gmail.com", password:"123"},
        {email: "test@gmail.com", password:"test"},
        {email: "david@gmail.com", password:"1"},
      ]);
    });
};