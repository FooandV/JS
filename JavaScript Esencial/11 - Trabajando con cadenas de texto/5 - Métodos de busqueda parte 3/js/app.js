"use strict"

//********************************
//*** Métodos búsqueda | Parte 3

var mensaje = "Estoy aprendiendo JavaScript";
var resultado;

/* startsWith: (si comienza con), este metodo retorna un boolean
 este metodo es key sencitive*/
// resultado = mensaje.startsWith("Es");

/* endsWith: si termina con este texto */
// resultado = mensaje.endsWith("JavaScript");

/* includes: retorna una boolean, pregunta si incluye
alguna palabra de la buscada en la cadena evaluada, el segundo
parametro es el indice desde donde se quiere empiece a buscar */
resultado = mensaje.includes("aprendiendo", 6);


console.log(resultado);