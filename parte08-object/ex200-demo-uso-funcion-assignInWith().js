// Ejercicio 200: Demostrar el uso básico de la función assignInWith().

const _ = require('lodash');

let objeto1 = {
    propiedad1: 100
};

let objeto2 = {
    propiedad2: 200
};

function personalizador(dato1, dato2) {
    return _.isUndefined(dato1) ? dato2 : dato1;
}

let objeto = _.assignInWith(objeto1, objeto2, personalizador);

console.log(objeto);
