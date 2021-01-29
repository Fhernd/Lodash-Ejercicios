// Ejercicio 242: Extraer los valores de las propiedadese de un objeto con la función values().

const _ = require('lodash');

function Persona(id, nombre, email) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
}

let julio = new Persona(1001, 'Julio Ordoñez', 'julio@mail.co');
console.log(julio);

console.log();

let valores = _.values(julio);
console.log(valores);   // [1001, 'Julio Ordoñez', 'julio@gmail.co']

console.log();

console.log(_.values('ABC'));   // ['A', 'B', 'C']
