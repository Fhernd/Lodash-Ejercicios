// Ejercicio 276: Compilar una función de plantilla con la función template().

const _ = require('lodash');

let plantilla = 'Hola, <%= usuario %>. Su lenguaje de programación preferido es: <%= lenguaje %>.';
let plantillaLenguaje = _.template(plantilla)

let datos = {
    usuario: 'InfZer0',
    lenguaje: 'JavaScript'
};

console.log(plantillaLenguaje(datos));
// Hola, InfZer0. Su lenguaje de programación preferido es: JavaScript.

console.log();

datos.lenguaje = 'Python';
console.log(plantillaLenguaje(datos));
// Hola, InfZer0. Su lenguaje de programación preferido es: Python.

console.log();

plantilla = 'Hola, ${usuario}. Su lenguaje de programación preferido es: ${lenguaje}.';
plantillaLenguaje = _.template(plantilla)
console.log(plantillaLenguaje(datos));
