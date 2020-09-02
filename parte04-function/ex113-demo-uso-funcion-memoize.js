// Ejercicio 113: Realizar demostración básica de la función memoize() para la función Fibonacci().

const _ = require('lodash');

function fibonacci(n) {
    if (n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let memorizacionFibonacci = _.memoize(fibonacci);

console.log(memorizacionFibonacci(7));
console.log(memorizacionFibonacci(11));
console.log(memorizacionFibonacci(13));
console.log(memorizacionFibonacci(17));
console.log(memorizacionFibonacci(29));
console.log(memorizacionFibonacci(37));

console.log();

console.log(memorizacionFibonacci.cache.__data__.hash.__data__);

console.log();

console.log(memorizacionFibonacci(7));
console.log(memorizacionFibonacci(11));
console.log(memorizacionFibonacci(13));
console.log(memorizacionFibonacci(17));
console.log(memorizacionFibonacci(29));
console.log(memorizacionFibonacci(37));
