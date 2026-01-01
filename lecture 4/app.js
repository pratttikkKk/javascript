const http = require('http');
const { text } = require('stream/consumers');

const server = http.createServer((req,res)=>{
	console.log(req.url,req.method,req.headers);
	if(req.url==='/'){
		res.writeHead(200,{'content-type':'text/html'});
	res.write('<html>');
	res.write('<head>');
  res.write('<title>Complete coding</title>');
	res.write('<body><h1>Enter your name </h1>');
	res.write('<form action="/products" method="POST">');
	res.write('<input type="text" name ="username" placeholder="enter your name">');
  res.write('<input type="submit" value="submit">')
	res.write('</form>')
	res.write('</body>');
	res.write('</head>');
	return res.end();
	 }
	else if(req.url.toLowerCase()==='/products' && req.method=="POST")
	{
	res.writeHead(200,{'content-type':'text/html'});
	res.write('<html>')
	res.write('<head>');
  res.write('<title>products page</title>');
	res.write('<body>Explore Products</body>');
	res.write('</head>');
	return res.end()
	}

	res.writeHead(200,{'content-type':'text/html'});
	res.write('<html>');
	res.write('<head>');
		     res.write('<title>Complete coding</title>');
						 res.write('<body>Like/Share/Subscribe</body>');
	res.write('</head>');
	res.end();
	 
});

const PORT = 3000;
server.listen(PORT,()=>{
	console.log(`server is running http://localhost:${PORT}`);
});