"use strict"

//********************************
//*** Métodos búsqueda | Parte 1

var mensaje= "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

/* indexof */
/* el metodo indexof busca el valor de la primera ocurrencia de
la palabra que estamos buscando */
// resultado= mensaje.indexOf("aprendiendo");

/* lastIndexof:
busca la ultima aparición de la palabra que se pone a buscar*/
// resultado= mensaje.lastIndexOf("aprendiendo");

/* search: nos va regresar la posición en donde se encuentra el texto
dentro de nuestra variable
*/
// resultado= mensaje.search("aprendiendo");

/* search | Expresion regular:
en este ejemplo buscara en la cadena de texto la "ja"  y la "i" 
significa in key sensitive es decir que no importa mayuscula 
minuscula */
resultado = mensaje.search(/ja/i);
console.log(resultado);