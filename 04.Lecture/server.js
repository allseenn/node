const express = require('express');
const app = express();
const port = 3000;
let uniqueID = 0;
const articles = [];

app.use(express.json());

app.get('/articles', (req, res) => {
    res.send({articles});
});

app.get('/articles/:id', (req, res) => {
    const article = articles.find(article => article.id === Number(req.params.id));

    if(article) {
        res.send({article});
    } else {
        res.status(404);
        res.send({article: null});
    }
});

app.post('/articles', (req, res) => {
    uniqueID++;
    articles.push({
        id: uniqueID,
        ...req.body
    });
    res.send({
        id: uniqueID,
    });
});

app.listen(port);