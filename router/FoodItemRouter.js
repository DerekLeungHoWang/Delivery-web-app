const express = require("express");
const router = express.Router();

class FoodItemRouter{
    constructor(foodItemService){
        this.foodItemService = foodItemService;
    }
    router(){
        router.get("/",this.get.bind(this));
        // router.post('/', this.post.bind(this));
    
        return router
    }
    
    get(req,res){
        console.log("LINE 16 router router .js <<<<>>>");
        // console.log(req.auth.user)
        
        return this.foodItemService.list(restParams)
        .then((data)=>
        { console.log(data, "line 21 FoodrouterJS")
            res.json(data)})
        .catch((err) => res.status(500).json(err))
    }
    
}

module.exports = FoodItemRouter;