/* Parcial cinco - cuatrimestre 2019 - Solo SWITCH
Alumna: Claudia Vila */

function mostrar()
{
	var dia;
	var estadia;
	var continente;
	var medioPago;
	var descuento;
	var recargo;
	var precio;
	var precioFinal;

	dia= 100;
	continente= document.getElementById("Marca").value;
	estadia= prompt("Ingrese la cantidad de días que desea irse de viaje.");
	medioPago= prompt("Ingrese el medio de pago que desea realizar. (Efectivo, Débito, Mercado Pago.");

	switch (continente) 
	{
		case "América":
		      switch(medioPago) 
		      {
		      	case "Débito":
		      	      descuento= .6;
		      	break;
		      	default:
		      	      descuento=.5;
		      }	
	    break;

	    case "África":
	          switch(medioPago) 
	          {
	          	case "Efectivo":
	          	case "Mercado Pago":
	          	      descuento=.75;
	          	break;

	          	default:
	          	       descuento=.6;
	          }
	    break;

	    case "Europa":
	          switch (medioPago) 
	          {
	          	case "Débito":
	          	      descuento=.35;
	          	break;
	          	
	          	case "Mercado Pago":
	          	      descuento=.3;
	          	break;
	          	
	          	default:
	          	      descuento=.25;	          	         
	          }  
        break;

        default:
               aumento=.2;
	}

precio=dia*estadia;

if (continente=="Europa" || continente=="América" ||continente=="África") 
{
	precioFinal=precio - precio*descuento;
	alert ("El precio final por su estadía en " + continente + " por " + estadia + " días, es de $" + precioFinal);
}
else 
{
	precioFinal= precio + precio*aumento;
	alert ("El precio final por su estadía en " + continente + " por " + estadia + " días, es de $" + precioFinal);
}
}
