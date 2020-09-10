// Ejercicio 129: Demostrar el uso básico de la función cloneWith().

// cloneWith() ~= cloneDeepWith()

const _ = require('lodash');

function personalizadorCopia(dato) {
    if (_.isElement(dato)) {
        return dato.cloneNode(true);
    }
}

let copiaElementos = _.cloneWith(document.body, personalizadorCopia);

console.log(copiaElementos === document.body);  // false
console.log(copiaElementos.nodeName);   // 'body'
console.log(copiaElementos.childNodes.length);  // n
