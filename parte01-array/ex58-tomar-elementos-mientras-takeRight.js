// Ejercicio 58: Tomar elementos de un arreglo mientras que se cumpla una condición con takeWhile().

const _ = require('lodash');

let estudiantes = [{nombre: 'Daniela', activo: true}, {nombre: 'Alex', activo: true}, {nombre: 'Edward', activo: false}];

console.log(`Cantidad de elementos del arreglo "estudiantes": ${estudiantes.length}`);
console.log(estudiantes);

console.log();

let estudiantesActivos = _.takeWhile(estudiantes, (e) => e.activo);
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);

console.log();

estudiantes.push({nombre: 'Sonia', activo: true});

estudiantesActivos = _.takeWhile(estudiantes, (e) => e.activo);
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);

console.log();

let resultado = _.takeWhile(estudiantes, {nombre: 'Daniela', activo: true});
console.log(`Cantidad de elementos del arreglo "resultado": ${resultado.length}`);
console.log(resultado);

console.log();

resultado = _.takeWhile(estudiantes, ['activo', true]);
console.log(`Cantidad de elementos del arreglo "resultado": ${resultado.length}`);
console.log(resultado);

console.log();

resultado = _.takeWhile(estudiantes, 'activo');
console.log(`Cantidad de elementos del arreglo "resultado": ${resultado.length}`);
console.log(resultado);

console.log();

function predicado(e) {
    return e.activo;
}

estudiantesActivos = _.takeWhile(estudiantes, predicado);
console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);

console.log();

estudiantesActivos = _.takeWhile(estudiantes, function (e) {
    return e.activo;
});

console.log(`Cantidad de elementos del arreglo "estudiantesActivos": ${estudiantesActivos.length}`);
console.log(estudiantesActivos);
