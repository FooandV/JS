let empleados = [{
    id: 1,
    nombre: 'Violetta'
}, {
    id: 2,
    nombre: 'Freyder',
}, {
    id: 3,
    nombre: 'Jesus'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    /* vamos a retornar una promesa, las cuales pertenecen al ECS6 */
    /*  */
    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        });

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

/* funcion para retornar el salario de un empleado */
let getSalario = (empleado) =>{

    return new Promise((resolve, reject) =>{

        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        
    
        if (!salarioDB){
            reject(`No se encontro un salario para el usuario ${empleado.nombre}`);
        }else{
            resolve({ //el resolve va ser el objeto que nosotros queremos enviar de respuesta
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
};
/* ejecutando las funciones: */
getEmpleado(3).then( empleado =>{
    /* para poder anexar otro "then" 
    la función "getSalario debe regresar 
    otra promesa" */
    return getSalario(empleado);
    

});