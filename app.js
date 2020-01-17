//Require modules
const fs = require("fs");
const https = require("https");

const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const path = require("path");

//================================//

const bodyParser = require("body-parser");
const router = require("./router/router")(express);
// const AuthChallenger = require('./AuthChallenger.js')
// const basicAuth = require('express-basic-auth');
//require KNEX
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

//require login modules
const setupPassport = require("./passport/initpassport");
const session = require("express-session");
setupPassport(app);

//template engine
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static("router"));

//app.use(sesssion)
app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true
  })
);

//app.use AuthChallenger
// app.use(basicAuth({
//   authorizeAsync: true,
//   authorizer: AuthChallenger(knex),
//   challenge: true,
//   realm: 'knex'
// }));

//======================================AUTH=================//
app.use("/", router);

//======================================ROUTERS================//
//===============Restaurant Service and Router//
const RestService = require("./service/RestService");
const RestRouter = require("./router/RestRouter");
const restService = new RestService(knex);
app.use("/api/restaurants", new RestRouter(restService).router());
//

// ================Orders Service and Router
// const OrderService = require("./service/OrderService");
// const OrderRouter = require("./router/OrderRouter");
// const orderService = new OrderService(knex);
// app.use("/api/orders", new OrderRouter(orderService).router());

//foodItemService and Router//
const FoodItemService = require("./service/FoodItemService");
const FoodItemRouter = require("./router/FoodItemRouter");
const foodItemService = new FoodItemService(knex);
app.use("/api/food_item", new FoodItemRouter(foodItemService).router());

// //app.get
app.get("/", (req, res) => {
  res.render("index");
});

// //===================================ITALIAN ROUTE============================
app.get("/italian", (req, res) => {
  console.log("line 74 running");

  restService.list().then(data => {
    res.render("italian", {
      italiandata: data
    });
  });
});
//Italian restaurants dynamic render
app.get("/italian/:restaurantMenu", (req, res) => {
  console.log(req.params);
  foodItemService.list(req.params.restaurantMenu).then(data => {
    res.render("italianMenu", {
      italianMenuData: data
    });
  });
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

https.createServer(options, app).listen(2000);

module.exports = app;
