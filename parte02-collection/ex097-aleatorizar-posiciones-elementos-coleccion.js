// Ejercicio 97: Aleatorizar las posiciones (barajar) de los elementos de una colección con shuffle().

// shuffle() ~ aleatoriar ~ barajar
// ['a', 'b', 'c'] => shuffle([...]) => ['b', 'a', 'c']

const _ = require('lodash');

let letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras);

console.log();

let letrasAleatorizadas = _.shuffle(letras);
console.log(letrasAleatorizadas);
