"use strict"

//********************************
//*** Generación de arreglos con split(), from() y of()

/* split(): recibe como parametro un elemento que vamos a tomar
 de base para la separacion*/
var mensaje= "ceviche, tacos, pasta";
var platillos= mensaje.split(', ');

/* Array.from():
Este metodo sirve para traer elementos consecutivos del HTML
y mapearlos en el js para que luego se representen como un
arreglo*/

// var platillosHTML= document.querySelectorAll('.platillos p');
/* al momento de presentarse en consola se presenta el array,
pero cuando se accede a un objeto del arreglo presenta la definicion
del tipo de etiqueta del HTML, para este caso la etiqueta de
parrafo <p> que es la que estamos tomando para generar un arreglo.
Debido a esto cada etiqueta<p> si se ingresa a su contenido presenta
un listado de todos las propiedades vinculadass de todo el HTML
donde se encuentran declarados las etiquetas <p> y unas 
funciones(metodos) con los que puede trabajarse para dicho array
para este caso se debe seleccionar la propiedad: textContent
el cual indica el nombre que se le dio a la etiqueta <p>, entonces
se utiliza el metodo: Array.from() para que encapsule y de ese
modo se convierta en un arreglo formal:*/

var platillosHTML= Array.from(document.querySelectorAll('.platillos p'));
/* luego de que se encuentra establecido un arreglo formal aparecen unos
otras funciones(metodos) disponibles que no se observaban antes
de utilizar el metodo Array.from(), de los nuevos que aparecen son
 el metodo map() el  cual servira para poder mapear los elementos que
 se necesitan para poder trabajar, es decir mapear todos los contenidos
 traidos desde el HTML*/

 var platillos2= platillosHTML.map(platillo => platillo.textContent);  /* esto va 
 ser una iteración  continua, no se necesita un ciclo for o foreach,
 automaticamente esto lo hace solo, entonces dentro de map() se le 
 pone la referencia que puede ser un nombre cualquiera y se realiza 
 una funcion arrow() para que lo que esta al otro lado retorne 
 lo que se necesita que para este caso es la propiedad textConten()*/



 /* Array.of():
 Todo lo que se le envia adentro, lo va generar y lo va convertir en un arreglo
  */
 var platillos3= Array.of("Jehova", "Violetta","Freyder" );
console.log(platillos3);