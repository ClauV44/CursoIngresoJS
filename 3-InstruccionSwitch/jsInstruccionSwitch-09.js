/* Ejercicio 9- switch
Alumna: Claudia Vila */

function mostrar()
{
	var precioBase;
	var estacion;
	var destino;
	var incremento;
	var descuento;
	var precioFinal;


	precioBase= 15000;
	estacion= document.getElementById("txtIdEstacion").value;
	destino= document.getElementById("txtIdDestino").value;
	incremento=0;
	descuento=0;



	switch (estacion) 
	{
		case "Invierno":
		      switch (destino) 
		      {
		      	case "Bariloche":
		      	     incremento = .2;
		      	     break;
		      	case "Mar del plata": 
		      	     descuento = .2;
		      	     break;	
		      	case "Cordoba":
		             descuento = .1;
		             break;
		        case "Cataratas":
		             descuento = .1;
		             break;
		       }
		break;       

		case "Verano":
		      switch (destino) 
		      {
		      	case "Bariloche":
		      	     descuento = .2;
		      	     break;	
		      	case "Mar del plata": 
		      	      incremento = .2;
		      	      break;
		      	case "Cordoba":
		      	      incremento = .1;
		      	      break;
		      	case "Cataratas":
		              incremento = .1;
		              break;		        	      
		      }
		break;      

		default:
		      switch (destino) 
		      {
		      	case "Cordoba":
		      	      precioBase;
		      	      break;
		      	case "Bariloche":
		      	      incremento= .1; 
		      	      break;
		      	case "Mar del plata":
		      	      incremento= .1; 
		      	      break;
		      	case "Cataratas":
		      	      incremento= .1; 
		      	      break;		      	         	      
		      }
    }
   
   if (descuento !=0) 
   {
   	    precioFinal= precioBase - precioBase * descuento;
   }
   else 
   {
   	     if (incremento != 0) 
   	     {
   	     	precioFinal = precioBase + precioBase * incremento;
   	     }
   	     else 
   	     {
   	     	precioFinal= precioBase;
   	     }
   }

alert ("El precio final para su viaje a " + destino + " en la estación " + estacion + " , es de $" + precioFinal); 
}//FIN DE LA FUNCIÓN