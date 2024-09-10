const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;
const fileName = 'counter.log';
let counter = {
    root: 0,
    about: 0
}


if (!fs.existsSync(path.join(__dirname, fileName))) {
    fs.writeFileSync(path.join(__dirname, fileName), JSON.stringify(counter));
}

counter = JSON.parse(fs.readFileSync(path.join(__dirname, fileName)));

app.get('/', (req, res) => {
    counter.root++;
    fs.writeFileSync(path.join(__dirname, fileName), JSON.stringify(counter)); 
    res.send(`
        <h1>Корневая страница</h1>
        <p>Просмотров: ${counter.root}</p>
    `);
});

app.get('/about', (req, res) => {
    counter.about++;
    fs.writeFileSync(path.join(__dirname, fileName), JSON.stringify(counter)); 
    res.send(`
        <h1>Страница about</h1>
        <p>Просмотров: ${counter.about}</p>
    `);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
