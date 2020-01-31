const passport = require("passport");
const express = require("express");
const router = express.Router();


class OrderRouter{
    constructor(orderService){
        this.orderService = orderService;
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
        // router.delete('/:id', this.delete.bind(this));
   
        return router
    }

    get(req,res){
        // console.log("GET ORDER ROUTER JS");
        
        return this.orderService.list(req.session.passport.user.email)
        .then((data)=> {
            // console.log(data)           
          res.json(data) })

        .catch((err)=>res.status(500).json(err));
    }
    post(req,res){
        // console.log("LINE 26 ORDER ROUTER JS"); 
        // // console.log(req.session);
        // console.log(req.session.passport.user.email);
        // console.log('post?=========');
        
        // console.log(req.body.content, "<============== req.body this ")
        return this.orderService.add(req.session.passport.user.email, req.body.content)
        .then((data)=> { 
          
                   
            // console.log(req.body.content, "<============== req.body this  47__ ")
            // console.log(data, 'line48 orderrouter');
            
            // console.log(req.session.passport.user.email);
            // console.log(req.body.content, "<============== req.body line 49 router order");
            // return this.orderService.addToFoodItem(req.session.passport.user.email, req.body.content)
            
        }) 
        .catch((err)=>res.status(500).json(err));
    }
    
    
}

module.exports = OrderRouter;


// router(){
    //     function isLoggedIn(req, res, next) {
    //         if (req.isAuthenticated()) {
    //           return next();
    //         }
    //         res.redirect("/signedin"); // or redirect to '/signup'
    //       }
    //     router.get("/", isLoggedIn, this.get.bind(this));
    //     router.post('/', isLoggedIn, this.post.bind(this));
    
    //     return router
    // }
    
    // get(req, res){
        
    //     return this.orderService.list(req.session.passport.user.email)
    //     .then((data)=>
    //     { console.log("line 21 ORDERrouterJS")
    //     res.json(data)})
    //     .catch((err) => res.status(500).json(err))
    // }

    // post(req, res){
    //     console.log("POST REQUEST ORDER ROUTER JS")
        
    //      this.orderService.add(req.body.order, req.session.passport.user) //req.body.order

    //    res.send('order completed');
        
    // }