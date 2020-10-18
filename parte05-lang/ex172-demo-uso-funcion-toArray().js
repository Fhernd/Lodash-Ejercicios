// Ejercicio 172: Usar la función toArray() para convertir un valor en un arreglo.

const _ = require('lodash');

let persona = {
    id: 1001,
    nombre: 'Daniela',
    email: 'danny@mail.co'
}

let arregloValores = _.toArray(persona);
console.log(arregloValores);

console.log();

let lenguaje = 'JavaScript';
let arregloCaracteres = _.toArray(lenguaje);
console.log(arregloCaracteres);

console.log();

console.log(_.toArray(5));  // []
console.log(_.toArray(null));  // []
