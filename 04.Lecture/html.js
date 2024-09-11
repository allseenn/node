const express = require('express');
const app = express();
const port = 3000;

const article = [
    {title: 'Article 1', description: 'First awesome article'},
    {title: 'Article 2', description: 'Second awesome article'},
    {title: 'Article 3', description: 'Third awesome article'}
];

app.get('/', (req, res) => {
    let html = '<h1>Articles list</h1>';

    for(let i = 0; i < article.length; i++) {
        html += `<h2>${article[i].title}</h2>`;
        html += `<p>${article[i].description}</p>`;
    }

    res.send(html);
});

app.listen(port);