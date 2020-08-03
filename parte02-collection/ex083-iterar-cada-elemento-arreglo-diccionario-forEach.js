// Ejercicio 83: Iterar cada elemento de un arreglo y diccionario (objeto) con la función forEach().

const _ = require('lodash');

let numeros = [2, 3, 5, 7, 11, 13];

_.forEach(numeros, (n) => {
    console.log(n);
});

console.log();

let persona = {id: 1001, nombre: "Daniela", apellido: 'Ortiz', edad: 23};

_.forEach(persona, function(valor, llave) {
    console.log(`${llave} => ${valor}`);
});
