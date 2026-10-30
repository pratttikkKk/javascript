const http = require('http');

const server = http.createServer((req,res)=>{
	res.writeHead(200,{
  'Content-Type':'text/plain'
	});

	res.end('<h1>hello from server</h1>');
});

server.listen(3000,()=>{
	console.log(`server running at http://localhost:3000`);
})