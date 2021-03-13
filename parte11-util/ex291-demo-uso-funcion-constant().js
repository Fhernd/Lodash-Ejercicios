// Ejercicio 291: Demostrar el uso de la función constant() para retornar un valor específico.

const _ = require('lodash');

let objeto = {
    a: 10,
    b: 20
}

let objetos = _.times(5, _.constant(objeto));

objetos.forEach(o => {
    console.log(o);
});
