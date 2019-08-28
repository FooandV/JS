// Let y var hacen lo mismo, lo que lo diferencia es como vive ese tipo 
// de variables

// let nombre = 'Wolverine'; //cuando se tienen variables con el nombre var
// // esta puede ser repizada o renombrada o reinicializar x cantida de veces
// // no importa donde se encuentre

// if (true){
//     // este let se encuetra en otro scope diferente
//      nombre = 'Magneto1';
//     console.log(nombre);
// }

// nombre = 'Magneto3';

// console.log(nombre);

// ******************** LET ********************************
// una de las principales caractiristicas de una variable declarada con let es que no se puede volver
// a inicializar

let i;
// cuando se usan ciclos:
for (let i = 0; i<= 5; i++){
    console.log(`i: ${i} ` );
}
console.log(i);