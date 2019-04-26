/* *******************************************funciones Anonimas**************************************************** */
/* las funciones anonimas nos ayudan a mantener el código bastante encapsulado, es decir para prevenir que nuestro código
sea accidentalmente manipulado por otras secciones de nuestro programa*/
/* en este ejemplo a=10 a pesar de que esta fuera de la función es cambiada cuando es ejecutada la función cambiarA()
y es un comportamiento que no se espera en un programa normal ya que esta variable que se encuentra en el objeto global window
y puede ser vamipulada por cualquier parte del programa */
var a= 10; /* variable que se encuentra en el objeto global : window */
console.log(a);
function cambiarA(){
    a= 20;
}
cambiarA();
console.log(a);
/* para solucionar este tipo de problemas se utilizan lass funciones anonimas, una funcion anonima no tiene un nombre,
para este otro ejemplo q es igual al anterior la variable b esta escondida para el objeto global */
(function(){
    var b= 10;
    console.log(b);
    function cambiarB(){
        b=20;
    } 
    cambiarB();
    console.log(b);   
})();/* es esta manera se invoca */

/* ***********************************Otro tipo de funciones Anonimas**************************************************** */
function ejecutarFuncion(fn){
    fn(); /* aca esta ejecutando la funcion que se le envia como parametro */

};
/* se ejecuta la funcion principal ejecutarFuncion(fn) pero esta funciona hay que enviarle otra funcion como parametro
entonces se le envia como parametro una funcion anonima con su declaración */
ejecutarFuncion( function(){
    console.log("Funcion anónima ejecutada!");
}); 

/* ******************************************Otro ejemplo***************************************************************** */

function ejecutarFuncionAnonimaConRetorno(fn){
    if (fn()===1){

        return true;
    }else{
        return false;
    }
};
/* vamos a imprimir lo que sea que esta funcion retorne en consola:
se debe recordar que el "console.log" es una funcion*/
console.log(
    
    ejecutarFuncionAnonimaConRetorno(function(){
        console.log("funcion anónima con retorno ejecutada!!")
        return 1;
    })
);






