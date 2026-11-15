
const fs = require("fs");

// 1. Write file
fs.writeFile("demo.txt", "Hello Node.js!", (err) => {
    if (err) throw err;
    console.log("1. File written");

    // 2. Read file
    fs.readFile("demo.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log("2. File content:", data);

        // 3. Append data
        fs.appendFile("demo.txt", "\nWelcome Pratik!", (err) => {
            if (err) throw err;
            console.log("3. Data appended");

            // 4. Rename file
            fs.rename("demo.txt", "new.txt", (err) => {
                if (err) throw err;
                console.log("4. File renamed");

                // 5. Delete file
                fs.unlink("new.txt", (err) => {
                    if (err) throw err;
                    console.log("5. File deleted");
                });
            });
        });
    });
});
