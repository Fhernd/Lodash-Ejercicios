// Ejercicio 216: Demostrar el uso básico de la función functionsIn().

const _ = require('lodash');

function Persona(documento, nombre, email) {
    this.documento = _.constant(documento);
    this.nombre = _.constant(nombre);
    this.email = _.constant(email);
}

let sonia = new Persona(654951, 'Sonia', 'sonia@mail.co');

let resultado = _.functionsIn(sonia);
console.log(resultado);
