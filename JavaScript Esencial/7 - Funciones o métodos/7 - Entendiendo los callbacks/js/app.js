"use strict"

//********************************
//*** Calllbacks
/* funciones que pueden recibir otras funciones como parametros
los callback hacen mucho juego con las funciones anonimas
sumarCB y restarCB son funciones callback */

function calcular(datoA, datoB, sumarCB, restarCB) {
    var suma = datoA + datoB
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCB(restar);
}
/* cuando se esta invocando la funcion calcular se trabaja con la 
estructura interna de dicha funcion que recibe datoA,datoB y luego
los callbacks q son sumarCB y restarCB.
 */
calcular(2, 3,
/* entonces ya sea que yo tenga declarada una funcion previamente y 
y solamente escribe el nombre o que pueda utilizar una funcion
anonima, aca entonces tenemos una funcion que recibe un resultado, 
es decir debemos retornar el valor */
    function (resultado) {
        console.log('Suma', resultado)
    },
    function (resultado) {
        console.log('Resta', resultado)
    })


// calcular(d1, d2, func, func)