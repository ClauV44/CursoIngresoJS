/*TPs ejercicio 1 Ferretería Facturación
Alumna: Claudia Vila*/

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ var producto1;
	var producto2;
	var producto3;
	var suma;

	producto1= parseInt(document.getElementById('txtIdPrecioUno').value);
	producto2= parseInt(document.getElementById('txtIdPrecioDos').value);
	producto3= parseInt(document.getElementById('txtIdPrecioTres').value);

	suma= producto1 + producto2 + producto3;

	alert("El total de los productos es de " + suma.toFixed(2) + " pesos.");


	
}
function Promedio () 
{
	var producto1;
	var producto2;
	var producto3;
	var promedio;

	producto1= parseInt(document.getElementById('txtIdPrecioUno').value);
	producto2= parseInt(document.getElementById('txtIdPrecioDos').value);
	producto3= parseInt(document.getElementById('txtIdPrecioTres').value);

	promedio= (producto1 + producto2 + producto3)/3;

	alert("El promedio total es:" + promedio.toFixed(2));


}
function PrecioFinal () 
{
	//variables
	var producto1;
	var producto2;
	var producto3;
	var total;
	var iva;
	var totalIva;

//tomar datos del id, y pasarlos a numero
	producto1= parseInt(document.getElementById('txtIdPrecioUno').value);
	producto2= parseInt(document.getElementById('txtIdPrecioDos').value);
	producto3= parseInt(document.getElementById('txtIdPrecioTres').value);

//sacar la suma de los productos sin IVA
	total= producto1 + producto2 + producto3;

	//Sacar el porcentaje de IVA
	iva= total *.21;

	// Sacar el total con el IVA incluido
	totalIva= total + iva;


	alert("El total con IVA incluido es de " + totalIva.toFixed(2) + "pesos.");
}