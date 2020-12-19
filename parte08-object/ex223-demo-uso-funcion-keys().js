// Ejercicio 223: Usar la función keys() para obtener el conjunto de nombres de propiedades de un objeto.

const _ = require('lodash');

function Persona() {
    this.nombre = 'Amalia Ordoñez';
    this.email = 'amalia@mail.co';
    this.edad = 29;
}

let persona = new Persona();
console.log(persona);

console.log();

let resultado = _.keys(persona);
console.log(resultado); // ['nombre', 'email', 'edad']

console.log();

resultado.forEach((v) => {
    console.log(persona[v]);
});

console.log();

let lenguaje = 'JavaScript';
resultado = _.keys(lenguaje);
console.log(resultado); // ['0', '1', '2', ..., '8', '9']

console.log();

resultado.forEach((v) => {
    console.log(lenguaje[v]);
});
