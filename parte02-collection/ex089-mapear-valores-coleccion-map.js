// Ejercicio 89: Usar la función map() para crear un arreglo de valores transformados.

// [2, 3, 5, 7] => [4, 9, 25, 49]

const _ = require('lodash');

let primos = [2, 3, 5, 7];
console.log(primos);

console.log();

let primosCuadrados = _.map(primos, function(p) {
    return p * p;
});

console.log(primosCuadrados);

console.log();

primosCuadrados = _.map(primos, (p) => Math.pow(p, 2));
console.log(primosCuadrados);

console.log();

function elevarAlCuadrado(n) {
    return n * n;
}

let primosObjeto = {'primero': 2, 'segundo': 3, 'tercero': 5, 'cuarto': 7};
primosCuadrados = _.map(primosObjeto, elevarAlCuadrado);
console.log(primosCuadrados);

console.log();

let personas = [
    {id: 1001, nombre: 'Daniela'},
    {id: 1002, nombre: 'Edward'}
];

let ids = _.map(personas, 'id');
console.log(ids);
