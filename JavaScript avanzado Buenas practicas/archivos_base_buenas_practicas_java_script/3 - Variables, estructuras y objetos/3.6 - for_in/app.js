
var persona = {
	nombre: "Freyder",
	email: "freyder@hotmail.com",
	gitHub: "fooandv",
	saludar: function(){
		return "Hola mundo"
	}
}

var dato = "";

for (dato in persona){
	console.log(dato, persona[dato]);
}