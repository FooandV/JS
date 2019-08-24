
/* las funciones son objetos */
function a(){

    console.log("Funcion a");
}
a();
/* a las funciones se les puede poner cualquier cosa */
a.nombre = "Violetta";
a.name = "Violetta"; /* nane es un argumento de primera clase, es decir que NO se puede cambiar el valor de este
para este caso va retornar al momento de llamarlo en consolo a.name = a() es decir el nombre de la funcion */

/*Otro ejemplo  */
a.apply = "Freyder"; /* en este ejemplo la propiedad apply siendo de la funcion de primera clase se le esta asignando otro valor
que es "freyder", de manera que se le esta quitando el mecanismo que posee el apply, por lo cual si toma el nuevo valor*/

/* NOTA: a las funciones le podemos poner cualquier cosa que se le pueda poner a un objeto, como propiedades y metodos: */
a.nombre= "Andrea";
a.direccion= {
    pais: "Colombia",
    ciudad: "Medellin",
    edificio:{
        piso: "2do",
        nombre: "Edificio principal"
    }
};