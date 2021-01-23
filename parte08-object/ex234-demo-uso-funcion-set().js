// Ejercicio 234: Cambiar el valor de una propiedad de un objeto con la función set() usando una ruta.

const _ = require('lodash');

let objeto = {
    x: 10,
    y: [
        {z: {a: 20, b: {c: 30}}}
    ]
}

console.log(objeto);

console.log();

console.log(_.result(objeto, 'x')); // 10

console.log();

_.set(objeto, 'x', 100);
console.log(_.result(objeto, 'x')); // 100

console.log();

console.log(_.result(objeto, 'y[0].z.a')); // 20

console.log();

_.set(objeto, 'y[0].z.a', 200);
console.log(_.result(objeto, 'y[0].z.a')); // 200
