const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Request made..");
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // routing html pages
    let path = "./views/"

    switch (req.url) {
        case "/":
            path += "index.html"
            res.statusCode = 200;
            break;
    
        case "/about":
            path += "about.html"
            res.statusCode = 200;
            break;

        case "/about-me":
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            
        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }

    // sending html files
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log("err", err);
            console.log("    ");
            res.end();
        }

        // error
        else {
            console.log("Sending data....");
            console.log("    ");
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log("listening for requests in 3000");
})