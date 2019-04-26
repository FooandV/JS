try{
    // throw new Error('Error tipo 1');
    console.log("Esta parte nunca se ejecuta");
    /* con el throw se puede tirar lo que sea: funciones, variables, objetos, arreglos: */
    throw{
        nombreError: "Error tipo 1",
        accion: "Salir corriendo a echarle agua al servidor",
        codeError: 1
    }
}
catch(e){

    console.log(e);/* de esta manera lanza el error en consola dando una especificacion */
    console.log(e.message);/* de esta manera lanza el error de acuerdo a como se le haya nombrado en el lanzamiento throw */
    console.log(e.nombreError);
    console.log(e.accion);
    console.log(e.codeError);
    
    console.log("Parte del catch:");
}


finally{

    console.log("Finalmente");
}