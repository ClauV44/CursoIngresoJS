/*Ejercicio 4 - instrucciónIf
Alumna: Claudia Vila*/

function mostrar()
{
	var edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 13 && edad <= 17) 
	{
		alert("Eres adolescente");
	}
}