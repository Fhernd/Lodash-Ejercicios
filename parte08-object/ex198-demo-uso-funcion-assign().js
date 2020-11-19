// Ejercicio 198: Usar la función assign() para asignar propiedades a varios objetos.

const _ = require('lodash');

// _.assign(objeto, [objetos])

function Persona(id, nombre) {
    this.id = id;
    this.nombre = nombre;
}

let sonia = new Persona(1001, 'Sonia');
console.log(sonia);

console.log();

let resultado = _.assign({email: 'sonni@mail.co'}, sonia);
console.log(resultado);
