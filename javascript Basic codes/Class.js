const readline = require("readline");

const ip = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

class Student{
	constructor (name , age){
		this.name=name;
		this.age=age;
	}

	 display() {
		console.log("student name is:", this.name);
		console.log("student age is:", this.age);
		
	}

}

ip.question("enter your name:",function(name)
{
	ip.question("enter your age:",function(age){
		const s1 = new Student(name , age);
		//console.log("Students details:");
		s1.display();
		ip.close();
	});
}
);