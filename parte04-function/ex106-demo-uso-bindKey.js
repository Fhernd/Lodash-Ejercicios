// Ejercicio 106: Demostrar el uso de la función bindKey() para asociar datos y objeto de invocación.

const _ = require('lodash');

let persona = {
    id: 1001,
    nombre: 'Daniela',
    saludar: function(saludo, puntuacion) {
        return `${saludo}, ${this.nombre}${puntuacion}`;
    }
};

let intermediarioSaludar = _.bindKey(persona, 'saludar', 'Hola');

console.log(intermediarioSaludar('!'));

// Hola, Daniela!
