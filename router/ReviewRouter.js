// const express = require('express');

// class ReviewRouter {
//     constructor(reviewService){
//         this.reviewService = reviewService
//     }

//     router(){
//         let router = express.Router();

//         router.get('/', this.get.bind(this));
//         router.post('/', this.post.bind(this));
//         // router.put('/:id', this.put.bind(this));
//         // router.delete('/:id', this.delete.bind(this));

//         return router;
//     }

//     get(req,res){
//         return this.reviewService.list(user)
//             .then((review)=>{
//                 res.json(review)
//             })
//             .catch((err)=> res.status(500).json(err));
//     }

//     post(req, res){
//         return this.reviewService.add(req.body.review, req.sessions.passport.user.email)
//         .then(()=> this.reviewService.list(req.sessions.passport.user))
//         .then((comment)=> res.json(comment))
//         .catch((err)=> res.status(500).json(err));
//     }

//     put(req,res){
//         return this.reviewService.update(req.params.id, req.body.review, req.sessions.passport.user)
//         .then(()=> this.reviewService.list(req.sessions.passport.user))
//         .then((comment)=> res.json(comment))
//         .catch((err)=> res.status(500).json(err));
//     }

//     delete(req,res){
//         return this.reviewService.remove(req.params.id, req.sessions.passport.user)
//         .then(()=> this.reviewService.list(req.sessions.passport.user))
//         .then((comment)=> res.json(comment))
//         .catch((err)=> res.status(500).json(err));
//     }

// }

// module.exports = ReviewRouter;
