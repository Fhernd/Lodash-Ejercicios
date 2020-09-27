// Ejercicio 144: Demostrar el uso de la función isEqualWith() para comparar elementos de datos.

const _ = require('lodash');

let computador1 = {
    id: 1001,
    marca: 'MSi'
};

let computador2 = {
    id: 1999,
    marca: 'HP'
};

function comparar(objeto1, objeto2) {
    if (objeto1.id >= 1000 && objeto1.id <= 2000 && objeto2.id >= 1000 && objeto2.id <= 2000) {
        return true;
    }
}

let resultado = _.isEqualWith(computador1, computador2, comparar);
console.log(resultado);

console.log();

let computador3 = {
    id: 5001,
    marca: 'Dell'
};

resultado = _.isEqualWith(computador1, computador3, comparar);
console.log(resultado); // false
