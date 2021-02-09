// Ejercicio 253: Demostrar el uso básico de la función plant().

const _ = require('lodash');

function cubo(numero) {
    return Math.pow(numero, 3);
}

let numeros = [1, 2, 3];

let wrapper = _(numeros).map(cubo);

let otroWrapper = wrapper.plant([4, 5, 6]);

console.log(wrapper.value());    // [1, 8, 27]
console.log(otroWrapper.value());   // [64, 125, 216]
