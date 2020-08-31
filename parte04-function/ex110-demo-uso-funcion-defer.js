// Ejercicio 110: Demostrar el uso de la función defer().

// defer(): para invocar una función dada hasta que se libere la pila de invocaciones.
// Se evita el bloque del hilo de la interfaz gráfica (UI).

const _ = require('lodash');

function calculoExtenso(numero) {
    // se realizan operaciones que requieren una cantidad considerable de tiempo.

    console.log(`Contenido de la variable «numero»: ${numero}`);
}

_.defer(calculoExtenso, 1000000);
