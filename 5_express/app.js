	const http = require('http');
	const express = require('express');
	
	const app = express();
	app.use(express.urlencoded({ extended: false }));
	
	app.use('/add-product',(req,res,next)=>{
		res.send('<form action="/product" method="POST"><input type="text" name="title"><br><br><button type="submit" text="submit"></button></form>')
	})
	app.use('/product',(req,res,next)=>{
		console.log(req.body);
		res.redirect('/hii');
	})
	app.use('/hii',(req,res,next)=>{
		res.send('<h1>hii i am from add product page</h1>');
	});
	app.use((req,res,next)=>{
		res.status(400).send('<h1>error found</h1>')
	})
	
	app.listen(3000);