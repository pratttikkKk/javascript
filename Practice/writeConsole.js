const fs = require('fs');

fs.readdir("node_modules",(err,node_modules)=>{
	//

	node_modules.forEach((file)=>{
		console.log(file)
	})
})