var a = new String ("Violetta Otalvaro");

console.log( a[0] ); /* aca no lo esta manejando como un arrelo, lo esta tomando como un objeto, y porque resuelve
esto?  */
console.log(a); /* aca se muestra mas explicito el objeto impreso en consola. */

console.log(a.toUpperCase());
//  console.log(a.toLowerCase());
/* indexOf me informa donde se encuentra determinada letra o pequeños bloques de texto: */
var i = a.indexOf("t");
console.log("la letra  't' del nombre Violetta se encuentra en la posición: ", i);
var ib = a.indexOf("Otalvaro");
console.log("la letra 'O' del nombre Violetta Otalvaro se encuentra en la posición: ", ib);

/*  en el evento de que un String tenga letras repetidas: se utiliza lastIndexOf() se para letras o pqueños bloques
de texto */
var li = a.lastIndexOf("t");
console.log("la letra repetida  't' del nombre Violetta se encuentra en la posición: ", li);

/* hay veces en que necesitamos un corte o pedazo del String: 
 - el primer digito es a partir de que letra se quiere empezar a cortar
 - el segundo digito es para mostrar los caracteres que se quieran presentar a partir de lo que corto el primer
 digito */
var nombre= a.substr(7,4);
console.log(nombre);

var nombre2= a.substr(0, a.indexOf(" "));
console.log(nombre2);

/* los string tambien tienen funciones parecidas a los arreglos como el split... etc */

var split = a.split(" ");
console.log(split);
console.log(split.length);

/* ================== */
document.write(a.italics());
document.write(a.strike());
document.write(a.bold());


















