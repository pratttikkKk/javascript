
const { stdin } = require("process");
const readline = require("readline");

const ip = 	readline.createInterface({
	input:process.stdin,
	output: process.stdout
});


ip.question("enter your age : ",age=>{
	console.log("your age is:",age);
	ip.close()
});	
