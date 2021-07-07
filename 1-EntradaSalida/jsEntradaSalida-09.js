/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumento;
	var resultado;

	sueldo= parseInt(document.getElementById('txtIdSueldo');
		aumento= ((sueldo*0,1)/100);
		resultado= sueldo + aumento;
		document.getElementById('txtIdResultado').value;
		alert ("el nuevo sueldo es: " + document.getElementById('txtIdResultado').value);
		








/*
	sueldo= parseInt(document.getElementById('txtIdSueldo').value);
	aumento=parseInt(sueldo*0,1);
	resultado= sueldo + aumento;
	document.getElementById('txtIdResultado').value=resultado;

	alert (document.getElementById('txtIdResultado').value);
	
}


