// Ejercicio 90: Ordenar los datos de una colección de objetos con la función orderBy().

const _ = require('lodash');

let personas = [
    {id: 1003, nombre: 'Oliva', edad: 43},
    {id: 1001, nombre: 'Daniela', edad: 23},
    {id: 1002, nombre: 'Edward', edad: 19}
];

console.log(personas);

console.log();

let resultado = _.orderBy(personas, ['id']);
console.log(resultado);

console.log();

resultado = _.orderBy(personas, ['id'], ['desc']);
console.log(resultado);

console.log();

resultado = _.orderBy(personas, ['nombre']);
console.log(resultado);

console.log();

resultado = _.orderBy(personas, ['edad']);
console.log(resultado);
