// Ejercicio 212: Iterar por las propiedades de un objeto utilizando la función forInRight().

const _ = require('lodash');

class Computador {
    constructor(id, marca, cpu, ram, ssd) {
        this.id = id;
        this.marca = marca;
        this.cpu = cpu;
        this.ram = ram;
        this.ssd = ssd;
    }
}

let computadorGamer = new Computador(1001, 'MSi', 'Intel Core i7', 32, 720);
console.log(computadorGamer);

console.log();

_.forIn(computadorGamer, (v, k) => {
    console.log(k);
});

console.log();

_.forInRight(computadorGamer, (v, k) => {
    console.log(k);
});
