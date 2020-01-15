//Require modules
const fs = require("fs");
const https = require("https");

const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const path = require("path");
// const OrderService = require("./service/OrderService");
// const OrderRouter = require("./router/OrderRouter");
const bodyParser = require("body-parser");
const router = require("./router/router")(express);
// const AuthChallenger = require('./AuthChallenger.js')
// const basicAuth = require('express-basic-auth');
//require KNEX
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

//require login modules
const setupPassport = require('./passport/initpassport');
const session = require("express-session");
setupPassport(app);

//template engine
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// const config = require("./stores/config.json")["development"];
//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static("router"));

//app.use ROUTER
app.use("/", router);
//app.use(sesssion)
app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true
  })
);

//basic-auth
// app.use(basicAuth({
//     authorizer: AuthChallenger(knex),
//     challenge: true,
//     authorizeAsync: true,
//     realm: 'Restaurant Application With Knex'
// }));

//routing
// const orderService = new OrderService(knex);

console.log("LINE34, app.js");
// console.log(path.join(__dirname, config.orders));
// app.use("/api/orders", new OrderRouter(orderService).router());

// //app.get
app.get("/", (req, res) => {
  res.render("index");
});

// //===================================ITALIAN ROUTE============================
app.get("/italian", (req, res) => {
  res.render("italian");
});
app.get("/italian/italianMenu", (req, res) => {
  res.render("italianMenu");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
// app.get('/login',(req,res)=>{
//     res.render("logSign");
// })

app.get("/jp", (req, res) => {
  res.render("japanese");
});

app.get("/cart/checkout", (req, res) => {
  res.render("checkout");
});

// app.post("/");

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key")
};

https.createServer(options, app).listen(3000);

module.exports = app;
