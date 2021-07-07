/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var uno;
	var dos;
	var suma;

	uno= document.getElementById('txtIdNumeroUno').value;
	dos= document.getElementById('txtIdNumeroDos').value;
	suma= "el resultado es " + (parseInt(uno)+ parseInt(dos));

	alert(suma);	
}

function restar()
{
	var uno;
	var dos;
	var resta;

	uno= document.getElementById('txtIdNumeroUno').value;
	dos= document.getElementById('txtIdNumeroDos').value;
	resta= "el resultado es " + (parseInt(uno)- parseInt(dos));

	alert(resta);	
}

function multiplicar()
{ 
	var uno;
	var dos;
	var multiplicacion;

	uno= document.getElementById('txtIdNumeroUno').value;
	dos= document.getElementById('txtIdNumeroDos').value;
	multiplicacion= "el resultado es " + (parseInt(uno)* parseInt(dos));

	alert(multiplicacion);	
}

function dividir()
{
	var uno;
	var dos;
	var division;

	uno= document.getElementById('txtIdNumeroUno').value;
	dos= document.getElementById('txtIdNumeroDos').value;
	division= "el resultado es " + (parseInt(uno)/ parseInt(dos));

	alert(dividir);	
}


