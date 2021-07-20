/*Ejercicio 3 - instrucciónIf
Alumna: Claudia Vila*/


function mostrar()
{
    var edad;
    edad= parseInt(document.getElementById("txtIdEdad").value);

    if (edad>=18) 
    {
    	alert("Usted es mayor de edad");
    }
    else 
    {
    	alert ("Usted es menor edad");
    }
    
    alert ("Usted tiene " + edad + " años");
}