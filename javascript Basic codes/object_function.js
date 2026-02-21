const student={
	name:"pratik",
	age:21,

	greet(){
		return this.name;
	},

	greet2(){
		console.log("my name is : "+ this.name);
	}

}
student.greet2();
console.log(student.greet());
console.log(student.age)