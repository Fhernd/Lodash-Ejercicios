// Ejercicio 77: Filtrar una colección de datos con la función filter().

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Cantidad de elementos del arreglo "numeros": ${numeros.length}`);
console.log(numeros);

console.log();

let pares = _.filter(numeros, (n) => n % 2 == 0);
console.log(`Cantidad de elementos del arreglo "pares": ${pares.length}`);
console.log(pares);

console.log();

let impares = _.filter(numeros, (n) => n % 2 != 0);
console.log(`Cantidad de elementos del arreglo "impares": ${impares.length}`);
console.log(impares);

console.log();

let personas = [{id: 1001, nombre: 'Edward', activo: true}, {id: 1002, nombre: 'Sary', activo: false}, {id: 1003, nombre: 'Johnny', activo: true}];

console.log(`Cantidad de elementos del arreglo "personas": ${personas.length}`);
console.log(personas);

console.log();

let personasActivas = _.filter(personas, (p) => p.activo);
console.log(`Cantidad de elementos del arreglo "personasActivas": ${personasActivas.length}`);
console.log(personasActivas);

console.log();

personasActivas = _.filter(personas, 'activo');
console.log(`Cantidad de elementos del arreglo "personasActivas": ${personasActivas.length}`);
console.log(personasActivas);

console.log();

personasActivas = _.filter(personas, ['activo', true]);
console.log(`Cantidad de elementos del arreglo "personasActivas": ${personasActivas.length}`);
console.log(personasActivas);
