// Ejercicio 120: Demostración básica del uso de la función rest().

const _ = require('lodash');

function saludar(saludo, nombres) {
    return `${saludo}, ${nombres.join(', ')}`;
}

let saludarAlternativo = _.rest(saludar);

console.log(saludarAlternativo('Hola', 'Oliva', 'Juan', 'Daniela'));
console.log(saludarAlternativo('Hola', 'Oliva', 'Juan', 'Daniela', 'Edward', 'Germán'));
