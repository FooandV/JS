"use strict"

//********************************
//*** Plantillas y literales

var lenguaje = 'JavaScript';
var lenguaje2= 'HTML';
/* con el tipo de comillas: backtics se puede escribir plantillas,
es una manera mas versatil de concatenar sin necesidad de poner el + */
var mensaje= `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;

// console.log(mensaje);

/* Mensaje multilinea */
var mensajeMultilinea= `
	Hola mundo,
	estoy aprendiendo
	${lenguaje} y me  gusta
	como se integra con ${lenguaje2} y CSS
`;

console.log(mensajeMultilinea);
