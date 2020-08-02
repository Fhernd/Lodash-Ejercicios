// Ejercicio 76: Comprobar que un conjunto de elementos cumpla un predicado con la función every().

const _ = require('lodash');

let datos = [1, true, {a: 5}, "JavaScript", 3.1415];

let resultado = _.every(datos, Boolean);
console.log(resultado);

console.log();

// datos.push(null);
// datos.push('');
// datos.push(0);
// datos.push(0.0)
// datos.push({}) // true
datos.push(undefined)

resultado = _.every(datos, Boolean);
console.log(resultado);

console.log();

let personas = [{id: 1001, nombre: 'Edward', activo: true}, {id: 1002, nombre: 'Angela', activo: false}];

resultado = _.every(personas, 'activo');
console.log(resultado);

personas[1].activo = true;
resultado = _.every(personas, 'activo');
console.log(resultado);

console.log();

datos = [2, 3, 5, 7];
resultado = _.every(datos, (d) => d > 1);
console.log(resultado);

resultado = _.every(datos, function(d) {return d > 1});
console.log(resultado);

function mayorA1(d) {
    return d > 1;
}

resultado = _.every(datos, mayorA1);
console.log(resultado);

console.log();

datos.push(1);
resultado = _.every(datos, mayorA1);
console.log(resultado);
