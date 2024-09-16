import express from 'express'; 
import Joi from 'joi';
import fu from './fu.js';

const app = express();
const port = 3000;
const usersFile = './users.json';
let uniqueID = await fu.check(usersFile);
const users = await fu.read(usersFile);

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
    const user = users.find(u => u.id === id);
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
    console.log(uniqueID);
    fu.save(usersFile, users);
    res.send({ id: uniqueID });
});

app.put('/users/:id', (req, res) => {
    const result = userSchema.validate(req.body);
    if(result.error){
        return res.status(400).send(result.error.details);
    }
    const id = +req.params.id;
    const user = users.find(u => u.id === id);
    if(user){
        user.firstName = req.body.firstName;
        user.secondName = req.body.secondName;
        user.age = req.body.age;
        user.city = req.body.city;
        fu.save(usersFile, users);
        res.send({ user });
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
});

app.delete('/users/:id', (req, res) => {
    const id = +req.params.id;
    const user = users.find(u => u.id === id);
    if(user){
        users.splice(id-1, 1);
        fu.save(usersFile, users);
        res.send({ user });
    }
    else {
        res.status(404);
        res.send({ user: null });
    }
});

app.listen(port, () => console.log(`Server started on port ${port}`));

