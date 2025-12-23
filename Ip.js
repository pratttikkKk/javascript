const readline = require("readline");

const ip = readline.createInterface({
	input : process.stdin,
	output: process.stdout
});

ip.question("Enter your name :",function(name){
	console.log(name)
	ip.close()

})