// Ejercicio 209: Encontrar un objeto que cumpla una condición con la función findKey().

const _ = require('lodash');

let computadores = {
    1001: {marca: 'MSi', procesador: 'Intel Core i7', ram: 32, ssd: 720},
    1002: {marca: 'Apple', procesador: 'Intel Core i5', ram: 16, ssd: 500},
    1003: {marca: 'Clone', procesador: 'Intel Core i7', ram: 128, ssd: 2000}
};

let resultado = _.findKey(computadores, function(c) {
    return c.ram < 32;
});
console.log(resultado);

console.log();

resultado = _.findKey(computadores, {ram: 32});
console.log(resultado);

console.log();

resultado = _.findKey(computadores, ['ram', 32]);
console.log(resultado);
