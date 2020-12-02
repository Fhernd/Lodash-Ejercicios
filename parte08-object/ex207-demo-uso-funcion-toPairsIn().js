// Ejercicio 207: Usar la función toPairsIn() para crear un arreglo de propiedades y valores de un objeto.

// {x: 1, y: 2} => [['x', 1], ['y', 2]]

const _ = require('lodash');

function Computador(id, marca, cpu, ram, ssd) {
    this.id = id;
    this.marca = marca;
    this.cpu = cpu;
    this.ram = ram;
    this.ssd = ssd;
}

Computador.prototype.sistemaOperativo = 'FreeDOS';

let portatilGamer = new Computador(1001, 'MSi', 'Intel Core i7', 32, 500);
console.log(portatilGamer);

console.log();

let resultado = _.toPairsIn(portatilGamer);
console.log(resultado);
