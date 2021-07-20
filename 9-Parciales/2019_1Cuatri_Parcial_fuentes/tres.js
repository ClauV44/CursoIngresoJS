/*Parcial tres - 2019
Alumna: Claudia Vila*/

function mostrar()
{

	var precio;
	var descuento;
	var precioFinal;

	precio= parseInt(prompt("inserte precio del producto"));
	descuento= parseInt(prompt ("Coloque el porcentaje de descuento que le fue otorgado (solo números)"));
	precioFinal= precio - precio* descuento/100;

	document.getElementById('elPrecioFinal').value=precioFinal;







}
