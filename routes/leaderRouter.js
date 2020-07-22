const express=require('express');
const bodyParser=require('body-parser');
const leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
  })  
  .get((req,res,next)=>{
    res.end('will send you back the leader details');
  })
  .post((req,res,next)=>{
    res.end('will add the details for'+req.body.name+' & '+req.body.description);
  })
  .put((req,res,next)=>{
    res.statusCode=403;
    res.end('not supported');
  })
  .delete((req,res,next)=>{
    res.end('all leaders deleted');
  });

  leaderRouter.route('/:leaderid')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/plain');
    next();
  })
  .get((req,res,next)=>{
    res.end('will send you back the details for dish '+req.params.leaderid);
  })
  .post((req,res,next)=>{
    res.statusCode=403;
    res.end('not supported');
  })
  .put((req,res,next)=>{  
    res.end('will add the details for'+req.params.leaderid+' with '+req.body.name+' & '+req.body.description);
  })
  .delete((req,res,next)=>{
    res.end(req.params.leaderid+' dish deleted');
  });

  module.exports=leaderRouter;