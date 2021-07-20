/*Ejercicio 7 - Switch
Alumna: Claudia Vila */

function mostrar()
{
	var destino;
	destino = document.getElementById("txtIdDestino").value;
	
	switch (destino) 
	{
		case "Bariloche":
		      alert ("Este destino está ubicado al oeste de nuestro país");
		      break;
		case "Cataratas":
		      alert ("Este destino está ubicado al norte de nuestro país");
		      break;
		case "Mar del plata":
		      alert ("Este destino está ubicado al este de nuestro país");
		      break;
		case "Ushuaia":
		      alert ("Este destino está ubicado al sur de nuestro país");
		      break;                                                                                                                                                                     
	}

}//FIN DE LA FUNCIÓN