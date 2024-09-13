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
    const article = articles[req.params.id-1];
    if(article)
        res.send(articles);
    else
        res.send({article: null});
});

app.put('/articles/:id', (req, res) => {
    const article = articles[req.params.id-1];
    if(article){
        article.title = req.body.title;
        article.content = req.body.content;
        res.send(articles);
    }else
        res.send({article: null});
});

app.delete('/articles/:id', (req, res) => {
    const article = articles[req.params.id-1];
    if(article){
        articles.splice(req.params.id-1, 1);
        res.send(articles);
    }else
        res.send({article: null});
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