/*Ejercicio 8 - instrucciónIf
Alumna: Claudia Vila*/

function mostrar()
{
	var edad;
    var estado;

    edad=parseInt(document.getElementById("txtIdEdad").value);
    estado= document.getElementById("estadoCivil").value;

    if (edad > 18 && estado == "Soltero") 
    {
    	alert ("Es soltero y no es menor.");
    }
}

