const fs = require('fs');

content = "hello student"

fs.writeFile('student.txt',content ,(err)=>{
	console.log("file written successfully")
})