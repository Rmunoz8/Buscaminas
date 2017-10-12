 window.onload = function (){


//     Ocultando elementos ocultos
    document.getElementById("liReiniciar").style.display = "none";
    document.getElementById("dificultad").style.display = "none" ;

    let jugar = () =>{

        document.getElementById("liJugar").style.display = "none";
        document.getElementById("titulo").style.display = "none";
        document.getElementById("liReiniciar").style.display = "block";
        document.getElementById("dificultad").style.display = "block";

    }

     let reiniciar = () =>{

         document.getElementById("liReiniciar").style.display = "none";
         document.getElementById("liJugar").style.display = "block";
     }

    var botonJugar = document.getElementById("botonJugar");
    var botonReinicar = document.getElementById("botonReinicar");

    botonJugar.addEventListener("click", jugar, false);
    botonReinicar.addEventListener("click", reiniciar, false);



}
