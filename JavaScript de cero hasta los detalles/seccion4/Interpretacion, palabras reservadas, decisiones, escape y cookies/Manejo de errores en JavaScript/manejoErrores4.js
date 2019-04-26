

try{

    throw 1; 


}
catch(e){

   registroErrores(e);
}

finally{
    console.log("Finalmente");
}

function registroErrores(e) {
    var ahora = new Date();
    console.log("Se registro un error:", e , ahora);
    
}