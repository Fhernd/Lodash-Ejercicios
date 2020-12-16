// Ejercicio 219: Usar la función hasIn() para validar si un objeto tiene una propiedad particular.

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

console.log(_.hasIn(computador, 'id')); // true
console.log(_.hasIn(computador, 'identificador')); // false
console.log(_.hasIn(computador, 'cpu.frecuencia')); // true
console.log(_.hasIn(computador, 'cpu.Frecuencia')); // false
console.log(_.hasIn(computador, 'cpu.fabricante.pais')); // true
