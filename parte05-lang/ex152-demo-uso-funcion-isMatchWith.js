// Ejercicio 152: Demostrar el uso de la función isMatchWith() para comparar dos objetos.

const _ = require('lodash');

let persona1 = {
    id: 1001,
    nombre: 'Edward',
    profesion: 'Técnico de sistemas'
};

let persona2 = {
    id: 1001,
    profesion: 'Técnico mantenimiento computadores'
};

function compararObjetos(objeto1, objeto2) {
    if(objeto1.id === objeto2.id) {
        return true;
    };
}

let resultado = _.isMatchWith(persona1, persona2, compararObjetos);
console.log(resultado); // true
