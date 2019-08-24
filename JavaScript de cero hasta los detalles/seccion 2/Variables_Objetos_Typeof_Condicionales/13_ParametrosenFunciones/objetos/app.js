
function imprimir( persona ){
    console.log(persona.nombre + " " + persona.apellido);

}

var persona={
    nombre: "Violetta",
    apellido: "Otalvaro"
}

imprimir(persona);
/* tambien los objetos pueden ser anonimos al momento de mandarlos en la ejecución de una funcion */
// imprimir( {  
//     nombre: "Violetta",
//     apellido: "Otalvaro"
// });