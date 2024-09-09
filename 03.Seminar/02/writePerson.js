const fs = require('fs');
const path = require('path');

const person = {
    name: "Ivan",
    surname: "Ivanov",
    age: 30,
    city: "Moscow",
    country: "Russia",
    company: "Yandex",
    phone: "1234567890",
};

fs.writeFileSync(path.join(__dirname, "person.json"), JSON.stringify(person, null, 2));

