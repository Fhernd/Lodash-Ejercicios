// Ejercicio 312: Demostrar el uso básico de la función runInContext().

const _ = require('lodash');

_.mixin({'valorPi': _.constant('3.1415')});

let funcion = _.runInContext();
funcion.mixin({'valorE': _.constant('2.7172')});

let valor = _.isFunction(_.valorPi);

console.log(valor); // true
