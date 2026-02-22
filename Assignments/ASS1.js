const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    // Route 1: Home Page
    if (url === '/' && method === 'GET') {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment1</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to Node Assignment</h1>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="username">');
        res.write('<button type="submit">Add User</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    // Route 2: Users Page
    if (url === '/users' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    // Route 3: Create User
    if (url === '/create-user' && method === 'POST') {

        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];

            console.log("New User:", username);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});