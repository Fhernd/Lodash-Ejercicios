// Ejercicio 247: Crear una demostración del uso básico de la función thru().

const _ = require('lodash');

let lenguaje = '   JavaScript   ';

let resultado = _(lenguaje).chain().trim()
                .thru(function(valor) {
                    return [valor]
                }).value();

console.log(resultado); // ['JavaScript']

console.log();

resultado = _(lenguaje).chain().trim()
                .thru(function(valor) {
                    return [...valor]
                }).value();

console.log(resultado); // ['J', 'a',... , 't']
