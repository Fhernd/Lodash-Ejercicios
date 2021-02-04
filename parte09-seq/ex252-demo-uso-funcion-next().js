// Ejercicio 252: Usar la función next() para iterar una colección de datos.

const _ = require('lodash');

let numeros = [2, 3, 5, 7];

let wrapper = _(numeros);

console.log(wrapper.next());
console.log(wrapper.next());
console.log(wrapper.next());
console.log(wrapper.next());
console.log(wrapper.next());    // {done: true, value: undefined}
