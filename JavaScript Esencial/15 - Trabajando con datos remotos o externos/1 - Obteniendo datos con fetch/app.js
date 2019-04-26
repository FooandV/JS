"use strict";

//********************************
//*** Obteniendo datos con fetch

var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
var posts = null;

boton.addEventListener('click', function(){
    /* fetch recibe la URL o link donde se encuentren
    todos nuestros datos, este metodo trabaja en base 
    a promesas(promise) las promise son funciones 
    donde se quedan esperando  a que pase algo, 
    lo mismo trabajan los datos dado que 
    van a solicitar la información a algun servicio remoto
    y van a quedar a la espera de esos datos*/
    fetch('http://jsonplaceholder.typicode.com/posts')
    /* then es porque se va hacer algo, entonces se debe
    preformatear los datos: */
    .then(data => data.json())/* este tipo de arrowFunctions
    hace el retorno inmediatamente. */
    /* cada que se accede a un .then es una promesa mas, entonces
    simplemente a travez de un arrowFunction voy a poder
    acceder a la información que yo ya tengo lista */
    .then(data =>{
        /* guardo la información retornada en una variable: */
        posts= data;
        mostrarDatos(posts);
    })
});

function mostrarDatos(posts){
    posts.map((post, i) => {
        let titulo = document.createElement('h1');
        let contenido= document.createElement('p');

        titulo.innerHTML =(i + 1) + " - " + post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
};