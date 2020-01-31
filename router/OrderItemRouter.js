const passport = require("passport");
const express = require("express");
const router = express.Router();


class OrderItemRouter{
    constructor(orderItemService){
        this.orderItemService = orderItemService;
    }
    router(){
        function isLoggedIn(req, res, next) {
            
            if (req.isAuthenticated()) {
               
                return next();
            }
            res.redirect("/login"); // or redirect to '/signup'
        }

        router.get("/",isLoggedIn,this.get.bind(this));
        router.post("/",isLoggedIn,this.post.bind(this));
        return router
    }
    
    get(req,res){
         console.log('getting to the orderitemrouter line15');
         console.log(req.session.passport.user.email);
         
        return this.orderItemService.list(req.session.passport.user.email)
        .then((data)=> {
            console.log('getting here');
            
            console.log(data, 'line 31==================orderitemrouter')           
          res.json(data) })

        .catch((err)=>res.status(500).json(err));
      
    }

    post(req,res){
        console.log('getting to the orderitemrouter line 39');

    }
    
}

module.exports = OrderItemRouter;