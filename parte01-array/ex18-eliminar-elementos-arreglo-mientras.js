// Ejercicio 18: Eliminar elementos de un arreglo mientras se cumpla una condición con dropRightWhile().

 const _ = require('lodash');

 let programas = [
    {nombre: 'Notepad++', instalado: true},
    {nombre: 'Visual Studio Code', instalado: true},
    {nombre: 'Eclipse IDE', instalado: false},
    {nombre: 'MySQL Workbench', instalado: true},
    {nombre: 'Visual Studio', instalado: false}
 ];

let resultado = _.dropRightWhile(programas, (p) => !p.instalado);
console.log(resultado);

console.log();

resultado = _.dropRightWhile(programas, {nombre: 'Visual Studio', instalado: false});
console.log(resultado);

console.log();

resultado = _.dropRightWhile(programas, ['instalado', false]);
console.log(resultado);
