// Ejercicio 287: Demostrar el uso de la función attempt() para intentar ejecutar una función.

const _ = require('lodash');

let elementos = _.attempt(function(selector) {
    return document.querySelectorAll(selector);
}, 'etiqueta');

console.log(elementos);

console.log();

if (_.isError(elementos)) {
    elementos = [];
    console.log('Contenido de la variable elementos:', elementos);
} else {
    console.log('No se pudo ejecutar la función.');
    console.log('Causa del error:');
    console.log(elementos);
}

console.log();

let resultado = _.attempt(function(a, b) {
    return a + b;
}, 2, 3);

if (_.isError(resultado)) {
    console.log('La operación que se intentó ejecutar ha fallado.');
} else {
    console.log(resultado);
}
