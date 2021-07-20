/*Ejercicio 3 - Ferretería pinturas  - TP's
Alumna: Claudia Vila*/


/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var farenheit;
	var centigrados;
	

	farenheit= parseFloat(document.getElementById('txtIdTemperatura').value);
	centigrados= (farenheit -32)/1.8;


	alert(`Los ${farenheit} grados farenheit ingresados, equivalen a ${centigrados.toFixed(1)} grados centigrados`);



}

function CentigradosFahrenheit () 
{
	var farenheit;
	var centigrados;
	

	centigrados= parseFloat(document.getElementById('txtIdTemperatura').value);
	farenheit= centigrados * 1.8 + 32;


	alert(`Los ${centigrados} grados centigrados ingresados, equivalen a ${farenheit.toFixed(1)} grados centigrados`);


}
