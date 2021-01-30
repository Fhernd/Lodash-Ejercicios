// Ejercicio 245: Usar la función chain() para efectuar operaciones sucesivas sobre un conjunto de datos.

const _ = require('lodash');

let usuarios = [
    {id: 1001, nombre: 'Alejandra', edad: 37},
    {id: 1003, nombre: 'Pedro', edad: 43},
    {id: 1002, nombre: 'Irlesa', edad: 19}
];

let personaMasJoven = _.chain(usuarios)
    .sortBy('edad')
    .map((u) => {return `La edad de ${u.nombre} es ${u.edad} (persona más joven).`})
    .head()
    .value();

console.log(personaMasJoven);
