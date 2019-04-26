
var arr=[
    true,
    {
        nombre: "freyder",
        apellido: "otalvaro"
    },
    function(){
        console.log("estoy viviendo en un arreglo");
    },
    function(persona){
        console.log(persona.nombre + " " + persona.apellido);
    },
    [   
        "freyder",
        "Violetta",
        "Adriana",
        "Karen",
        [
            "Pedro",
            "Fernando",
            "Angela"
        ]
    ]

];
console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr [1].apellido);

arr[2]();/* estoy invocando la funcion anónima que esta dentro del arreglo */

arr[3](arr[1]);/* ejecutando la funcion anónima que se encuentra en la posición 3 del arreglo y se le manda 
como parametro el mismo arreglo en la posición 1 ya que es del tipo de objeto que se definio  */

console.log( arr[4][3] );/* con este ejemplo estoy tomando la posición 4 del arreglo principal y estoy tomando
del arreglo interno la posición 3 */

console.log(arr[4][4][2]);