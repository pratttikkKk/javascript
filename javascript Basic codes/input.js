const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function (n) {
  n = Number(n);
  console.log("You entered:", n);
  rl.close();
});
