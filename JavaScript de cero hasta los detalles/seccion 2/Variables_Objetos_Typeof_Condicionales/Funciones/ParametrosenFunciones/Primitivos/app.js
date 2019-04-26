/* las funciones pueden recibir tipos primitivos, objetos y funciones */

/* los parametros de las funciones cuando son definidos en el contexto de javascript, reserva el espacio en memoria con el tipo undifined */
function imprimir( nombre, apellido){

    console.log(nombre + " " + apellido  ); 
}

// var nombre = "Violetta";/* variable explicita */
imprimir("Freyder","Otalvaro"); /* con variable anonima, es decir que no esta especificada en el código */ 

/* otro ejemplo: */
function imprimir2(nombre, apellido){
    /* para verificar si los parametros que estamos enviando estan vacions: */
    // if ( apellido === undefined ){ /* === de esta manera se valida que el valor y el objeto son lo mismo */
    //     apellido = "Marin";
    // }

    /* hay una manera mas corta de validar los parametros: */
    apellido= apellido || "Marin";

    console.log(nombre + " " + apellido );
}
imprimir2("Violetta","Otalvaro");