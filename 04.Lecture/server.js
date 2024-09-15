const express = require('express');
const { checkBody, checkParams } = require('./validation/validator');
const { idScheme, articleSchema } = require('./validation/scheme');

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
    else {
    res.status(404)
    res.send({article: null});
}
});

app.put('/articles/:id', checkParams(idScheme), checkBody(articleSchema), (req, res) => {
    const idValidationResult = idScheme.validate(req.params);
    if(idValidationResult.error){
        res.status(400);
        res.send(idValidationResult.error);
        return;
    }

    const articleValidationResult = articleSchema.validate(req.body);
    if(articleValidationResult.error){
        res.status(400);
        res.send(articleValidationResult.error);
        return;
    }

    const article = articles[req.params.id-1];
    if(article){
        article.title = req.body.title;
        article.content = req.body.content;
        res.send(article);
    } else {
        res.status(404)
        res.send({article: null});
    }
});

app.delete('/articles/:id', checkParams(idScheme), (req, res) => {
    const article = articles[req.params.id-1];
    if(article){
        articles.splice(req.params.id-1, 1);
        res.send(article);
    } else {
        res.status(404)
        res.send({article: null});
    }
});

app.post('/articles', checkParams(idScheme), (req, res) => {
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