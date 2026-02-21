const add = require("./add");

function requestHandler(req, res) {

    if (req.url === "/" && req.method === "GET") {
        res.write("<h1>Welcome to Calculator App</h1>");
        res.write('<a href="/calculator">Go to Calculator</a>');
        return res.end();
    }

   if (req.url === "/calculator" && req.method === "GET") {
    res.write(`
        <html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>Calculator</h1>
                <form action="/calculate-result" method="POST">
                    <input type="number" name="num1" placeholder="First number" />
                    <input type="number" name="num2" placeholder="Second number" />
                    <button type="submit">Sum</button>
                </form>
            </body>
        </html>
    `);
    return res.end();
}


    if (req.url === "/calculate-result" && req.method === "POST") {
        const body = [];

        req.on("data", chunk => body.push(chunk));

        req.on("end", () => {
            const parsedData = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsedData);

            const num1 = Number(params.get("num1"));
            const num2 = Number(params.get("num2"));

            const result = add(num1, num2);

            res.write(`<h1>Result: ${result}</h1>`);
            res.write('<a href="/calculator">Back</a>');
            res.end();
        });
    }
}

module.exports = requestHandler;
