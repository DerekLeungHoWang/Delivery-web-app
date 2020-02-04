//Require modules
const fs = require("fs");
const https = require("https");

const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const PATH = require("path");

// Stripe
const charge = require("./service/charge");

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

setupPassport(app);
//======================================AUTH=================//
//template engine
app.engine(
  "handlebars",
  hbs({
    defaultLayout: "main",
    layoutsDir: PATH.resolve(__dirname, "views/layouts"),
    partialsDir: PATH.resolve(__dirname, "views/partials")
  })
);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static("router"));

//======================================ROUTERS================//
app.use("/", router);
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

// VIEWS -------------------------------------------------------//
//app.get

app.get("/", (req, res) => {
  restService.cuisineType().then(data => {
    restService.listAll().then(dataAll => {
      if ((res.locals.user = req.user || null)) {
        res.render("index", {
          layout: "main2",
          cuisineData: data,
          allRestData: dataAll
        });
      } else {
        res.render("index", {
          layout: "main",
          cuisineData: data,
          allRestData: dataAll
        });
      }
    });
  });
});

// //===================================ITALIAN ROUTE============================

app.get("/italian", (req, res) => {
  restService.list().then(data => {
    if ((res.locals.user = req.user || null)) {
      res.render("italian", { layout: "main2", italianData: data });
    } else {
      res.render("italian", { layout: "main", italianData: data });
    }
  });
});

//Italian restaurants dynamic render
app.get("/italian/:id", (req, res) => {
  foodItemService.list(req.params.id).then(data => {
    if ((res.locals.user = req.user || null)) {
      res.render("italianMenu", { layout: "main2", italianMenuData: data });
    } else {
      res.render("italianMenu", { layout: "main", italianMenuData: data });
    }
  });
});

//Japanese Restaurants render

app.get("/japanese", (req, res) => {
  restService.listJp().then(data => {
    if ((res.locals.user = req.user || null)) {
      res.render("japanese", { layout: "main2", japaneseData: data });
    } else {
      res.render("japanese", { layout: "main", japaneseData: data });
    }
  });
});

app.get("/japanese/:id", (req, res) => {
  foodItemService.list(req.params.id).then(data => {
    if ((res.locals.user = req.user || null)) {
      res.render("japaneseMenu", { layout: "main2", japaneseMenuData: data });
    } else {
      res.render("japaneseMenu", { layout: "main", japaneseMenuData: data });
    }
  });
});

app.get("/cart", (req, res) => {
  if ((res.locals.user = req.user || null)) {
    res.render("cart", { layout: "main2" });
  } else {
    res.render("cart", { layout: "main" });
  }
});

app.get("/contact", (req, res) => {
  if ((res.locals.user = req.user || null)) {
    res.render("contact", { layout: "main2" });
  } else {
    res.render("contact", { layout: "main" });
  }
});

app.get("/userprofile", (req, res) => {
  console.log(req.session.passport.user);

  let query = knex
    .from("order_items")
    .innerJoin("orders", "order_items.order_id", "orders.id")
    .innerJoin("users", "orders.user_id", "users.id")
    .innerJoin("food_item", "order_items.food_item_id", "food_item.id")
    .where("users.id", req.session.passport.user.id);

  query.then(rows => {
    console.log(rows);
    console.log("ppppppppppppppppppppppppppppppppppppppppppppppppp");

    console.log(rows.length);

    if (rows.length > 0) {
      // console.log(rows, "line146");
      console.log(rows.slice(-1)[0].order_id);

      const ordersToInsert = rows.map(row => ({
        quantity: row.quantity,
        food_name: row.food_name,
        food_price: row.food_price,
        amount: row.amount,
        order_id: row.order_id
      }));

      let ordersToInsert_final = [];
      for (let i = 0; i < ordersToInsert.length; i++) {
        if (ordersToInsert[i].order_id == rows.slice(-1)[0].order_id) {
          ordersToInsert_final.push(ordersToInsert[i]);
          console.log(
            ordersToInsert[i],
            "***************************************************************"
          );
        }
      }
      console.log(ordersToInsert_final);

      res.render("userprofile", {
        layout: "main2",
        email: req.session.passport.user.email,
        full_name: req.session.passport.user.full_name,
        address: req.session.passport.user.address,
        ordersToInsert_final,
        grand_total: rows.slice(-1)[0].amount,
        orderID: rows.slice(-1)[0].order_id,
        created_at: rows.slice(-1)[0].created_at,
        restaurants_id: rows.slice(-1)[0].restaurants_id,
        user_id: rows.slice(-1)[0].user_id
      });
    } else {
      res.render("userprofile", {
        layout: "main2",
        email: req.session.passport.user.email,
        full_name: req.session.passport.user.full_name,
        address: req.session.passport.user.address
      });
    }
  });
});

app.get("/userprofile/orderHistory", (req, res) => {
  let query2 = knex
    .from("order_items")
    .innerJoin("orders", "order_items.order_id", "orders.id")
    .innerJoin("users", "orders.user_id", "users.id")
    .innerJoin("food_item", "order_items.food_item_id", "food_item.id")
    .where("users.id", req.session.passport.user.id);

  query2.then( async rows => {
    console.log(rows);
    console.log("ppppppppppppppppppppppppppppppppppppppppppppppppp");

    console.log(rows.length);

   
      // console.log(rows, "line146");
      // console.log(rows.slice(-1)[0].order_id);

      const ordersToInsert2 = rows.map(row => ({
        quantity: row.quantity,
        food_name: row.food_name,
        food_price: row.food_price,
        amount: row.amount,
        order_id: row.order_id
      }));


      // let count = 0;
      // for (let i = 0; i < ordersToInsert2.length; i++) {
      //   if (ordersToInsert2[i].order_id == rows.slice(-1)[0].order_id) {
      //     // ordersToInsert_final.push(ordersToInsert[i]);
      //     console.log(ordersToInsert2[i]);
      //     count += 1;
      //     console.log(
      //       "***************************************************************for history"
      //     );
      //   }
      // }
      // console.log(count, "line266");

      // console.log(ordersToInsert2.splice(count, count));

      // let ordersToInsert_final2 = await ordersToInsert2.splice(-count, count);

      // console.log(ordersToInsert_final);

      res.render("orderHistory", {
        layout: "main2",
        ordersToInsert2,
        email: req.session.passport.user.email,
        full_name: req.session.passport.user.full_name,
        address: req.session.passport.user.address,

      });
    
  });
});

app.post("/charge", (req, res, next) => {
  charge(req)
    .then(data => {
      res.render("success", { layout: "main3" });
    })
    .catch(error => {
      res.render("cart", error);
      console.log("payment was not successful");
    });
});

const options = {
  cert: fs.readFileSync("./localhost.crt"),
  key: fs.readFileSync("./localhost.key")
};

https.createServer(options, app).listen(2000);

module.exports = app;
