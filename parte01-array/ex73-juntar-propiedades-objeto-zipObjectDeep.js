// Ejercicio 73: Demostrar el uso de la función zipObjectDeep() para juntar propiedades de un objeto.

const _ = require('lodash');

let propiedadesObjeto = ['a.b[0].c', 'a.b[1].d'];
let datosObjeto = [2, 3];

let objeto = _.zipObjectDeep(propiedadesObjeto, datosObjeto);

console.log(objeto);

console.log(objeto.a.b[0]);
console.log();
console.log(objeto.a.b[1]);
