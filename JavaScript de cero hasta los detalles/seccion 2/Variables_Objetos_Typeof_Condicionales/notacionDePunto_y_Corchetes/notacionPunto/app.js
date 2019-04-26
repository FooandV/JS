/* notacion de punto */
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

console.log(persona.direccion);
console.log(persona.direccion.ciudad);

/* como se agrega una propiedad nueva al objeto direcion que esta dentro de persona: */
persona.direccion.zipcode = 1111;
console.log(persona.direccion);
/* cuando se empieza hacer incontrolable la notación de punto: */
console.log(persona.direccion.edificio.telefono);
/* para poder resumir se realiza lo siguiente: */
/* teniendo el concepto de que todos los objetos son pasados por "Referencia" */
var edificio = persona.direccion.edificio;
/* para agregarle una propiedad mas al edificio: */
edificio.nopiso = "8v0 piso";
console.log(persona); 

