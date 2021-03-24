// Ejercicio 301: Usar la función mixin() para copiar propiedades entre objetos.

const _ = require('lodash');

function extraerVocales(texto) {
    return _.filter(texto, (c) => /[AEIOUaeiou]/i.test(c));
}

_.mixin({vocales: extraerVocales}, {chain: false});

let resultado = _('Angela').vocales();
console.log(resultado); // ['e', 'a']
