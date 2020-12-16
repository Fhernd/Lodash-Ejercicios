// Ejercicio 218: Usar la función has() para validar si un objeto tiene una propiedad particular.

const _ = require('lodash');

let computador = {
    id: 1001,
    marca: 'MSi',
    modulosRam: [{
        socalo: 0,
        capacidad: 16
    }, {
        socalo: 1,
        capacidad: 16
    }],
    cpu: {
        fabricante: {
            nombre: 'Intel',
            pais: 'USA'
        },
        frecuencia: '3.4GHz'
    }
}

console.log(_.has(computador, 'cpu'));  // true
console.log(_.has(computador, 'cpu.arquitectura'));  // false
console.log(_.has(computador, 'identificador'));  // false
console.log(_.has(computador, 'id'));  // true
console.log(_.has(computador, ['id', 'identificador']));  // false
