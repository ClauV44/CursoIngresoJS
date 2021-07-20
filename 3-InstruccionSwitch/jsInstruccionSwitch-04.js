/* Ejercicio 4 - Switch
Alumna: Claudia Vila */

function mostrar()
{
	 var mes;
    mes = document.getElementById("txtIdMes").value;

    switch (mes) 
    {
    	case "Febrero":
    	      alert ("Este mes tiene 28 días.")
    	      break;

    	case "Enero":
    	case "Marzo":
    	case "Mayo":
    	case "Julio":
    	case "Agosto":
    	case "Octubre":
    	case "Diciembre":
    	      alert("Este mes tiene 31 días.");
    	      break;
    	
    	default:
    	       alert("Este mes tiene 30 días");
    }
       
}//FIN DE LA FUNCIÓN