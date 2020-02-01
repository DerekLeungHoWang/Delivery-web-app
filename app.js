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
//require KNEX
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

//require login modules
const setupPassport = require("./passport/initpassport");
const session = require("express-session");
//app.use(sesssion)
app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true
  })
);
//has to be above setuppassport
setupPassport(app);

//template engine
app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static("router"));

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
const OrderService = require("./service/OrderService");
const OrderRouter = require("./router/OrderRouter");
const orderService = new OrderService(knex);
app.use("/api/orders", new OrderRouter(orderService).router());

//foodItemService and Router//
const FoodItemService = require("./service/FoodItemService");
const FoodItemRouter = require("./router/FoodItemRouter");
const foodItemService = new FoodItemService(knex);
app.use("/api/food_item", new FoodItemRouter(foodItemService).router());

//OrderItemService and Router//
const OrderItemService = require("./service/OrderItemService");
const OrderItemRouter = require("./router/OrderItemRouter");
const orderItemService = new OrderItemService(knex);
app.use("/api/order_item", new OrderItemRouter(orderItemService).router());

// //app.get
app.get("/", (req, res) => {
  if (req.session.user) {
  } else {
    restService.cuisineType().then(data => {
      res.render("index", {
        cuisineData: data
      });
    });
  }
});

// //===================================ITALIAN ROUTE============================
app.get("/italian", (req, res) => {
  restService.list().then(data => {
    res.render("italian", {
      italianData: data
    });
  });
});
//Italian restaurants dynamic render
app.get("/italian/:id", (req, res) => {
  foodItemService.list(req.params.id).then(data => {
    // console.log(data,"LINE 93 ======<><><>< app js");

    res.render("italianMenu", {
      italianMenuData: data
    });
  });
});

//Japanese Restaurants render
app.get("/japanese", (req, res) => {
  restService.listJp().then(data => {
    res.render("japanese", {
      japaneseData: data
    });
  });
});

app.get("/japanese/:id", (req, res) => {
  foodItemService.list(req.params.id).then(data => {
    res.render("japaneseMenu", {
      japaneseMenuData: data
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

app.get("/cart/checkout", (req, res) => {
  res.render("checkout");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login"); // or redirect to '/signup'
}

app.get("/userprofile", isLoggedIn, (req, res) => {
  console.log(req.body);
  
  res.render("userprofile", {
    email: req.session.passport.user.email
  });
});

// app.post("/");

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key")
};

https.createServer(options, app).listen(2000);

module.exports = app;
