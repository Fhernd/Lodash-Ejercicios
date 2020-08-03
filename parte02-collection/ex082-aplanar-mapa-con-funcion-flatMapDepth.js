// Ejercicio 82: Aplanar arreglo sobre una operación aplicada a los elementos de un arreglo con flatMapDepth().

// flatMap(): Aplana un arreglo con profunidad máxima 2 (Ejercicio 80)
// flatMapDeep(): Aplana un arreglo con profunidad "ilimitada" (Ejercicio 81)
// flatMapDepth(): Aplana un arreglo con profunidad n (arbitraria)

const _ = require('lodash');

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log();

function duplicarCuadrado(n) {
    let cuadrado = n * n;

    return [[[[cuadrado, cuadrado]]]];
}

let resultado = _.flatMapDepth(numeros, duplicarCuadrado, 1);
console.log(resultado);

console.log();

resultado = _.flatMapDepth(numeros, duplicarCuadrado, 2);
console.log(resultado);

console.log();

resultado = _.flatMapDepth(numeros, duplicarCuadrado, 3);
console.log(resultado);

console.log();

resultado = _.flatMapDepth(numeros, duplicarCuadrado, 4);
console.log(resultado);
