// Ejercicio 214: Iterar de derecha a izquierda los atributos propios de un objeto con la función forOwnRight().

const _ = require('lodash');

function Persona(documento, nombreCompleto, edad) {
    this.documento = documento;
    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
}

Persona.prototype.nacionalidad = 'Colombiana';

let daniela = new Persona(123456789, 'Daniela Ordoñez', 29);
console.log(daniela);

console.log();

_.forOwn(daniela, (v, k) => {
    console.log(k);
});

console.log();

_.forOwnRight(daniela, (v, k) => {
    console.log(k);
});
