const http = require('http');
const express = require('express');

const app = express();

app.use('/',(req,res,next)=>{
	console.log("this is the middleware1");
	next();
})
app.use('/product',(req,res,next)=>{
	console.log("this is the product");
	res.send('<h1>hello from product page</h1>');
	
})


app.listen(3000);