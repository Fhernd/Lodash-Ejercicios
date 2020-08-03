// Ejercicio 84: Iterar cada elemento de un arreglo con la función forEachRight().

// forEach() => izuierda a derecha ->
// forEachRight() => derecha a izquierda <-

const _ = require('lodash');

let numeros = [2, 3, 5, 7, 11, 13];

console.log(`Uso función forEach():`);
_.forEach(numeros, (n) => {
    console.log(n);
});

console.log();

console.log(`Uso función forEachRight():`);
_.forEachRight(numeros, (n) => {
    console.log(n);
});
