let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getInfo: function(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};
// console.log( deadpool.getInfo());

// Si solo se quisiera obtener el nombre o el apellido o el poder
//  del objeto "deadpool" en una variable aparte:
// let nombre= deadpool.nombre;
// let apellido= deadpool.apellido;
// let poder= deadpool.poder;

let { nombre, apellido, poder} = deadpool;
console.log(nombre, apellido, poder);