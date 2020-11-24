// Ejercicio 203: Demostrar el uso de la función create() para crear una jerarquía de herencia.

const _ = require('lodash');

function Figura() {
    this.x = 0;
    this.y = 0;
}

function Circulo() {
    Figura.call(this);
}

function Rectangulo() {
    Figura.call(this);
}

Circulo.prototype = _.create(Figura.prototype, {'constructor': Circulo});
Rectangulo.prototype = _.create(Figura.prototype, {'constructor': Rectangulo});

let circulo = new Circulo;
console.log(circulo);

console.log();

console.log(circulo instanceof Circulo);    // true
console.log(circulo instanceof Figura);    // true
