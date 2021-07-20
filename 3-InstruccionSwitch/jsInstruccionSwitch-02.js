/*Ejercicio 2 - Switch
Alumna: Claudia Vila */

function mostrar()
{
	var mes;

	mes= document.getElementById("txtIdMes").value;

	switch (mes) 
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		alert ("Falta para el invierno");
		break;
		
        case "Julio":
		case "Agosto":
		alert ("¡Abrigate! Hace frío");
		break;
		
		default:
		alert ("¡Ya pasó el frío! ¡Ahora calor!" );
		break;        	
	}
}//FIN DE LA FUNCIÓN