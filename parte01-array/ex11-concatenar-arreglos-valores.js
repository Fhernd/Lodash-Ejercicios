// Ejercicio 11: Crear un arreglo nuevo a partir de la concatenación de arreglos o valores con la función concat().

const _ = require('lodash');

let primos = [2];

console.log(`Cantidad de elementos del arreglo primos: ${primos.length}`);
console.log(primos);

console.log();

let variosPrimos = _.concat(primos, 3, 5, [7, 11], 13, 17, 19, [[23, 29, 31]], 37, 41, 43);

console.log(`Cantidad de elementos del arreglo primos: ${variosPrimos.length}`);
console.log(variosPrimos);
