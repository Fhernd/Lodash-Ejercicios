// Ejercicio 233: Usar la función result() para obtener un valor de una propiedad usando una ruta.

// ruta ~= path

const _ = require('lodash');

let objeto = {
    x: [
        {y: {
            a: 10,
            b: 20,
            c: {
                d: 30
            }
        }}
    ]
}

console.log(objeto);

console.log();

let resultado = _.result(objeto, 'x[0]');
console.log(resultado);

console.log();

resultado = _.result(objeto, 'x[0].y.b');
console.log(resultado); // 20

console.log();

resultado = _.result(objeto, 'x[0].y.c');
console.log(resultado); // 20

console.log();

resultado = _.result(objeto, 'x[0].y.c.d');
console.log(resultado); // 20

console.log();

resultado = _.result(objeto, 'x[0].y.m', 'NO_EXISTE');
console.log(resultado); // 20
