// Ejercicio 154: Usar la función isNative() para validar si una función dada es nativa.

const _ = require('lodash');

console.log(_.isNative(parseInt));  // true
console.log(_.isNative(Number.isInteger));  // true

console.log();

console.log(_.isNative(_.isNaN));   // false

console.log();

function sumar(a, b) {
    return a + b;
}

console.log(_.isNative(sumar)); // false

console.log();

class Computador {
    constructor(id, marca, procesador) {
        this.id = id;
        this.marca = marca;
        this.procesador = procesador;
    }

    mostrarDatos() {
        return `ID: ${this.id} - Marca: ${this.marca} - Procesador: ${this.procesador}`;
    }
}

let miComputador = new Computador(1001, 'MSi', 'Intel');

console.log(_.isNative(miComputador.mostrarDatos)); // false
