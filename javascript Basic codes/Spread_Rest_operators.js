//Spread Operators
const name =['pratik','suresh','farate'];

const copiedArray = [name];         //it copies entire array as a single object to new array.
console.log(copiedArray);

const copiedArray2 = [...name];      //it copies the each value one by one to new array.
console.log(copiedArray2);


console.log("\nrest opeartors");
const Arr=(...args)=>{
	return args;
}

const array= Arr(1,2,3);

console.log(array);