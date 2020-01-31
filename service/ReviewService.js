// class ReviewService {
//   constructor(knex) {
//     this.knex = knex;
//   }

//   add(review, email) {
//     let query = this.knex
//       .select("id")
//       .from("users")
//       .where("users.email", email);

//     return query.then(rows => {
//       if (rows.length === 1) {
//         return this.knex
//           .insert({
//             comment: review,
//             user_id: rows[0].id
//           })
//           .into("comment");
//       } else {
//         throw new Error(`Cannot add review`);
//       }
//     });
//   }

//   list(user) {
//     if (typeof user !== "undefined") {
//       let query = this.knex
//         .select("review.id", "review.comment")
//         .from("review")
//         .innerJoin("users", "review.user_id", "users.id")
//         .where("users.email", user);

//       return query.then(rows => {
//         return rows.map(row => ({
//           id: row.id,
//           content: row.comment
//         }));
//       });
//     } else {
//       let query = this.knex
//         .select("users.email", "review.id", "comment")
//         .from("review")
//         .innerJoin("users", "review.user_id", "users.id");

//       return query.then(rows => {
//         console.log(rows);
//         const result = {};
//         rows.forEach(row => {
//           if (typeof result[row.email] === "undefined") {
//             result[row.email] = [];
//           }
//           result[row.email].push({
//             id: row.id,
//             content: row.comment
//           });
//         });
//         return result;
//       });
//     }
//   }

//   // update(id, note, user){
//   //     let query = this.knex
//   //         .select('id')
//   //         .from('users')
//   //         .where('users.username', user);

//   //             return query.then((rows =>{
//   //                 if(rows.length === 1){
//   //                     return this.knex('notes')
//   //                         .where('id', id)
//   //                         .update({
//   //                             content: note
//   //                         });
//   //                 } else {
//   //                     throw new Error(`Cannot update a note if the user doesn't exist!`)
//   //                 }
//   //             }));
//   // };

//   // remove(id, user){
//   //     let query = this.knex
//   //         .select('id')
//   //         .from('users')
//   //         .where('users.username', user);

//   //             return query.then((rows)=>{
//   //                 if(rows.length === 1){
//   //                     return this.knex('notes')
//   //                         .where('id', id)
//   //                         .del()
//   //                 } else {
//   //                     throw new Error (`Cannot remove a note when the user doesn't exist!`)
//   //                 }
//   //             });
//   // };
// }

// module.exports = ReviewService;
