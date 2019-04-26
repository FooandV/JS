/* mandando una funcion como parametro a una funcion */
/* fn: es una funcion por parametro */
function imprimir(fn){
    /* para ejecutar la funcion: */
    fn();


}

var persona={
    nombre: "freyder",
    apellido: "otalvaro"
}
/* ahora realizando el ejemplo con una funcion que no es anonima: */
var miFuncion = function(){
    console.log("Mi funcion")
}
imprimir(miFuncion);

/* las funciones, como los objetos, como los tipos primitivos pueden ser anonimas */
/* NOTA: EN REALIDAD LAS FUNCIONES SON OBJETOS */
imprimir( function(){
    console.log("Funcion anonima");
});



