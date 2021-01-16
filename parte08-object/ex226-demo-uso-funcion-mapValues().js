// Ejercicio 226: Usar la función mapValues() para modificar los valores de un objeto.

const _ = require('lodash');

let usuarios = {
    ng: {
        nombre: 'Angela',
        edad: 39
    },
    sonni: {
        nombre: 'Sonia',
        edad: 31
    }
}

console.log(usuarios);

console.log();

let resultado = _.mapValues(usuarios, (u) => u.edad);
console.log(resultado); // {ng: 39, sonni: 31}

console.log();

resultado = _.mapValues(usuarios, 'edad');
console.log(resultado); // {ng: 39, sonni: 31}
