// Ejercicio 96: Obtener varios elementos aleatorios desde una colección por medio de la función sampleSize().

const _ = require('lodash');

// sample(): obtiene un (1) elemento aleatorio
// sampleSize(): obtiene varios elementos aleatorios

let primos = [2, 3, 5, 7, 11, 13];

let cantidad = 3;
let primosAleatorios = _.sampleSize(primos, cantidad);
console.log(primosAleatorios);

console.log();

console.log(_.sampleSize(primos));

console.log();

cantidad = primos.length + 5;
primosAleatorios = _.sampleSize(primos, cantidad)
console.log(primosAleatorios);
