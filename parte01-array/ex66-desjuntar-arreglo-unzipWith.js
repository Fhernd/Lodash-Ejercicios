// Ejercicio 66: Desjuntar los elementos de un arreglo y realizar una operación con la función unzipWith().

const _ = require('lodash');

let datos = [[1, 10, 100], [2, 20, 200]];
console.log(datos);

console.log();

let resultado = _.unzipWith(datos, _.add);
console.log(resultado); // [3, 30, 300]
