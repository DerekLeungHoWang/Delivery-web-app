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
        
        return this.orderService.list(req.session.passport.user.id)
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err));
    }
    post(req,res){
        console.log("LINE 26 ORDER ROUTER JS"); 
        // console.log(req.session);
        console.log(req.session.passport.user.email);
        console.log(req.body)
        
        return this.orderService.add(req.body.newOrder,req.session.passport.user.email)
        .then((data)=> {
            this.orderService.list(req.session.passport.user.email).then((data)=>{
                res.json(data)
            })
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