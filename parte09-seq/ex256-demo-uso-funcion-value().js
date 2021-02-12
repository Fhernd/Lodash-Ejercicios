// Ejercicio 256: Demostrar el uso básico de la función value() sobre un wrapper de Lodash.

const _ = require('lodash');

let primos = [2, 3, 5, 7];

let wrapper = _(primos);

function cuadrado(primo) {
    return primo * primo;
}

console.log(primos);
console.log(wrapper.value());

console.log();

wrapper = wrapper.map(cuadrado);

console.log(primos);
console.log(wrapper.value());
