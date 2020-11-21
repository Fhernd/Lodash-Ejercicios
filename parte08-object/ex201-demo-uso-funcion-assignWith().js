// Ejercicio 201: Demostrar el uso de la función assignWith().

const _ = require('lodash');

let objeto1 = {
    numero: 100
};

console.log(objeto1);

console.log();

let resultado = _.assignWith(objeto1, {cadena: 'ABC'}, function(o1, o2) {
    return _.isUndefined(o1) ? o2 : o1;
});

console.log(resultado); // {numero: 100, cadena: 'ABC'}
