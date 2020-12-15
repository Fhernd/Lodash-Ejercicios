// Ejercicio 215: Demostrar el uso básico de la función functions().

const _ = require('lodash');

function Persona() {
    this.nombre = _.constant('Edward');
    this.apellido = _.constant('Ordoñez');
}

let persona = new Persona();

let resultado = _.functions(persona);
console.log(resultado);
