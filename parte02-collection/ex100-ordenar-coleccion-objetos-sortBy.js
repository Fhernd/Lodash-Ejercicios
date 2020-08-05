// Ejercicio 100: Ordenar una colección de objetos por medio de la función sortBy().

const _ = require('lodash');

let personas = [
    {id: 1003, nombre: 'Juan', edad: 47},
    {id: 1004, nombre: 'Angela', edad: 43},
    {id: 1001, nombre: 'Daniela', edad: 29},
    {id: 1002, nombre: 'Oliva', edad: 53}
];

console.log(personas);

console.log();

let resultado = _.sortBy(personas, [function(p) {return p.id}]);
console.log(resultado);

console.log();

resultado = _.sortBy(personas, [function(p) {return p.edad}]);
console.log(resultado);

console.log();

resultado = _.sortBy(personas, ['edad', 'id']);
console.log(resultado);

console.log();

personas.push({id: 1005, nombre: 'Sonia', edad: 29})
resultado = _.sortBy(personas, ['edad', 'id']);
console.log(resultado);
