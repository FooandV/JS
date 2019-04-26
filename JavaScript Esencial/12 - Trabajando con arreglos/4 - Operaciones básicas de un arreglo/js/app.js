"use strict"

//********************************
//*** Operaciones básicas de un arreglo

var platillos= ["pastas", "frijoles", "arroz"];

console.log('Antes: ', platillos);

/*push: este metodo nos permite estar agregando un elemento nuevo
a nuestro arreglo */

// platillos.push("tostadas");

/* pop: el metodo pop realiza la operacion contraria, saca el ultimo
elemento que tengamos en nuestro arreglo*/

// platillos.pop();
// platillos.pop();

// console.log('Despues: ', platillos);

/* join: reune a todos los elementos que componen a un arreglos
y los retorna como si fuera una cadena de texto */
var mensaje= platillos.join();
console.log(mensaje);