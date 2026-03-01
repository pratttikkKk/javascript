const http = require('http');
const express = require('express');

const app = express();

app.use('/',(req,res,next)=>{
	console.log("this is the middleware1");
	res.send('<h1>hello from express server with /</h1>');
	
})



app.listen(3000);