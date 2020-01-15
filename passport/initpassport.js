    const passport = require('passport')

require('dotenv').config()

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }   
});

module.exports = (app)=>{
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user,done)=>{
        console.log(user)
        done(null,user);
    });

    passport.deserializeUser(async (id, done) => {
        console.log(id)
        let users = await knex('users').where({id:id.id});
        if (users.length == 0) {
            return done(new Error(`Wrong user id ${id}`));
        }
        user = users[0];
        return done(null, user);
    });


    require('./facebookStrategy.js')(passport);
    require('./passport.js')(passport);
    
}