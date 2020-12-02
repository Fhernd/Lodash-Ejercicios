// Ejercicio 208: Usar la función assignIn() para crear un objeto derivado a partir de otros objetos.

const _ = require('lodash');

function Clase1() {
    this.x = 100;
}

function Clase2() {
    this.y = 200;
}

Clase1.prototype.a = 300;
Clase2.prototype.b = 400;

let objeto1 = new Clase1();
let objeto2 = new Clase2();

console.log(objeto1);
console.log(objeto2);

console.log();

let objetoDerivado = _.assignIn({m: 500}, objeto1, objeto2);
console.log(objetoDerivado);
