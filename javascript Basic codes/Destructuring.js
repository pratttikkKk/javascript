const student={
	name:"pratik",
	age:21,
}

const {age,name} = student;
console.log(name,age);


const arr =['pratik','virat','rohit','dhoni'];

for(let name of arr){
	console.log(name);
}

const [name1, name2]=arr;                       //accessed the data in a sequence

console.log(name1,name2);