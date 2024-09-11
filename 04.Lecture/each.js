const handlebars = require('handlebars');
const items = [
    {name: 'first item'},
    {name: 'second item'},
    {name: 'third item'}
]

const template = handlebars.compile(
    '{{#each items}}<li>{{this.name}}</li>{{/each}}'
)

console.log(template({items}))