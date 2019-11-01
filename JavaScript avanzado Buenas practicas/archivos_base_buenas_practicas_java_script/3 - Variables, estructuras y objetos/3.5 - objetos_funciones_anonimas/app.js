/* trabajar con funciones anonimas es una actividad muy comun
dentro de javascript, pero tiene un pequeño problema,
cuando empezamos hacer uso de muchas funciones anónimas, o funciones
anónimas anidadas y otras funciones anónimas anidadas dentro de una
función anónima ya anidada suele ser una práctica muy común, pero es
una práctica que puede mermar en nuestro proceso depuración, 
mantenimiento, pruebas o rehuso del código que nosotros estemos
trabajando, por tanto:
Es recomendable crear un objeto donde estemos definiendo tanto propiedades
y métodos */


var tienda = {
    nombre: "Tienda las 4 esquinas",
    calcular: function(costo1, costo2) {
        return costo1 + costo2;
    },
    saludar: function() {
        var mensaje = "Hola ";
        return mensaje;
    }
};


console.log(tienda.nombre);
console.log(tienda.calcular(20, 32));
console.log(tienda.saludar());

var btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener('click', function() {
    console.log(tienda.saludar());
});
