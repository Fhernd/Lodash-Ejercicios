// Ejercicio 115: Demostrar el uso de la función once() para ejecutar una tarea sólo una vez.

const _ = require('lodash');

function inicializarAplicacion() {
    console.log('La aplicación se ha inicializado.');
}

let initApp = _.once(inicializarAplicacion);

initApp();
initApp();
initApp();
initApp();
initApp();
initApp();
initApp();
initApp();
initApp();
initApp();
