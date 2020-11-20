// Ejercicio 199: Demostrar el uso básico de la función assignIn().

const _ = require('lodash');

class Computador {
    constructor(id, marca) {
        this.id = id;
        this.marca = marca;
    }
}

class Radio {
    constructor(paisFabricacion, esDigital) {
        this.paisFabricacion = paisFabricacion;
        this.esDigital = esDigital;
    }
}

let computador = new Computador(1001, 'MSi');
let radio = new Radio('Taiwan', true);

console.log(computador);
console.log();
console.log(radio);

console.log();

let resultado = _.assignIn({agnioFabricacion: 2020}, computador, radio);
console.log(resultado);

console.log();

resultado = _.assignIn({marca: 'Dell'}, computador, radio);
console.log(resultado);
