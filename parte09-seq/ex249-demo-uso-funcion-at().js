// Ejercicio 249: Usar la función at() para obtener valores de un objeto desde un wrapper.

const _ = require('lodash');

let objeto = {
    x: [
        {y: {z: 10}},
        20
    ]
}

console.log(objeto);

console.log();

let wrapper = _(objeto);

let resultado = wrapper.at(['x[0].y.z', 'x[1]']).value();
console.log(resultado); // [10, 20]
