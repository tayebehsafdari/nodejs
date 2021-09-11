const http = require('http');
const querystring = require('querystring');
const fs = require('fs');
// const bootstrap = require('bootstrap');


// Create an HTTP server
const server = http.createServer((req, res) => {
    // res.write('Hello World!');
    console.log("method: ", req.method, "url: ", req.url);
    if (req.url === '/' && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <title>Title</title>
                    </head>
                    <body>
                    <form action="" method="POST">
                        <label for="fname" class="form-label">First name:</label><br>
                        <input type="text" class="form-control" id="fname" name="fname" value="Tayebeh"><br>
                        <label for="lname" class="form-label">Last name:</label><br>
                        <input type="text" class="form-control" id="lname" name="lname" value="Safdari"><br><br>
                        <input type="submit" value="Submit" class="btn btn-primary">
                    </form>
                    </body>
                    </html>
                   `);
        return res.end();
    } else if (req.url === '/' && req.method === "POST") {
        let body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            let data = querystring.parse(body);
            console.log('my data: ', data.fname + ' ' + data.lname);
            // res.statusCode = 302;
            // res.setHeader('location', '/');
            // res.write("Data received successfully: " + data.fname + ' ' + data.lname);
            /* fs.writeFile('DB.txt', data.fname + ' ' + data.lname, () => {
                res.writeHead(302, {'location': '/'});
                res.end();
            }); */
            fs.appendFile('DB.txt', '\n' + data.fname + ' ' + data.lname, () => {
                res.writeHead(302, {'location': '/'});
                res.end();
            });
        });
        fs.readFile('DB.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log("readFile", data);
        });
    } else if (req.url === '/my-product') {
        let mydata = {name: "Tayebeh Safdari", age: 34, city: "Tehran"};
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(mydata));
        return res.end();
    }
    // res.end();
    // res.end('okay');
}).listen(3000, '127.0.0.1', () => {
    console.log("Example app listening at http://localhost:3000");
});

// Now that server is running
/* server.listen(3000, '127.0.0.1', () => {
    console.log("Example app listening at http://localhost:3000");
}); */