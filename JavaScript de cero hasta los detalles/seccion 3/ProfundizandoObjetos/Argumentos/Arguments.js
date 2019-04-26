
var arguments = 10;
/* las funciones tambien tienen un prototypo de funciones  */
function miFuncion(a,b,c,d){
    /* en consola no se va imprimir 10 por la definición de los prototipos, cuando un 
    contexto de funcion es invocado, la funcion crea un prototipo. Dentro de ese
    prototipo esta la variable arguments */
    // console.log(arguments);
    if(arguments.length !==4){
        console.error("La funcion necesita 4 parametros");
        return
    }


    console.log(a + b + c + d);
    console.log(60 + undefined);

}

miFuncion(10,20,30); /* esto va generar en consola NaN(not a number) */
