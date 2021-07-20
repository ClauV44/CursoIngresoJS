/*Ejercicio 8 - Switch
Alumna: Claudia Vila */


function mostrar()
{
	var destino;
	destino = document.getElementById("txtIdDestino").value;
	
	switch (destino) 
	{
		case "Bariloche":
		      alert ("En este destino hace frío.");
		      break;
		case "Cataratas":
		      alert ("En este destino hace calor.");
		      break;
		case "Mar del plata":
		      alert ("En este destino hace calor.");
		      break;
		case "Ushuaia":
		      alert ("En este destino hace frío.");
		      break;                                                                                                                                                                     
	}

}//FIN DE LA FUNCIÓN