// Ejercicio 121: Demostrar el uso de la función spread() para propagar los argumentos de una función.

const _ = require('lodash');

function saludar(saludo, nombre) {
    return `${saludo}, ${nombre}`;
}

console.log(saludar('Hola', 'Daniela'));    // Hola, Daniela

console.log();

let saludar2 = _.spread(saludar);

console.log(saludar2(['Hola', 'Daniela'])); // Hola, Daniela
