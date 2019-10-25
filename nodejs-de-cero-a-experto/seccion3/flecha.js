
// function sumar(a, b) {

//     return a+b;
// }

// let sumar= (a, b) =>  a+b;

// console.log(sumar(10, 20));

// let saludar = ()=>'Hola Violetta';
// console.log(saludar());


// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// let saludar =(nombre)=>`hola ${nombre}`;
// console.log(saludar('Violetta'));


/* otro ejemplo */
let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getInfo(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};
/* en funcion de flecha */


console.log(deadpool.getInfo());