/*Ejercicio 9 - entrada salida
Alumna: Claudia Vila*/

/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

//Variables

var sueldo;
var aumento;
var nuevoSueldo;


//Tomamos los datos del id, y los convertimos en numeros

sueldo= parseInt(document.getElementById('txtIdSueldo').value);

//calcular aumento 

aumento= sueldo * .1;

/* 9 bis
aumento= prompt("ingrese el porcentaje de aumento de sueldo");
aumento= aumento * sueldo;*/

//calcular el nuevo sueldo sumando sueldo y el aumento

nuevoSueldo = sueldo + aumento; 

//Poner el nuevo sueldo en el cuadro de texto "resultado"

document.getElementById('txtIdResultado').value = nuevoSueldo;


}













