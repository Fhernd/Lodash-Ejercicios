// Ejercicio 206: Usar la función toPairs() para extraer las propiedades y valores de un objeto como un arreglo.

// {x: 1, y: 2} => [['x', 1], ['y', 2]]

const _ = require('lodash');

function Computador(id, marca, cpu, ram, ssd) {
    this.id = id;
    this.marca = marca;
    this.cpu = cpu;
    this.ram = ram;
    this.ssd = ssd;
}

let portatilGamer = new Computador(1001, 'MSi', 'Intel Core i7', 32, 500);
console.log(portatilGamer);

console.log();

let resultado = _.toPairs(portatilGamer);
console.log(resultado);
