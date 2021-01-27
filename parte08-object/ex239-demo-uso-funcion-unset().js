// Ejercicio 239: Remover una propiedad de un objeto utilizando la función unset().

const _ = require('lodash');

let objeto = {
    x: [
        {y: {z: 10, w: 20}}
    ]
}

console.log(objeto);

console.log();

_.unset(objeto, 'x[0].y.w');

console.log(objeto);
console.log(objeto.x[0].y.w);  // undefined
console.log(objeto.x[0].y.z);  // 10
