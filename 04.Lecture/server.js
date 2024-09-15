const express = require('express'); // Импортируем express
// Импортируем валидатор
const { checkBody, checkParams } = require('./validation/validator');
// Импортируем схемы
const { idScheme, articleSchema } = require('./validation/scheme');
// Создаем приложение
const app = express();
// Задаем порт
const port = 3000;
// переменная для хранения уникального идентификатора
let uniqueID = 0;
// Массив для хранения статей
const articles = [];
// Подключаем промежуточный обработчик, который позволяет использовать JSON
app.use(express.json());
// Получаем все статьи
app.get('/articles', (req, res) => {
    res.send({articles});
});
// Получаем конкретную статью
app.get('/articles/:id', checkParams(idScheme), (req, res) => {
    const article = articles[req.params.id-1];
    if(article)
        res.send(articles);
    else {
        res.status(404)
        res.send({article: null});
    }
});
// Обновляем статью
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
// Удаляем статью
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
// Создаем новую статью
app.post('/articles', checkBody(articleSchema), (req, res) => {
    uniqueID++;
    articles.push({
        id: uniqueID,
        ...req.body
    });
    res.send({
        id: uniqueID,
    });
});
// Обрабатываем несуществующую страницу
app.use((req, res) => {
    res.status(404);
    res.send({error: 'URL not found'});
});
// Запускаем сервер
app.listen(port);