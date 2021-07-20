/*Ejercicio 2 - instrucciónIf
Alumna: Claudia Vila*/


function mostrar()
{
	var edad;
	edad= parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) 
	{
		alert ("Usted es mayor de edad al tener " + edad + " años");
	}
}