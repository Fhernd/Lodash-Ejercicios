// Ejercicio 37: Obtener el enésimo elemento de un arreglo con la función nth().

const _ = require('lodash');        

let letras = ['A', 'B', 'C', 'D', 'E'];

let n = 0;

let letra = _.nth(letras, n);

console.log(`La letra que se encuentra en el índice ${n} es ${letra}.`);

console.log();

letra = _.nth(letras);
console.log(`La letra que se encuentra en el índice ${n} es ${letra}.`);

console.log();

n = 2;
letra = _.nth(letras, n);
console.log(`La letra que se encuentra en el índice ${n} es ${letra}.`);

console.log();

n = 4;
letra = _.nth(letras, n);
console.log(`La letra que se encuentra en el índice ${n} es ${letra}.`);

console.log();

n = -1;
letra = _.nth(letras, n);
console.log(`La letra que se encuentra en el índice ${n} es ${letra}.`);

console.log();

n = -2;
letra = _.nth(letras, n);
console.log(`La letra que se encuentra en el índice ${n} es ${letra}.`);

console.log();

n = -letras.length;
letra = _.nth(letras, n);
console.log(`La letra que se encuentra en el índice ${n} es ${letra}.`);
