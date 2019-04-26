try{
    /* js intenta hacer esto: */
    var a = 100;

    /* se puede disparar un error: con throw y obliga a irse por el catch */
    
    if (a === 100){
        throw  'que mal';
    }else{
        
        throw 'oh ho';
    }

    console.log("El valor de a:", a);

}
/* Nota: el catch es una funcion, es opcional pero si no se utiliza se 
debe poner el finally por obligacion */
/* js si fallas ejecuta lo siguiente: */
catch(e){

    if(e === "que mal"){
        console.log("Error tipo1");
    }
    if (e==="oh ho"){
        console.log("Error tipo2");
    }
    // console.log("Error de catch:", e);

}
/* el finally siempre se va ejecutar: */
finally{
    console.log("finalmente");

}