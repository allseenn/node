const handlebars = require('handlebars');
const template = handlebars.compile(
    '{{#if bold}} <b>Hello!</b> {{else}} <i>Hello!</i> {{/if}}'
);
console.log(template({bold: true}));
console.log(template({bold: false}))