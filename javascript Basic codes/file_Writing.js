const a = require('a');
a.writeFile("output.txt","Writing File",(err)=>{
	if (err) console.log("error occured");
		else console.log("file written successfully");
})