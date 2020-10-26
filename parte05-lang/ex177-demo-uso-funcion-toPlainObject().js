// Ejercicio 177: Usar la función toPlainObject() para crear un objeto estándar desde un valor.

const _ = require('lodash');

function Persona(id, nombre) {
    this.id = id;
    this.nombre = nombre;
}

let alex = new Persona(1001, 'Alexander');
console.log(alex);

console.log();

let resultado = _.toPlainObject(alex);
console.log(resultado);

console.log();

class Computador {
    constructor(marca, procesador) {
        this.marca = marca;
        this.procesador = procesador;
    }
}

let portatil = new Computador('MSi', 'Intel Core i8');
console.log(portatil);

console.log();

resultado = _.toPlainObject(portatil);
console.log(resultado);
