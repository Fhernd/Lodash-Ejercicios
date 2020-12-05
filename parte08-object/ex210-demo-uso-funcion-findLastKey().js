// Ejercicio 210: Encontrar el último objeto que cumpla una condición con la función findLastKey().

const _ = require('lodash');

let computadores = {
    1001: {marca: 'MSi', procesador: 'Intel Core i7', ram: 32, ssd: 720},
    1002: {marca: 'Apple', procesador: 'Intel Core i5', ram: 16, ssd: 500},
    1003: {marca: 'Clone', procesador: 'Intel Core i7', ram: 128, ssd: 2000}
};

let resultado = _.findLastKey(computadores, function(c) {
    return c.ram == 16;
});
console.log(resultado);
console.log(computadores[resultado]);

console.log();

resultado = _.findLastKey(computadores, function(c) {
    return c.procesador.includes('Core i7');
});
console.log(resultado);
console.log(computadores[resultado]);

console.log();

resultado = _.findLastKey(computadores, {ssd: 500});
console.log(resultado);
console.log(computadores[resultado]);

console.log();

resultado = _.findLastKey(computadores, (c) => c.ram == 16);
console.log(resultado);
console.log(computadores[resultado]);
