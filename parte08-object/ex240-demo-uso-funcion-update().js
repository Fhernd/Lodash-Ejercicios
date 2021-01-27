// Ejercicio 240: Cambiar el valor de una propiedad con la función update() usando una ruta.

const _ = require('lodash');

let objeto = {
    x: [
        {y: {z: 10}}
    ]
}

console.log(objeto);
console.log(objeto.x[0].y.z);   // 10

console.log();

_.update(objeto, 'x[0].y.z', function(v) {
    return v * v;
});

console.log(objeto);
console.log(objeto.x[0].y.z);   // 100
