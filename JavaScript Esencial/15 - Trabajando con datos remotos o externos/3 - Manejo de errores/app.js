"use strict";

//********************************
//*** Manejo de errores
/*  que sucederia si los servicios que estamos consumiendo no estan disponibles o los datos
tienen alguna mala información o simplemente no tenemos acceso a internet y por lo tanto
no podemos consumir datos */

var boton = document.getElementById('boton');
var mensajes = document.getElementById('mensajes');
var contenedor = document.getElementById('contenedor');
var contBanderas = document.getElementById('banderas');

boton.addEventListener('click', function () {
    getPosts()
        .then(data => data.json())
        .then(posts => {
            mostrarDatos(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            mostrarBanderas(countries);
        })
        /* capturar los errores */
        .catch(error => {
            /* se utiliza el metodo classList.toggle para poder remover la clase, el toggle es un
            metodo del DOM que lo que va hacer es remover o agregar la clase segun se necesite */
           mensajes.classList.toggle('hide'); 
           /* vamos a mandar el mensaje de error para que se muestre en esa parte de mensajes en el
           HTML,*/
           mensajes.innerHTML = error;/* entonces se le manda el error que se esta recibiendo como
           parametro en la funcionArrow */
           /* posterior a esto vamos a ocultarlo: */
            /* se usa un truco: */
            setTimeout(() => mensajes.classList.toggle('hide'), 6000 );
        })
        
       
});

function getPosts() {
    return fetch('http://jsonplaceholder.typicode.com/posts');
}

function getCountries() {
    return fetch('https://restcountries.eu/rest/v2/all');
}

function mostrarBanderas(countries) {
    contBanderas.innerHTML = '';
    countries.map((country, i) => {
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}

function mostrarDatos(posts) {
    contBanderas.innerHTML = '';
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido = document.createElement('p');

        titulo.innerHTML = (i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}