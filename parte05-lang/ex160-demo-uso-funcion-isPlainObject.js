// Ejercicio 160: Usar la función isPlainObject() para validar si un valor es un objeto plano.

// {a: 1, b: 2}

const _ = require('lodash');

let persona = {
    id: 1001,
    nombre: 'Edward'
}

console.log(_.isPlainObject(persona));  // true

console.log();

function Persona(id, nombre) {
    this.id = id;
    this.nombre = nombre;
}

console.log(_.isPlainObject(new Persona(1002, 'Daniela'))); // false

console.log();

class Ciudadano {
    constructor(id, nombre, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
    }
}

console.log(_.isPlainObject(new Ciudadano(1003, 'Germán', 'Carrera 101'))); // false

console.log();

console.log(_.isPlainObject(Object.create(persona)));   // false
