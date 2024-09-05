const http = require('http');
const server = http.createServer((req, res) => {
    
    if(req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<a href="/about">About</a><h1>');
    }
    else if(req.url === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<a href="/">Go home</a>');
    }
    else {
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Page not found</h1>');
    }    
});

const port = 3000;
server.listen(port);