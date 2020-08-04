// Ejercicio 91: Particionar una colección de objetos con la función partition().

const _ = require('lodash');

let personas = [
    {id: 1001, nombre: 'Daniela', edad: 23, activo: true},
    {id: 1002, nombre: 'Alexander', edad: 39, activo: false},
    {id: 1003, nombre: 'Angela', edad: 37, activo: true},
    {id: 1004, nombre: 'Luisa', edad: 28, activo: false}
];

console.log(personas);

console.log();

let resultado = _.partition(personas, (p) => p.activo);
console.log(resultado);

console.log();

resultado = _.partition(personas, 'activo');
console.log(resultado);

console.log();

resultado = _.partition(personas, ['activo', true]);
console.log(resultado);

console.log();

resultado = _.partition(personas, (p) => p.edad >= 25);
console.log(resultado);
