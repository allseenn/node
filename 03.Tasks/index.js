const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;
let counterRoot = '0';
let counterAbout = '0';

if (!fs.existsSync(path.join(__dirname, 'counterRoot'))) {
    fs.writeFileSync(path.join(__dirname, 'counterRoot'), '0');
}
if (!fs.existsSync(path.join(__dirname, 'counterAbout'))) {
    fs.writeFileSync(path.join(__dirname, 'counterAbout'), '0');
}

counterRoot = parseInt(fs.readFileSync(path.join(__dirname, 'counterRoot'), 'utf8'));
counterAbout = parseInt(fs.readFileSync(path.join(__dirname, 'counterAbout'), 'utf8'));

app.get('/', (req, res) => {
    counterRoot++;
    fs.writeFileSync(path.join(__dirname, 'counterRoot'), counterRoot.toString()); 
    res.send(`
        <h1>Корневая страница</h1>
        <p>Просмотров: ${counterRoot}</p>
    `);
});

app.get('/about', (req, res) => {
    counterAbout++;
    fs.writeFileSync(path.join(__dirname, 'counterAbout'), counterAbout.toString()); 
    res.send(`
        <h1>Страница about</h1>
        <p>Просмотров: ${counterAbout}</p>
    `);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
