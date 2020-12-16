// Ejercicio 217: Usar la función get() para acceder con una ruta a los valores de los atributos de un objeto.

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

console.log(computador);

console.log();

console.log(_.get(computador, 'cpu.frecuencia'));   // 3.4GHz
console.log(_.get(computador, 'cpu.fabricante.nombre'));   // Intel
console.log(_.get(computador, 'cpu.fabricante.pais'));   // USA

console.log();

console.log(_.get(computador, 'modulosRam[1].socalo')); // 1

console.log();

console.log(_.get(computador, 'modulosRam[2].socalo', 'NO_DISPONIBLE'));    // NO_DISPONIBLE
console.log(_.get(computador, 'ssd', 'NO_DISPONIBLE'));  // NO_DISPONIBLE
