/* cuando se escribe la funcion con mayuscula es indicativo de que es algo como una clase, es decir
una funcion de primera clase  */
function Jugador(nombre ){ 
    this.nombre = nombre ;
    this.pv = 100 ;/* puntos de vida */
    this.sp = 100; /* (special points) esto es una propiedad como una magia del jugador */
    /*metodos: */
    this.curar = function(jugadorObjetivo){/* este sera el personaje a quien se quiere curar */
        /* solo se puede tener la habilidad de curar si el jugador tiene mas de 100 puntos: */
        /* no seria bueno para nuestro juego que puedan curar aunque ya no tengan SP */
        if (this.sp >= 40){
            this.sp -= 40; /* 40 puntos de sp para poder curar */
            // jugadorObjetivo.pv = jugadorObjetivo.pv + 20; /* poder de curar en 20 puntos */
            jugadorObjetivo.pv  += 20;
        }else{
            console.info(this.nombre + " no tiene sp ");
        }

        this.estado(jugadorObjetivo);
    }
    this.tirarFlecha= function(jugadorObjetivo){
        if (jugadorObjetivo.pv > 40){
            jugadorObjetivo.pv -= 40; /* la flecha hara 40 pv(puntos de vida) de daño */
        }else{
            jugadorObjetivo.pv = 0;
            console.error(jugadorObjetivo.nombre + " Murio !!!")
        }
        this.estado(jugadorObjetivo);
    }
    /* metodo que se encargara de realizar todas las impresiones por consola para que no se llamando tanto console.log */
    this.estado = function(jugadorObjetivo){
        console.info(this);
        console.info(jugadorObjetivo);
    }
};
/* se definen los jugadores: */
var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");
console.log(gandalf);
console.log(legolas);
/* aca gandalf va curar a legolas: */
gandalf.curar(legolas);

