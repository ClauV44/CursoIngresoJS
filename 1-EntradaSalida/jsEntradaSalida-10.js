/*Ejercicio 10 - entrada salida
Alumna: Claudia Vila*/

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Variables
	var importe;
	var descuento;
	var total;

	//Tomamos los datos del id, y los convertimos en numeros
importe= parseFloat(document.getElementById('txtIdImporte').value);

//Calcular descuento
descuento= importe * .25;

/*10 bis: calcular importe con descuento en prompt
descuento= prompt("inserte el porcentaje de descuento");
descuento= descuento * importe;*/

//calcular total 
total= importe - descuento;

//Mostrar en el cuadro de texto, el total con descuento

document.getElementById('txtIdResultado').value = total;


}
