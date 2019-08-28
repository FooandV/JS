
// setTimeout(()=> {
//     console.log('Hola Mundo')
// },3000);

let getUsuarioById = (id, callback) => {

    let usuario= {
        nombre: 'freyder', 
        id: id
    }
    if( id ===20){
        callback(`El usuario con Id ${id}, no existe en la BD`)
    }else{
        callback(usuario);
    }


} 
   
getUsuarioById(20, (err, usuario)=>{

    if(err){
        return console.log(err);
    }
   console.log('Usuario de base de datos', usuario)     
});


