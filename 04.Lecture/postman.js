const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>POST request</h1>');
});

app.put('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>PUT request</h1>');
});

app.delete('/', (req, res) => {
    console.log(req.body);
    res.send('<h1>DELETE request</h1>');
});

app.listen(port);