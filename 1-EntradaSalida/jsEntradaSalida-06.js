/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Definir variables
	var uno;
	var dos;
	var suma;
	
	//cargar datos de entrada y pase de datos a numeros 
	uno= parseInt(document.getElementById("txtIdNumeroUno").value);
	dos= parseInt(document.getElementById("txtIdNumeroDos").value);

//suma de ambas variables de datos, ahora numericos.
	suma= uno + dos;

//Disaparar cuadro de dialogo Alert
	alert(suma);
}

