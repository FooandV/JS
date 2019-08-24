/* notas:
Javascript trabaja primero leyendo y barriendo el archivo
despues ejecuta */

var a = 30;/* esta variable pertenece al entorno global osea a "window" */

// primeraFuncion(); /* nota: podemos ejecutar las funciones antes de que esten definidas */

function primeraFuncion(){
    // cuando ingresa por primera vez genera un nuevo contexto, es decir reserva en memoria todo
    // lo que este dentro de la función 
    // var a=20; /* esto es reservar un espacio en memoria */, /* si se quita la declaración
    /* dentro del contexto, el motor de JS lo primero que busca es en el interior si no esta busca
    en el entorno global osea en "window" y ahi si la encuentra */

    console.log( a ); 


}
primeraFuncion(); /* cuando el motor de js lee esta ejecución de una funcion se dirige donde fue definida
y*/

/* nota: las funciones siempres regresan un valor aunque no esten definidas en su contexto */
function segundaFuncion(){

}
var a= segundaFuncion();
console.log ( a ); /*  lo que va retornar esto es undefined */




