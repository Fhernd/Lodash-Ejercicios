// Ejercicio 124: Demostrar el uso básico de la función wrap().

const _ = require('lodash');

let generarDiv = _.wrap(_.escape, function(fn, contenido) {
    return `<div>${fn(contenido)}</div>`;
});

let resultado = generarDiv('¡Lodash es tremendo!'); // <div>¡Lodash es tremendo!</div>

console.log(resultado);
