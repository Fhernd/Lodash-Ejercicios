// Ejercicio 197: Generar números enteros y reales aleatorios con la función random().

const _ = require('lodash');

// _.random([limiteInferior=0], [limiteSuperior=1], [real=false])

console.log(_.random());

console.log();

for (let i = 1; i <= 10; ++i) {
    console.log(_.random(1, 10));
}

console.log();

for (let i = 1; i <= 10; ++i) {
    console.log(_.random(1, 10, true));
}

console.log();

console.log(_.random(1.5, 1.9));
