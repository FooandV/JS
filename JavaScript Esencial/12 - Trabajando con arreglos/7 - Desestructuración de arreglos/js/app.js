"use strict"

//********************************
//*** Desestructuración de arreglos

var platillos = ["ceviche", "tacos", "pasta", "tostadas"];

// var platillo1= platillos[0];
// var platillo2= platillos[1];
// var platillo3= platillos[2];

// var platillo1=null;
// var platillo2=null;
// var platillo3=null;
// var platillo4=null;

/* cuando se utiliza la sintaxis de desestructuracion, por dentro
el motor de js toma el contenido que hay dentro de la variable
platillos[] y luego empieza hacer la asignación uno a uno*/
var [platillo1,platillo2,platillo3, platillo4] = platillos;

console.log(platillo1,platillo2,platillo3, platillo4);