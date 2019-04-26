"use strict"

//********************************
//*** Métodos búsqueda | Parte 2

var mensaje = "Estoy aprendiendo JavaScript y estoy aprendiendo mucho";

var resultado;

/* match: 
para esto se trabajara una expresion regular ya que este metodo recibe este tipo de datos
el operador g es para que busque de manera global en toda la cadena de texto y sea evaluado
por la expresion regular*/

// resultado= mensaje.match(/aprendiendo/g);
/* cuando se presenta en consola va encontrar las 2 palabras "aprendiendo" y las almacenara como array */

/* substr: lo que recibe de parametros son los caracteres, desde el primero que va encontrar(es decir)
la primera posición, este metodo no te retorna una posición, al contrario te retorna el pedazo de 
texto que estas buscando */
// resultado = mensaje.substr(6,11);


/* substring: este motodo retorna un String*/
/* el primer indice comienza desde donde empieza la palabra a buscar
   el segundo indice comienza desde el inicio de la cadena que se esta evaluando por eso 17 */
// resultado = mensaje.substring(6,17);

/* charAt: retorna el caracter especificado en el indice*/
resultado = mensaje.charAt(0);

console.log(resultado);