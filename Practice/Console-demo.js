
const students = [
  { id: 1, name: "Pratik", course: "CSE" },
  { id: 2, name: "Rahul", course: "IT" }
];

// 1. Display normal message
console.log("Welcome to Node.js");

// 2. Display information
console.info("Student details");

// 3. Display warning
console.warn("This is a warning");

// 4. Display error
console.error("This is an error");

// 5. Display data in table format
console.table(students);

// 6. Measure execution time
console.time("Loop Time");

for (let i = 0; i < 1000000; i++) {

}

console.timeEnd("Loop Time");
