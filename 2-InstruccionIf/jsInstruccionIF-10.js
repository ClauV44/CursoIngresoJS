/*Ejercicio 10 - instrucciónIf
Alumna: Claudia Vila*/

function mostrar()
{
	var nota;
	nota= parseInt(Math.random()*10)+1;

	if (nota <= 9 && nota ==10) 
	{
		alert( nota +" ¡EXCELENTE!");
	}
	else 
	{
		if (nota >= 4) 
		{
			alert ( nota + " Aprobado.");
		}
		else 
		{
			alert ( nota + " ¡Vamos! La próxima se puede");
		}
	}
}