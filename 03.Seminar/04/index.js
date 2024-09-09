const app = require('express')();
//const app = web();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Home</h1>
        <a href="/about">About</a>
        `);
});

app.get('/about', (req, res) => {
    res.send(`
        <h1>About</h1>
        <a href="/">Home</a>
        `);
});

app.listen(port);