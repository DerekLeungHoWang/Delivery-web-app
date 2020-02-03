// const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("./bcrypt.js");

require("dotenv").config();

const knex = require("knex")({
  client: "postgresql",
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  }
}); 

module.exports = passport => {
  passport.use(
    "local-login",
    new LocalStrategy(async (email, password, done) => {
      console.log('trying to login.')
      try {
        let users = await knex("users").where({ email: email });
        if (users.length == 0) {
          return done(null, false, { message: "Incorrect credentials" });
        }
        let user = users[0];
        let result = await bcrypt.checkPassword(password, user.password);
        if (result) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect credentials" });
        }
      } catch (err) {
        done(err);
      }
    })
  );
  
  passport.use(
    "local-signup",
    new LocalStrategy({passReqToCallback: true}, async (req,email, password, done) => {  //passReqToCallback: true enable req to be passed as argument
     console.log('lineeee42');
     console.log(req.body);
     
      
      try {
        let users = await knex("users").where({ email: email });
        if (users.length > 0) {
          return done(null, false, { message: "Email already taken" });
        }
        let hash = await bcrypt.hashPassword(password);
        const newUser = {
          email: email,
          password: hash,
          full_name:req.body.name,
          address:req.body.address
          
        };
        let userId = await knex("users")
          .insert(newUser)
          .returning("id");
        newUser.id = userId[0];
        done(null, newUser);
      } catch (err) {
        done(err);
      }
    })
  );
};
