const http = require("http");

/*
 STEP 1: Create HTTP server
 This function runs EVERY TIME a request comes
*/
const server = http.createServer((req, res) => {

    console.log("URL:", req.url);
    console.log("METHOD:", req.method);

    /*
     STEP 2: Check route and method
     Android will send POST request to /details
    */
    if (req.url === "/details" && req.method === "POST") {

        const body = [];

        /*
         STEP 3: Read data in chunks
         Node.js receives POST data piece-by-piece
        */
        req.on("data", chunk => {
            body.push(chunk);
        });

        /*
         STEP 4: When all data is received
        */
        req.on("end", () => {

            const fullBody = Buffer.concat(body).toString();
            console.log("RAW BODY:", fullBody);

            let data;
            try {
                // STEP 5: Convert JSON string to JS object
                data = JSON.parse(fullBody);
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({
                    success: false,
                    message: "Invalid JSON"
                }));
            }

            /*
             STEP 6: Send JSON response back to Android
            */
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                success: true,
                message: "Data received successfully",
                user: data
            }));
        });

    } else {
        // STEP 7: Handle unknown routes
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            success: false,
            message: "Route not found"
        }));
    }
});

/*
 STEP 8: Start server
*/
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
