/* notacion de corchetes */
/* es bastante utilizada cuando queremos traer datos de manera dinamica */
var persona = {
    nombre:"Violetta",
    apellido:"Otalvaro",
    edad: 4,
    direccion:{
        pais:"Colombia",
        ciudad: "Medellin",
        edificio: {
            nombre:"Edificio principal",
            telefono: "3017388380" 
        }
    }
};

console.log( persona["nombre"] );
console.log( persona["direccion"]["pais"] );
console.log( persona["direccion"]["edificio"]["nombre"] );

var campo="edad";
console.log(persona[campo]);

