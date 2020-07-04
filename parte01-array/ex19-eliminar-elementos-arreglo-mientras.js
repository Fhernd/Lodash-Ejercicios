// Ejercicio 19: Eliminar elementos de un arreglo mientras se cumpla una condición con dropWhile().

const _ = require('lodash');

let programas = [
   {nombre: 'Visual Studio', instalado: false},
   {nombre: 'Eclipse IDE', instalado: false},
   {nombre: 'Notepad++', instalado: true},
   {nombre: 'Visual Studio Code', instalado: true},
   {nombre: 'MySQL Workbench', instalado: true}
];

let resultado = _.dropWhile(programas, (p) => !p.instalado);
console.log('Cantidad de programas instalados:', resultado.length);
console.log(resultado);

console.log();

resultado = _.dropWhile(programas, ['instalado', false]);
console.log('Cantidad de programas instalados:', resultado.length);
console.log(resultado);

console.log();

resultado = _.dropWhile(programas, {nombre: 'Visual Studio', instalado: false});
console.log('Cantidad de programas instalados:', resultado.length);
console.log(resultado);
