// Ejercicio 283: Usar la función unescape() para convertir entidades HTML a cadenas legibles.

const _ = require('lodash');

let htmlEntidades = '&lt;p class=&quot;contenido&quot;&gt;JavaScript &amp; Python son lenguajes de programación&lt;/p&gt;';
console.log(htmlEntidades);

console.log();

let html = _.unescape(htmlEntidades);
console.log(html);
