const express = require("express");
const router = express.Router();

class RestRouter{
    constructor(restService){
        this.restService = restService;
    }
    router(){
        router.get("/",this.get.bind(this));
        return router
    }
    
    get(req, res){
        // console.log(req.auth.user) 
        return this.restService.list()
        .then((data)=>{ 
            // console.log(data, "line 21 routerJS")
            res.json(data)})
        .catch((err) => res.status(500).json(err))
    }
}

module.exports = RestRouter;