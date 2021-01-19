// Ejercicio 228: Usar la función mergeWith() para fusionar varios objetos acorde a un patrón específico.

const _ = require('lodash');

let objeto1 = {
    x: [10], y: [20]
};

let objeto2 = {
    x: [30], y: [40]
};

let objeto3 = _.mergeWith(objeto1, objeto2, function(origen, destino) {
    if (_.isArray(destino)) {
        return origen.concat(destino);
    }
});

console.log(objeto3);
