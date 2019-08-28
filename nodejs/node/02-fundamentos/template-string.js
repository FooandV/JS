 let nombre = 'Deadpool';
 let real = 'Wade Winston';

 console.log(nombre + ' ' + real);
 
 /* se puede hacer la concatenacion de una manera mas simple usando
 templates literales: inyectando backtics*/
 console.log(`${nombre} ${real}`);

 let nombreCompleto= nombre + ' ' + real;
 let nombreTemplate= `${ nombre } ${ real }`;

 console.log(nombreCompleto === nombreTemplate);

 function getNombre(){
     return `${ nombre } ${ real }`;
 }
 console.log(`El nombre de: ${getNombre()}`);