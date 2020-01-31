const express = require("express");
const router = express.Router();

class FoodItemRouter{
    constructor(foodItemService){
        this.foodItemService = foodItemService;
    }
    router(){
        router.get("/:id",this.get.bind(this));
        // router.post('/', this.post.bind(this));
    
        return router
    }
    
    get(req,res){

        let restParams = req.params.id
        console.log("LINE 16 router router .js <<<<>>>");
       
        
        return this.foodItemService.list(restParams)
        .then((data)=>
{ 
            res.json(data)})
        .catch((err) => res.status(500).json(err))
    }
    
}

module.exports = FoodItemRouter;