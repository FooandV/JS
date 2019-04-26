
/* el valor por defecto de los booleanos va ser false si y solo si es 0, -0, null, false, NaN, undifined y un 
string vacio ""*/
var a = new Boolean("false");
console.log(a);

var b = new Boolean();
console.log(b.valueOf());

if(b){/* en esta decisión se esta diciendo que si b tiene algun valor va entrar en el if */
    console.log("Me imprimi!!");
}

/* ahora realizando la prueba con c */
var c = new Boolean();  
console.log(c);
/* si se necesita evaluar como un objeto es asi para que pueda entrar la if */
if (c.valueOf()){
    console.log("Me imprimi");
}

