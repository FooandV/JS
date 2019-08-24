/* objetos: {}
Los objetos pueden ser una coleccion de datos de tipo primitivo o bien otros objetos */
var num= 10;
var str= "Freyder";
var bol= true;
var und= undefined;
var nul= null;

/* declaracion y definicion de un objeto vacio */
var obj = {
    /* dentro de los objetos todo esta dentro de lo que se llama "nomenclatura de pares", es decir
    cada una de las propiedades que ponga, cada uno de los detalles que se ponga adentro tiene
    que tener un par: */
    numero:10, /* dentro de los objetos no va el (;), si tiene mas de una propiedad las siguiente
    se marca con una(,)  */
    texto:"Nuevo texto",

    objHijo:{
        /* tambien puede tener propiedades y objetos dentro del mismo, no hay un limite */
        numero2: 20,
        texto2: "nuevo texto 2"
    }
};
console.log(obj); 
