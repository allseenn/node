const handlebars = require('handlebars');
const template = handlebars.compile('<p>{{somVar}} {{anotherVar}}</p>');
const result = template({somVar: 'hello', anotherVar: 'world'});
console.log(result)