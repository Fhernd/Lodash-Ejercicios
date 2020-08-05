// Ejercicio 99: Validar que al menos un elemento de una colección cumpla un predicado (condición).

const _ = require('lodash');

let datos = [null, '', "", undefined, ' '];

// true ~= cadena con al menos un carácter, {}, 1, 1.9, 0.7, etc.

let resultado = _.some(datos);
console.log(resultado); // true

console.log();

let programas = [
    {id: 2001, nombre: 'Visual Studio Code', instalado: true},
    {id: 2002, nombre: 'Sublime', instalado: false},
    {id: 2003, nombre: 'Dreamweaver', instalado: false},
    {id: 2004, nombre: 'NetBeans IDE', instalado: true}
];

resultado = _.some(programas, 'instalado');
console.log(resultado);

console.log();

programas[0].instalado = false;
programas[3].instalado = false;

resultado = _.some(programas, 'instalado');
console.log(resultado);

console.log();

resultado = _.some(programas, ['instalado']);
console.log(resultado);
