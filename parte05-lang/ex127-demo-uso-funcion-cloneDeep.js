// Ejercicio 127: Demostrar el uso de la función cloneDeep() para clonar un dato de forma recursiva.

const _ = require('lodash');

let portatil = {
    id: 2001,
    marca: 'MSi',
    procesador: 'Intel Core i7',
    ram: '16GB'
};

let escritorio = {
    id: 2002,
    marca: 'Dell',
    procesador: 'Intel Core i5',
    ram: '16GB'
};

let computadores = [portatil, escritorio];
console.log(computadores);

console.log();

let copiaComputadores = _.cloneDeep(computadores);
console.log(copiaComputadores);

console.log();

console.log(computadores[0] === copiaComputadores[0]);  // false
