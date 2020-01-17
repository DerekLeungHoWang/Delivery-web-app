// const express = require("express");
// const router = express.Router();


// class OrderRouter{
//     constructor(orderService){
//         this.orderService = orderService;
//     }

//     router(){
//         function isLoggedIn(req, res, next) {
//             if (req.isAuthenticated()) {
//               return next();
//             }
//             res.redirect("/signedin"); // or redirect to '/signup'
//           }
//         router.get("/", isLoggedIn, this.get.bind(this));
//         router.post('/', isLoggedIn, this.post.bind(this));
    
//         return router
//     }
    
//     get(req, res){
//         console.log("LINE 16 OrderRouter <<<<>>>");
//         console.log(req)
//         console.log(req.session)
//         console.log(req.session.passport.user)
//         return this.orderService.list(req.session.passport.user.email)
//         .then((data)=>
//         { console.log(data, "line 21 routerJS")
//         res.json(data)})
//         .catch((err) => res.status(500).json(err))
//     }

//     post(req, res){
//         console.log(req.body.order) // value is from axios.post in controller.js
//         console.log(req.auth.user, 'line 28 orderRouter.js');
//         console.log("LINE29 ROUTERJS checking req.body");
//         console.log(req.body);
        
//          this.orderService.add(req.body.order, req.auth.user)

//        res.send('order completed');
        
//     }
    
// }

// module.exports = OrderRouter;