/*Ejercicio 8 - entrada salida
Alumna: Claudia Vila*/

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Definimos variables 
	let dividendo;
	let divisor;
	let resultado;
	
//Obtenemos los datos de la pagina html y los convertimos a numero entero
	dividendo= parseInt(document.getElementById('txtIdNumeroDividendo').value);
	divisor= parseInt(document.getElementById('txtIdNumeroDivisor').value);

	//Resolver módulo para tener el resto
	resultado= dividendo % divisor;
	
	alert("El resto es" + resultado);
}
