/*Ejercicio 7 - entrada salida
Alumna: Claudia Vila*/

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
//Asignamos los espacios en memoria para nuestros datos (variables)
	var uno;
	var dos;
	var suma;

//Tomamos los datos del ID del archivo html, los cuales los convertimos en numeros
	uno= parseInt(document.getElementById('txtIdNumeroUno').value);
	dos= parseInt(document.getElementById('txtIdNumeroDos').value);
	
//Realizamos la operación correspondiente en este caso con ambos datos obtenidos
	suma= uno + dos;

//Cuadro de diálogo emergente 
	alert(suma);	
}

function restar()
{
	//Asignamos los espacios en memoria para nuestros datos (variables)
	var uno;
	var dos;
	var resta;

//Tomamos los datos del ID del archivo html, los cuales los convertimos en numeros
	uno= parseInt(document.getElementById('txtIdNumeroUno').value);
	dos= parseInt(document.getElementById('txtIdNumeroDos').value);
	
//Realizamos la operación correspondiente en este caso con ambos datos obtenidos
	resta= uno - dos;

//Cuadro de diálogo emergente 
	alert(resta);	
}

function multiplicar()
{ 
	//Asignamos los espacios en memoria para nuestros datos (variables)
	var uno;
	var dos;
	var multiplicacion;

//Tomamos los datos del ID del archivo html, los cuales los convertimos en numeros
	uno= parseInt(document.getElementById('txtIdNumeroUno').value);
	dos= parseInt(document.getElementById('txtIdNumeroDos').value);
	
//Realizamos la operación correspondiente en este caso con ambos datos obtenidos
	multiplicacion= uno * dos;

//Cuadro de diálogo emergente 
	alert(multiplicacion);	
}

function dividir()
{
	//Asignamos los espacios en memoria para nuestros datos (variables)
	var uno;
	var dos;
	var division;

//Tomamos los datos del ID del archivo html, los cuales los convertimos en numeros
	uno= parseInt(document.getElementById('txtIdNumeroUno').value);
	dos= parseInt(document.getElementById('txtIdNumeroDos').value);
	
//Realizamos la operación correspondiente en este caso con ambos datos obtenidos
	division= uno / dos;

//Cuadro de diálogo emergente 
	alert(division);	
}


