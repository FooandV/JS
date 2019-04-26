/* prototipos = prototype 
los prototipos permiten expandir este tipo de objetos donde se le pueda agregar propiedades y metodos*/

function Persona() {/* funcion de primera clase */
    this.nombre = "Violetta";
    this.apellido = "Otalvaro";
    this.edad = 4;
    this.pais = "Colombia";
    // this.imprimirInfo = function(){
    //     console.log(this.nombre +"  "+ this.apellido + "("+ this.edad +")");
    // }
}
/* supogamos que se necesitan agregar propiedades o metodos a un objeto, del tipo Persona() pero no se puede
definir dentro del propio objeto */
// Persona.prototype.pais = "Colombia"; /* esto es un ejemplo incluyendo una propiedad a travez de un prototype */
var vio = new Persona();
// vio.imprimirInfo();
// console.log(vio);
/* cuando es llamada una propiedad que no se encuentra definida dentro del objeto, lo primero que va hacer
es mirar en la sección de los _proto_(prototype), si encuentra la propiedad, metodo, funcion ahi la va a ejecutar
o la va traer y termina */
// console.log(vio.pais);
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* NOTA: los protype por lo general no se utilizan para incluir propiedades dentro de un objeto ya definido es
decir a variables primitivas,porque no sabemos en que parte de nuestro javascript estarán
el objetivo de los prototipos es hacer mas eficiente el uso de los objetos */
Persona.prototype.imprimirInfo = function () { /* funcion tipo prototipo */
    console.log(this.nombre + "  " + this.apellido + "(" + this.edad + ")");
}
// console.log(vio.imprimirInfo());
/* no hay limites de prototypes */
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* metiendo un prototipo a las variables tipo number: */
Number.prototype.esPositivo = function(){
    if (this > 0) {
        return true;
    }else{
        return false;
    }
}








