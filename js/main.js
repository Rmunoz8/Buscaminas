 window.onload = function (){


//     Ocultando elementos ocultos
    document.getElementById("liReiniciar").style.display = "none";
    document.getElementById("dificultad").style.display = "none" ;
    document.getElementById("reglas").style.display = "none";

    let jugar = () =>{

        document.getElementById("reglas").style.display = "none";
        document.getElementById("liJugar").style.display = "none";
        document.getElementById("titulo").style.display = "none";
        document.getElementById("liReiniciar").style.display = "block";
        document.getElementById("dificultad").style.display = "block";

    }

     let reiniciar = () =>{

         document.getElementById("reglas").style.display = "none";
         document.getElementById("dificultad").style.display = "none" ;
         document.getElementById("liReiniciar").style.display = "none";
         document.getElementById("liJugar").style.display = "block";
         document.getElementById("titulo").style.display = "block";
     }

     let reglas = () =>{
         document.getElementById("titulo").style.display = "none";
         document.getElementById("dificultad").style.display = "none";
         document.getElementById("reglas").style.display = "block";
     }

    var botonJugar = document.getElementById("botonJugar");
    var botonReinicar = document.getElementById("botonReinicar");
    var botonReglas = document.getElementById("botonReglas");

    botonJugar.addEventListener("click", jugar, false);
    botonReinicar.addEventListener("click", reiniciar, false);
    botonReglas.addEventListener("click", reglas, false);

}
