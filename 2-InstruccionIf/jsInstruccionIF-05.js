/*Ejercicio 5 - instrucciónIf
Alumna: Claudia Vila*/

function mostrar()
{
	var edad;
	edad= parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 13 && edad <=17) 
	{
		alert("Eres adolescente. Tu edad es de " + edad + " años.");
	}
	else 
	{
		alert ("No eres adolescente. Tu edad es de " + edad + " años.");
	}
}