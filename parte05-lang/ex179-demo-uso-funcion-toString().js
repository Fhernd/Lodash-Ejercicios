// Ejercicio 179: Usar la función toString() para convertir un valor en su representación de texto.

const _ = require('lodash');

console.log(_.toString('JavaScript'));  // 'JavaScript'
let lenguaje = 'JavaScript'
console.log(_.toString(lenguaje));  // 'JavaScript'

console.log();

console.log(_.toString(1.1));   // '1.1'
console.log(typeof _.toString(1.1));   // string

console.log(_.toString(10));   // '10'
console.log(typeof _.toString(10));   // string

console.log();

let persona = {
    id: 1001,
    nombre: 'Daniela Ortiz',
    email: 'danny@mail.co'
}
console.log(_.toString(persona));
console.log(Object.prototype.toString.call(persona));
console.log(persona);

console.log();

console.log(_.toString(null));  // ''
console.log(_.toString(null).length); // 0
console.log(_.toString(undefined)); // ''
console.log(_.toString(undefined).length); // 0

console.log();

console.log(_.toString([1, 2, 3]));
console.log([1, 2, 3]);
