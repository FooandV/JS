"use strict"

//********************************
//*** Métodos de generación, reemplazo y separación

var mensaje = "           Estoy aprendiendo JavaScript     ";

var resultado;

/* repeat: repite n cantidad de veces lo que se quiera repetir */
// resultado = mensaje.repeat(200);

/* replace: busca una cadena de texto y la remplaza por el texto
que queramos, pero cuando se ejecuta desde la consola no afecta
el valor original de la variable "mensaje" */
// resultado = mensaje.replace("JavaScript", "a programar");

/* slice: es ralizar un corte de la cacena, desde que posción se
quiere retornar  */
// resultado = mensaje.slice(6);
/* si se quiere ingresar otro parametro para el ejemplo recorta
desde el total de la cantidad del mensaje */
// resultado = mensaje.slice(6, mensaje.length-6);

/* split: separa toda la cadena de texto en un arreglo */
// resultado = mensaje.split("-");

/* trim: elimina los espacios en blanco que tenga la cadena evaluada */
resultado = mensaje.trim();

console.log(resultado);
