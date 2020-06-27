// Ejercicio 10: Compactar (remover) los valores nulos (o equivalentes) de un arreglo con compact().

// false ~= null, 0, '', "", ``, undefined, NaN, false, not true

const _ = require('lodash');

let valores = [1, 0, false, {nombre: 'Daniela', email: null}, '', "", ``, 'JavaScript', '           ', NaN, null, [5, null, undefined, '', NaN, false, 0]]

console.log(`Cantidad de elementos del arreglo valores: ${valores.length}`);
console.log(valores);

console.log();

let resultado = _.compact(valores)

console.log(`Cantidad de elementos del arreglo resultado: ${resultado.length}`);
console.log(resultado);
