/* Arreglos */

var arr = [5,4,3,2,1];
console.log(arr);

console.log(arr[0], arr[4], arr[5]);

/* reverse invertira los elementos del arreglo */
arr.reverse();
console.log(arr); 

/* funcion map, esta regresa un nuevo arreglo y nos permite ejecutar una funcion contra cada uno de los elementos
del arreglo sin hacer un cilo for etc */
arr= arr.map( function(elem){
    elem *= elem;
    return elem; /* aca estamos retornando el valor de la posición del elemento del array */
});
console.log(arr);
/* sacando la raiz cuadrada de cada uno de los valores de nuestro arreglo: */
arr = arr.map(Math.sqrt);
console.log(arr);

/* join es otra funcion que genera un nuevo arreglo separado por comas , pero se puede separar por lo que se desee: */
arr = arr.join("|");
console.log(arr);

/* la funcion opuesta al join es el "split" que es como cortar el arreglo */
arr = arr.split("|");
console.log(arr);

/* ingresando un nuevo elemento al arreglo que ya esta definido, push lo pone en la ultima posición del arreglo: */
arr.push("6");
console.log(arr);

/* unshift pone un nuevo elemento en la primera posición del arreglo */
arr.unshift("0");
console.log(arr);

/* tostring: Pone la representación textual del arreglo, es decir lo deja como un string */
console.log(arr.toString());

/* pop(), elimina el ultimo elemento del arreglo */
var elimine= arr.pop();
console.log(arr, elimine);

/* splice() , puede recibir n cantidad de parametros, el primer parametro tiene que ser un numero a fuerza y 
a partir del elegido se puede elegir el elemento que se quiera eliminar, si se desea se puede meter elementos
a la posición que fue eliminada*/
arr.splice(1, 0, "10", "20", "30" );
console.log(arr);

/* slice(), esta es la funcion opuesta a splice(), quiere decir cortar
el segundo elemento es hasta donde quiero cortar sin incluir ese numero*/
arr = arr.slice(0,2);
console.log(arr);

