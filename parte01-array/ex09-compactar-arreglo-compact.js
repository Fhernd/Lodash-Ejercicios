// Ejercicio 9: Compactar (remover) los valores nulos (o equivalentes) de un arreglo con compact().

// false ~= null, 0, '', "", ``, undefined, NaN

const _ = require('lodash');

let valores = [1, 0, {nombre: 'Edward', edad: null}, -10, undefined, 1/0, '', "", 'JavaScript', ``, null, NaN, [5, null, undefined, '']]

console.log('Cantidad de elementos del arreglo `valores`:', valores.length);
console.log(valores);

console.log();

let resultado = _.compact(valores)

console.log('Cantidad de elementos del arreglo `resultado`:', resultado.length);
console.log(resultado);
