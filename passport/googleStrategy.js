const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require("dotenv").config();

const knex = require("knex")({
    client: "postgresql",
  
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    }
  });

module.exports = (passport) => {
    passport.use(
        'google',
        new GoogleStrategy(
        {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `auth/google/callback`,
        profileFields: [
            "id",
            "email",
            "name"
        ]
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(profile);

        let userResult = await knex("users").where({ googleID: profile.id });
        if (userResult == 0) {
          let user = {
            googleID: profile.id,
            email: profile._json.email,
            accessToken: accessToken
          };

          let query = await knex("users")
            .insert(user)
            .returning("id");
          user.id = query[0];
          done(null, user);
        } else {
          done(null, userResult[0]);
        }
      }
    )
  );
};
