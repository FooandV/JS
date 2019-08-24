/* las variables de tipo primitivo siempre se pasan por valor:   */

/* ambas variables tienen un espacio en memoria diferente */
var a = 10; 
var b = a;

console.log("a: ", a);
console.log("b: ", b);
a = 20;
console.log("a: ", a);
console.log("b: ", b);

/* objetos: */
/* cuando son objetos los que estamos igualando o asignando SIEMPRE pasan por REFERENCIA */
var c ={  /* aca estamos reservando espacio en memoria para la variable c */
    nombre: "juana"
}
var d= c; /* d y c estan apuntando al mismo espacio de memoria, cuando son afectadas alguna de estas variables
tipo objeto en sus propiedades, son alteradas simultaneamente  */
console.log("c: ", c);
console.log("d: ", d);
/* para cambiarle el valor a una propiedad se realiza con la notación de punto(.) */
c.nombre =  "Maria";
console.log("c: ", c);
console.log("d: ", d);
d.nombre= "Violetta";
console.log("c: ", c);
console.log("d: ", d);
 