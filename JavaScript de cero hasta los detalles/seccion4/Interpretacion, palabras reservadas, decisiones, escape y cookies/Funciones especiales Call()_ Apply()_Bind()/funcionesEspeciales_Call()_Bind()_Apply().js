

var carro= {

    color: "Blanco",
    marca: "Mazda",
    imprimir: function () {
        var salida= this.marca + "-" + this.color
        return salida;
    }

}

console.log(carro.imprimir());

var logCarro = function (arg1, arg2) {
    console.log("carro: ", this.imprimir());
}
logCarro();

var logModeloCarro



