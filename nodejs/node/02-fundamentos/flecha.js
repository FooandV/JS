
// function sumar(a, b) {

//     return a+b;
// }

// let sumar= (a, b) =>  a+b;

// console.log(sumar(10, 20));

// let saludar = ()=>'Hola Mundo';

// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// let saludar =(nombre)=>`hola ${nombre}`;
// console.log(saludar('Violetta'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getInfo(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};
console.log(deadpool.getInfo());