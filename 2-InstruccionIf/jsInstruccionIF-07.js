/*Ejercicio 7 - instrucciónIf
Alumna: Claudia Vila*/

function mostrar()
{
	var edad;
	var estado;

	edad= parseInt(document.getElementById("txtIdEdad").value);
	estado= document.getElementById("estadoCivil").value;

	if (edad < 18 && estado != "Soltero") 
	{
		alert ("Es muy pequeño para NO ser soltero.");
	}
	else 
	{
		alert ("Eres mayor de edad por tener " + edad + " y tu estado civil es " + estado);
	}
}

