try{

    throw function () {
        console.log("Funcion del throw...");
        
    }
    console.log("Esta parte nunca se ejecuta");

}

catch(e){

    e();/* con esto invocamos la e */

    console.log("Parte del catch");
}
finally{

    console.log("Finalmente");
}