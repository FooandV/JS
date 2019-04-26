/* utilización */ 
function identifica(param){
    // console.log(typeof param);
    if (typeof param == "function"){
        param(); /* aca estamos ejecutando la funcion que esta llegando por parametro */
    }else{
        console.log(param);
    }
}
/* se puede mandar como parametro tipos primitivos, objetos y funciones */
/* ejemplo mandando una funcion como parametro: */
identifica(function(){ 
    console.log("soy anónima")
});
/* ejemplo mandando un dato que no es una funcion para que se vaya por el else */
identifica(2);

/* *****************instaceof****************************** */
/* el instaceof me permite comparar 2 objetos  */
// si se necesita saber de que tipo es o algun tipo en particular entonces se utiliza
//                     instanceof 
function identifica2(param){
    console.log( param instanceof Persona) /* esto retornara un true o false */
    console.log(typeof param);
}
/* si necesitamos saber que el objeto que estamos mandando es un objeto: */
function Persona(){
    this.nombre = "freyder";
    this.edad = 30;
}
var persona = new Persona();
identifica2(persona); /* aca imprimira en consola todo el objeto que le estoy mandando q es de tipo persona */
                    