// Ejercicio 111: Demostrar el uso de la función delay() para posponer la ejecución de una función.

const _ = require('lodash');

function mostrarMensaje(texto, nombre) {
    console.log(texto);
    console.log(nombre);
}

_.delay(mostrarMensaje, 5000, 'Lodash es una librería', 'Daniela');
