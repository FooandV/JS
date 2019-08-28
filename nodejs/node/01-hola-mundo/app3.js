console.log('inicio del programa');

setTimeout(function(){
    console.log('primer Timeout');

}, 3000 );
setTimeout(function(){
    console.log('segundo Timeout');

}, 0 );
setTimeout(function(){
    console.log('tercer Timeout');

}, 0 );

console.log('fin del programa');