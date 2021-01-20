// Ejercicio 229: Función omit() para omitir y extraer las propiedades únicas de un objeto.

const _ = require('lodash');

let objeto = {
    a: 1,
    b: 2,
    c: 3
}

let propiedades = ['a', 'b'];

let resultado = _.omit(objeto, propiedades);
console.log(resultado); // {c: 3}
