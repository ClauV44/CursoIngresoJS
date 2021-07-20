/*Ejercicio 1 - while
Alumna: Claudia Vila */

/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var numero;

	numero=0;

	while(numero < 10) 
	{
		numero++;
		alert (numero);
		//console.log(numero); //Aparece impreso en la consola de la pagina, no para el usuario
	}
}//FIN DE LA FUNCIÓN