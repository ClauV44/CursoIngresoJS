/*Ejercicio 1 - instrucciónIf
Alumna: Claudia Vila*/

function mostrar()
{
	var edad;

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if (edad==15) 
	{
		alert ("Niña bonita");
	}
	alert("Tu edad es de " + edad + " años.");
}