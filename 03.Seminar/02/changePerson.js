const path = require('path');
const fs = require('fs');
const person = require(path.join(__dirname, 'person.json'));

person.age -= 10;
person.city = "Ekaterinburg";

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(person, null, 2));