const fs = require('fs')

fs.readFile("package.json","utf-8",(err,data)=>{

	if(err){
		console.log("error:",err.message);		
		return;
	}

	console.log("file System:")
	console.log(data)
 
})
console.log("hiii")
//fs.writeFile()