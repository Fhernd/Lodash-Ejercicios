// Ejercicio 243: Usar la función valuesIn() para extraer los valores de las propiedades de un objeto.

const _ = require('lodash');

function Persona(id, nombre, email) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
}

Persona.prototype.nacionalidad = 'Colombia';

let julio = new Persona(1001, 'Julio Ordoñez', 'julio@mail.co');
console.log(julio);

console.log();

let valores = _.values(julio);
console.log(valores);   // [1001, 'Julio Ordoñez', 'julio@gmail.co']

console.log();

console.log(_.values('ABC'));   // ['A', 'B', 'C']

console.log();

valores = _.valuesIn(julio);
console.log(valores);
