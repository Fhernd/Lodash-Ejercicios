// Ejercicio 224: Usar la función keysIn() para obtener el conjunto de nombres de propiedades de un objeto.

const _ = require('lodash');

let lenguaje = 'JavaScript';

console.log(lenguaje[0]);
console.log(lenguaje[1]);
console.log(lenguaje[2]);

console.log();

let nombresPropiedades = _.keysIn(lenguaje);
console.log(nombresPropiedades);

console.log();

nombresPropiedades.forEach((p) => {
    console.log(lenguaje[p]);
});
