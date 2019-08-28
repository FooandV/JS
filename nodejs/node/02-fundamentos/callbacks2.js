let empleados = [{
    id: 1,
    nombre: 'Violetta'
},{
    id:  2,
    nombre: 'Freyder', 
}, {
    id: 3,
    nombre: 'Jesus'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id:2,
    salario: 2000
}]
//funcion para obtener un empleado por el id
// para esta funcion necesito recibir el id del usuario y 
// el callback que yo quiero llamar cuando yo ya tengo el id del usuario
let getEmpleado = (id, callback) =>{
    // el find va barrer todo el arreglo, donde por cada iteracion voy a obtener un empleado
    let empleadoDB= empleados.find( empleado => {
        //acá va la condicion que se tiene que regresar:
        return empleado.id === id
    })

    if ( !empleadoDB){
        // se inyecta en el callback el id que se esta recibiendo por parametro
        callback(`No existe un empleado con el ID ${id}`)
    }else{
        //mando al callback un "null" porque no hay ningun error, y retorno el empleado
        callback(null, empleadoDB)
    }

    // console.log(empleadoDB)
}

// la funcion getSalario debe retornar una respuesta asi:
// {
//     nombre: 'Violetta',
//     salario: 1000
// }
// en caso de que suceda un erro debe decir
// No se encontro un salario para el usuario Violetta

getSalario = (empleado, callback) =>{
    // lo primero es buscar en nuestra arreglo de salarios[] el empleado con su respectivo id

    let salarioDB = salarios.find(salario =>{
        return salario.id === empleado.id;
    })

    if (!salarioDB){
        callback(`No se encontro un salario para el usuario ${empleado.nombre}`)
    }else{
        //en los callback se puede llamar cualquier cosa, pero se acostumbra que cuando se llame 
        // una respuesta sea un objeto si tienen mas de una propiedad, si se quiere regresar 
        // 2 o 3 propiedades usar un objeto literal
        callback(null,{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }

}




//cuando estoy ejecutando una función y tengo un callback implicito lo llamo a traves de una funcion de flecha
getEmpleado(1, (err,empleado)=>{
    if(err){
        return console.log(err)
    }
    console.log(empleado)
});