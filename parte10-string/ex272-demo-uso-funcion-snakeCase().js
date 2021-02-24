// Ejercicio 272: Usar la función snakeCase() para generar una cadena en notación serpiente (snake).

const _ = require('lodash');

// Python es Tremendo => python_es_tremendo

console.log(_.snakeCase('Python es Tremendo'));
console.log(_.snakeCase('PythonEsTremendo'));
console.log(_.snakeCase('--Python---Es-------Tremendo'));
