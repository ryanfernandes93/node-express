const express=require('express');
const bodyParser=require('body-parser');
const dishRouter=express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
  })  
  .get((req,res,next)=>{
    res.end('will send you back the details');
  })
  .post((req,res,next)=>{
    res.end('will add the details for'+req.body.name+' & '+req.body.description);
  })
  .put((req,res,next)=>{
    res.statusCode=403;
    res.end('not supported');
  })
  .delete((req,res,next)=>{
    res.end('all dishes deleted');
  });

  module.exports=dishRouter;