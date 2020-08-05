// Ejercicio 94: Demostrar el uso de la función reject() sobre una colección de objetos.

const _ = require('lodash');Lodash Ejercicio: 94 Demostrar el Uso de la Función reject() sobre una Colección de Objetos

let personas = [
    {id: 1001, nombre: 'Danny', activo: true},
    {id: 1002, nombre: 'Alexander', activo: false},
    {id: 1003, nombre: 'Sonia', activo: true},
    {id: 1004, nombre: 'Juan', activo: true},
    {id: 1004, nombre: 'Angela', activo: false}
];

console.log(personas);

console.log();

let personasActivas = _.reject(personas, (p) => p.activo);
console.log(personasActivas);

console.log();

personasActivas = _.reject(personas, 'activo');
console.log(personasActivas);

console.log();

personasActivas = _.reject(personas, ['activo', true]);
console.log(personasActivas);
