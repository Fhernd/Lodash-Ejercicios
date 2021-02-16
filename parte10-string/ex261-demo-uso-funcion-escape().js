// Ejercicio 261: Demostrar el uso de la función escape() para convertir caracteres a entidades HTML.

const _ = require('lodash');

// & => &amp;
// < => &lt;
// á => &aacute;

let html = '<p class="contenido">JavaScript & Python son lenguajes de programación</p>';
console.log(html);

console.log();

let resultado = _.escape(html);
console.log(resultado);
