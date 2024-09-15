const express = require('express');
const Joi = require('joi');
const app = express();
const port = 3000;

const users = [];
let uniqueID = 0;

const userSchema = Joi.object({
    firstName: Joi.string().min(3).required(),
    secondName: Joi.string().min(3).required(),
    age: Joi.number().min(0).max(150).required(),
    city: Joi.string().min(1)
}) 

app.use(express.json());

app.get('/users', (req, res) => {
    res.send({ users });
});

app.get('/users/:id', (req, res) => {
    const id = +req.params.id;
    let user = users.find(u => u.id === id);
    if(user){
        res.send({ user });
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
});

app.post('/users', (req, res) => {
    const result = userSchema.validate(req.body);
    if(result.error){
        return res.status(400).send(result.error.details);
    }
    users.push({ 
        id: ++uniqueID, 
        ...req.body 
    });
    res.send({ id: uniqueID });
});

app.put('/users/:id', (req, res) => {
    const result = userSchema.validate(req.body);
    if(result.error){
        return res.status(400).send(result.error.details);
    }
    const id = +req.params.id;
    let user = users.find(u => u.id === id);
    if(user){
        user = { id: id, ...req.body };
        users[id-1] = user;
        res.send({ user });
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id', (req, res) => {
    const id = +req.params.id;
    let user = users.find(u => u.id === id);
    if(user){
        users.splice(id-1, 1);
        res.send({ user });
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
});

app.listen(port);