const http = require('http')

const server = http.createServer((req,res)=>{
     res.writeHead(200,{"content-type":"text/plain"})
		 res.end("hello , I am node server");
});

server.listen(3000,()=>{
	console.log("http://localhost:3000")
})