// Ejercicio 220: Usar la función invert() para invertir propiedades y valores de un objeto.

// {a: 1, b: 2} => {1: a, 2: b}

const _ = require('lodash');

let objeto = {a: 1, b: 2};
console.log(objeto);

console.log();

let objetoInvertido = _.invert(objeto);
console.log(objetoInvertido);
