var animales = ["perro", "gato", "pez"];

var listaAnimales = animales.join(", "); //el join une los elementos del arreglo por ,; el resultado es una cadena de caracteres

var nuevaLista = animales.concat(","); // el resultado del método concat es un arreglo
 
console.log(listaAnimales);
console.log(typeof listaAnimales);

console.log(nuevaLista);
console.log(typeof nuevaLista);