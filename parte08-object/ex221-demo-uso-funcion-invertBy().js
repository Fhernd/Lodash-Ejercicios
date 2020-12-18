// Ejercicio 221: Demostrar el uso de la función invertBy() para invertir un objeto por grupos de valores.

// {a: 1, b: 2, c: 1, d: 2, e: 3}
// {1: ['a', 'b'], 2: ['b', 'd'], 3: ['e']}

const _ = require('lodash');

let objeto = {a: 1, b: 2, c: 1, d: 2, e: 3};
console.log(objeto);

console.log();

let objetoInvertido = _.invertBy(objeto);
console.log(objetoInvertido);

console.log();

objetoInvertido = _.invertBy(objeto, function(valor) {
    return `Grupo${valor}`;
});
console.log(objetoInvertido);
