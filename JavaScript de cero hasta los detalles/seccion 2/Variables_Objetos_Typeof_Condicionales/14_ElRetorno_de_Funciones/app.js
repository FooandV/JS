/* que puede regresar una funcion de Js */
/* puede regresar un tipo primitivo,
                         undifined
                         object
                         function */
/* funcion que regresa un numero aleatorio entre 0-1 sin contar el 1 */
function obtenerAleatorio(){

    return Math.random();
}
console.log(obtenerAleatorio() + 10);


function obtenerNombre(){
    return "Freyder";
}
var nombre = obtenerNombre();
console.log(nombre + " Otalvaro");
/* retornando boolean */
function esMayor05(){
    if (obtenerAleatorio() > 0.5){
        return true;
    }else{
        return false;
    }
}

if (esMayor05()){
    console.log("Es mayor a 0.5");
}else{
    console.log("Es menor a 0.5");
}

/* las funciones pueden regresar objetos: */
function crearPersona(nombre, apellido){
    /* los objetos en las funciones las podemos regresar de 2 maneras: Explicitas o anonimas*/
    // var obj= {};/* objeto explicito */
    return {/* retornando un objeto anonimo */
        /* el primer par es el indicativo de la propiedad, seguido del valor de la propiedad es decir del parametro que se mande en la funcion*/
        nombre: nombre,
        apellido: apellido
    }
}
var persona = crearPersona("Violetta","Otalvaro");
console.log(persona.nombre);
console.log(persona.apellido);

/* funciones que retornan   funciones */

function creaFuncion(){
    /* puede retornar una funcion anonima o funcion explicita */
    return function( nombre ){ /* retorna una funcion anonima */
        console.log("Me creo " + nombre)
        return function(){
            console.log( "Segunda funcion");
        }
    }
}
var nuevaFuncion = creaFuncion();
/* para ejecutarla: */
nuevaFuncion(persona.nombre);

var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();


         
