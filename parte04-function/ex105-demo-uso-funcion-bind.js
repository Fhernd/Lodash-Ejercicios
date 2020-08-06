// Ejercicio 105: Demostrar el uso de la función bind() para asociar datos y objeto de invocación.

const _ = require('lodash');

function saludar(saludo, puntuacion) {
    console.log(this);
    return `${saludo}, ${this.nombre}${puntuacion}`;
}

let persona = {id: 1001, nombre: 'Daniela', edad: 29};

let intermediarioSaludar = _.bind(saludar, persona, 'Hola');

console.log(intermediarioSaludar('!'));
