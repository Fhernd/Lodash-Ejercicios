// Ejercicio 57: Tomar elementos de un arreglo mientras que se cumpla una condición con takeRightWhile().

const _ = require('lodash');

let estudiantes = [{nombre: 'Sonia', activo: true}, {nombre: 'Edward', activo: false}, {nombre: 'Daniela', activo: true}, {nombre: 'Alex', activo: true}];

console.log(`Cantidad de elementos del arreglo "estudiantes": ${estudiantes.length}`);
console.log(estudiantes);

console.log();

let estudiantesActivos = _.takeRightWhile(estudiantes, (e) => e.activo);
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);

console.log();

estudiantesActivos = _.takeRightWhile(estudiantes, {nombre: 'Alex', activo: true});
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);

console.log();

estudiantesActivos = _.takeRightWhile(estudiantes, ['activo', true]);
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);

console.log();

estudiantesActivos = _.takeRightWhile(estudiantes, 'activo');
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);

console.log();

estudiantesActivos = _.takeRightWhile(estudiantes, ['activo', false]);
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);

console.log();

estudiantesActivos = _.takeRightWhile(estudiantes, (e) => !e.activo);
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);
