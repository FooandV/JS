

/* Objeto number*/

var a= 100.456789;
console.log(a);
console.log(a.toPrecision(2));
    
/* cuantos numeros aguanta la variable numerica, javascritp aguanta hasta 308 digitos exponenciales */
a = 10;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000;
a *= 1000000000000000000000; /* aca ya llego a un valor Infinity lo cual quiere decir que el
numero es demasiado grande y ya no lo puede manejar javascript */

a = a * "c" /* esto va generar como resultado en consola NaN (Not a Number) quiere decir que el numero
en un determinado momento dejo de ser numero */

/* funcion Valueof: esto retorna el valor primitivo del objeto numerico */
var b = new Number("20")
console.log(b);
console.log(b.valueOf());


console.log(a);
