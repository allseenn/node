const handlebars = require('handlebars');
const template = handlebars.compile('<p>{{someVar}}<p>');
const result = template({someVar: 'hello'});
console.log(result);
