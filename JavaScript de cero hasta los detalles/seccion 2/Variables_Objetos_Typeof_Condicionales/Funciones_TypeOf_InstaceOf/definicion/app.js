
/* sirve para cuando necesitemos estar seguros del tipo de dato que setamos recibiendo antes de hacer
alguna acción */
function identifica(param){
    console.log(typeof param);/* typeof nos dira que tipo de parametro es el que le estamos mandando */
}
function Persona(){

}
var a = new Persona();
/* se puede mandar como parametro tipos primitivos, objetos y funciones */
identifica(function(){});
/* como se puede utilizar el typeof en la vida real: */
