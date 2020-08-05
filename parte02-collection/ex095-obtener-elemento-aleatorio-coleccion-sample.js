// Ejercicio 95: Obtener un elemento aleatorio desde una colección por medio de la función sample().

const _ = require('lodash');

let primos = [2, 3, 5, 7, 11, 13];

let primo = _.sample(primos);

console.log(primo);

console.log();

let lenguajes = ['JavaScript', 'C#', 'C++', 'Java', 'Python'];

for(let i = 1; i <= 10; ++i) {
    console.log(_.sample(lenguajes));
}
