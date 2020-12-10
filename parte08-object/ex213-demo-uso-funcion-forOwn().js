// Ejercicio 213: Iterar a través de los atributos propios de un objeto con la función forOwn().

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
