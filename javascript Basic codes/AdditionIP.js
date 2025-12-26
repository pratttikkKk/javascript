const { stdin } = require("process");
const readline = require("readline");

const ip = 	readline.createInterface({
	input:process.stdin,
	output: process.stdout
});

ip.question("enter first number :" , function(a){
ip.question("enter Second number :",function(b){
let sum = a+b
let addition= Number(a)+Number(b)
console.log(sum)
console.log(addition)
});
});

