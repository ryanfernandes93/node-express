const express=require('express');
const bodyParser=require('body-parser');
const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
  })  
  .get((req,res,next)=>{
    res.end('will send you back the  promo details');
  })
  .post((req,res,next)=>{
    res.end('will add the promo details for'+req.body.name+' & '+req.body.description);
  })
  .put((req,res,next)=>{
    res.statusCode=403;
    res.end('not supported');
  })
  .delete((req,res,next)=>{
    res.end('all promotions deleted');
  });

  promoRouter.route('/:promoid')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
  })
  .get((req,res,next)=>{
    res.end('will send you back the details for promoid '+req.params.promoid);
  })
  .post((req,res,next)=>{
    res.statusCode=403;
    res.end('not supported');
  })
  .put((req,res,next)=>{  
    res.end('will add the details for'+req.params.promoid+' with '+req.body.name+' & '+req.body.description);
  })
  .delete((req,res,next)=>{
    res.end(req.params.promoid+' dish deleted');
  });

  module.exports=promoRouter;