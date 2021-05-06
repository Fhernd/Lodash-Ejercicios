// Ejercicio 319: Usar la función toPath() para obtener un arreglo de la ruta de acceso a valores de un objeto.

const _ = require('lodash');

let objeto = {
    w: [
        {
            x: {y: 100}
        }
    ]
}

let ruta = 'w[0].x.y';
let resultado = _.get(objeto, ruta);
console.log(resultado); // 100

console.log();

let partesRuta = _.toPath(ruta);
console.log(partesRuta);
console.log(partesRuta.length); // 4
