/* utilizando la palabra reservada new */
// Persona carlos = new Persona(); 
function Persona(nombre, apellido){
    /* la funcion agarra una forma muy parecida a lo que es una clase */
    /* nota: si esta funcion no es instanciada con la palabra reservada new() donde se crea un objeto de tipo 
    Persona() entonces se comportará como una funcion normal y las propiedades:
     this.nombre = "freyder",
    this.apellido = "otalvaro",
    this.edad = 30
    caen en el objeto global "window" */
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = 30

    // console.log("paso por aqui");
    /* se pueden crear metodos: */
    this.imprimirPersona=function(){
        return "El nombre es: "+ this.nombre + ", " + "su apellido es: " + this.apellido + ",  y su edad es: "+ this.edad;

    }

}
// var freyder = {}; /* utilizando la palabra reservada new es crear lo mismo un objeto vacio, pero si necesita
// que se le especifique de que es ese objeto vacio que estamos creando */

// var freyder = Persona();  de esta manera retornada un undifined la funcion definida persona(),
//  es decir se convierte en una funcion normal, no estamos 
// creando el objeto persona entonces donde caen las propiedades definidas? 
// las propiedades caen en el objeto global "window"

var freyder = new Persona("freyder", "Otalvaro"); /* esto es una invocación de funcion, esto es crear espacio en memoria de que esa
//  variable va responder a la funcion ya   declarada */
var imprimirPersona = freyder.imprimirPersona();

console.log(  freyder ); 
console.log( imprimirPersona); 
