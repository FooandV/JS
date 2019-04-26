"use strict";

//********************************
//*** Trabajando con promesas
/* muchas veces nuestras fuentes de datos pueden ser muchas,para ello se trabaja con
fetch para controlar el flujo de la información cuando viene de diferentes fuentes */
/* https://restcountries.eu para accedera información de todos los paises a nivel mundial 
utilizaremos el servicio: https://restcountries.eu/rest/v2/all */ /* regresa un json, 
tambien se utilizara el servicio: http://jsonplaceholder.typicode.com/posts */
var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

boton.addEventListener('click', function(){

    getPosts()/* como esta funcion me retorna un fetch entonces
    tengo acceso a una promesa */
    /* primero forteamos el texto que estamos recibiendo del servicio: */
        .then(data => data.json())
    /* entonces vamos a recibir los posts y utilizando un
    arrowFunction vamos a mandar la informaciòn primero a
    mostrar los datos */
        .then(posts => {
             mostrarDatos(posts);
             /* ahora se invoca el resultado de getCountries()
             aca en la promesa se puede invocar nuevas promesas, es decir una promesa puede
             detonar otra promesa y asi sucesivamente hasta cumplir el objetivo */
             return getCountries(); /* esto va esperar hasta que tengamos otra promesa escrita :) */

            })
            .then(data=> data.json())
            .then(countries => {
                mostrarBanderas(countries);
            })


});
/* funcion que al final estara retornando una promesa */
function getPosts(){
    return fetch('http://jsonplaceholder.typicode.com/posts');
}
/* funcion que al final estara retornando una promesa */
function getCountries(){
    return fetch('https://restcountries.eu/rest/v2/all');
}

function mostrarBanderas(countries){
    contBanderas.innerHTML ='';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width='20';
        bandera.height='20';
        contBanderas.appendChild(bandera);
    })
}
function mostrarDatos(posts){
    /*  map son estructuras de datos creadas a traves de una (clave,valor)*/
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido= document.createElement('p');

        titulo.innerHTML =(i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}

