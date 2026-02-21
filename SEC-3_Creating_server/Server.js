const http = require('http');
const fs = require('fs');

const server= http.createServer((req,res)=>{
const url = req.url;
if(url ==='/'){
	res.setHeader('Content-Type','text/html');
	res.write('<html>');
		res.write('<head><title>form page</title></head>');
			res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>send</button></form></body>')
	res.write('</html>')
	return res.end();
}
else if(url==='/message' && req.method === 'POST'){
	const body =[];
	req.on('data' ,(chunk)=>{
		console.log(chunk);
      body.push(chunk);
			console.log(body);
	});
	req.on('end',()=>{
           const parsedbody = Buffer.concat(body).toString();
					 console.log(parsedbody);
	})
fs.writeFileSync('message.txt','Dummy content');
res.statusCode=302;
res.setHeader('Location','/');
		
	return res.end();

}
	res.setHeader('Content-Type','text/html');
	res.write('<html>');
		res.write('<head><title>my page</title></head>');
			res.write('<body><h1>my node server</h1></body>')
	res.write('</html>')
	res.end();

});

server.listen(3000,()=>{
	console.log(`server running on http://localhost:${3000}`)

});