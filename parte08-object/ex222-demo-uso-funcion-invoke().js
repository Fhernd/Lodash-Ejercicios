// Ejercicio 222: Usar la función invoke() para aplicar un método sobre una ruta de un objeto.

const _ = require('lodash');

let objeto = {
    a: 1,
    b: {c: 2, d: 3},
    e: 'JavaScript',
    f: [2, 3, 5, 7, 11],
    g: {
        h: [1, 3, 5, 9, 11]
    }
}

console.log(objeto);

console.log();

console.log(_.invoke(objeto, 'b.hasOwnProperty', 'c')); // true
console.log(_.invoke(objeto, 'b.hasOwnProperty', 'z')); // false

console.log();

console.log(_.invoke(objeto, 'e.toLowerCase'));
console.log(_.invoke(objeto, 'e.toUpperCase'));
console.log(_.invoke(objeto, 'e.substring', 4)); // Script
console.log(_.invoke(objeto, 'e.includes', 'java')); // false
console.log(_.invoke(objeto, 'e.includes', 'Java')); // false

console.log();

console.log(_.invoke(objeto, 'f.slice', 1, 4)); // [3, 5, 7]
console.log(_.invoke(objeto, 'g.h.slice', 1, 4)); // [3, 5, 9]
