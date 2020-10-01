// Ejercicio 151: Demostrar el uso de la función isMatch() para validar si un objeto se parece a otro.

const _ = require('lodash');

let persona1 = {
    id: '1001',
    nombre: 'Edward',
    carrera: 'Técnico de sistemas'
};

let persona2 = {
    id: '1002',
    carrera: 'Técnico de sistemas'
};

let resultado = _.isMatch(persona1, persona2);
console.log(resultado); // false

console.log();

let persona3 = {
    id: '1001',
    carrera: 'Técnico de sistemas'
};

resultado = _.isMatch(persona1, persona3);
console.log(resultado); // true
