
const process = require("process");

// 1. Display Node.js version
console.log("Node Version:", process.version);

// 2. Display operating system platform
console.log("Platform:", process.platform);

// 3. Display current working directory
console.log("Working Directory:", process.cwd());

// 4. Display process ID
console.log("Process ID:", process.pid);

// 5. Display command-line arguments
console.log("Arguments:", process.argv);
