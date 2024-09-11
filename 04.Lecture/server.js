const express = require('express');
const app = express();
const port = 3000;

const articles = [];

app.get('/aricles', (req, res) => {
    res.send({articles});
});

app.listen(port);