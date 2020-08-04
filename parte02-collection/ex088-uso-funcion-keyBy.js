// Ejercicio 88: Crear un objeto con propiedades derivadas de una colección de objetos con la función keyBy().

const _ = require('lodash');

// awsd

let teclas = [
    {direccion: 'izquierda', codigo: 97},
    {direccion: 'arriba', codigo: 119},
    {direccion: 'abajo', codigo: 115},
    {direccion: 'derecha', codigo: 100}
];

// {'a': {direccion: 'izquierda', codigo: 97}, 'w': {direccion: 'arriba', codigo: 119}, ...}

let resultado = _.keyBy(teclas, (t) => String.fromCharCode(t.codigo));

console.log(resultado);
