
/* los objetos tiene propiedades y metodos son funciones dentro del objeto */
/* en javascript cada vez que un contexto de ejecucion es corrido se crea el objeto window */
/* a su vez tambien crea el objeto THIS  */

var nombre = "Violetta Otalvaro";

var persona={
    nombre: "freyder",
    apellido: "otalvaro",
    /* metodo: */
    imprimirNombre: function(){
        // console.log("Nombre completo");
        console.log(nombre); /* aca esta tomando es el nombre del objeto global osea Violetta Otalvaro */
        console.log(this.nombre, this.apellido); /* aca estamos haciendo referenica a las propiedades del objeto en si */
        
    },
    direccion:{
        pais: "Colombia",
        obtenerPais: function(){
            
            var self= this; /* esta variable esta apuntando al this afuera de donde esta el contexto de la nueva dirección,
                 el self es muy utilizado para reemplazar el this */

            var nuevaDireccion = function(){
                console.log(self); /* en este contexto el objeto this esta dentro del contexto "obtenerPais",
                resulta que este this esta apuntando afuera de todo el ambito del objeto y se va al objeto principal: window lo cual
                no seria correcto porque allá no existe la propiedad pais 
                para darle solución se debe declarar una variable self y asignarle el this del contexto que se esta
                trabajando */
                console.log("La nueva direccion es en: " + self.pais);

            }
            nuevaDireccion();

        }
    }
}
persona.imprimirNombre();
persona.direccion.obtenerPais();
