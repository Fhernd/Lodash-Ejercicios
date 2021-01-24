// Ejercicio 236: Extraer las propiedades y valores de un objeto como un arreglo de arreglos (matriz).

const _ = require('lodash');

function Computador(id, marca, cpu, ram, ssd) {
    this.id = id;
    this.marca = marca;
    this.cpu = cpu;
    this.ram = ram;
    this.ssd = ssd;
}

let computadorDesktop = new Computador(1001, 'Clone', 'Intel Core i7', 128, 5000);
console.log(computadorDesktop);

console.log();

let resultado = _.toPairs(computadorDesktop);
console.log(typeof resultado);

console.log();

console.log(resultado); // [['id', 1001], ['marca', 'Clone'], ...]
