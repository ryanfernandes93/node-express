const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser=require('body-parser');
const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.all('/dishes',(req,res,next)=>{
  res.statusCode=200;
  res.setHeader('Content-type','text/plain');
  next();
});

app.get('/dishes',(req,res,next)=>{
  res.end('will send you back the details');
});

app.post('/dishes',(req,res,next)=>{
  res.end('will add the details for'+req.body.name+' & '+req.body.description);
});

app.put('/dishes',(req,res,next)=>{
  res.statusCode=403;
  res.end('not supported');
});

app.delete('/dishes',(req,res,next)=>{
  res.end('all dishes deleted');
});

app.get('/dishes/:dishid',(req,res,next)=>{
  res.end('will send you back the details for dish '+req.params.dishid);
});

app.post('/dishes/:dishid',(req,res,next)=>{
  res.statusCode=403;
  res.end('not supported');
});

app.put('/dishes/:dishid',(req,res,next)=>{  
  res.end('will add the details for'+req.params.dishid+' with '+req.body.name+' & '+req.body.description);
});

app.delete('/dishes/:dishid',(req,res,next)=>{
  res.end(req.params.dishid+' dishes deleted');
});
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});