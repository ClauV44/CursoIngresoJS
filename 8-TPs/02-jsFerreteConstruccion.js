/*Ejercicio 2 - Ferretería construcción  - TP's
Alumna: Claudia Vila*/

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var base;
var altura;
var perimetro;
var cantidadAlambre;

base= parseInt(document.getElementById('txtIdAncho').value);
altura= parseInt(document.getElementById('txtIdLargo').value);
perimetro= base*2 + altura*2;
cantidadAlambre= perimetro * 3;

alert("La cantidad necesaria de alambre es de " + cantidadAlambre + " metros.")

}
function Circulo () 
{

var radio;
const PI = Math.PI;
var perimetro;
var cantidadAlambre;

radio= parseInt(document.getElementById('txtIdRadio').value);
perimetro= 2 * PI *radio;
cantidadAlambre= perimetro * 3;

alert("La cantidad necesaria de alambre es de " + cantidadAlambre.toFixed(2) + " metros.")

}
function Materiales () 
{
	
var base;
var altura;
var superficie;
var cantidadCemento;
var cantidadCal;

base= parseInt(document.getElementById('txtIdAncho').value);
altura= parseInt(document.getElementById('txtIdLargo').value);
superficie= base*altura;
cantidadCemento = superficie *2;
cantidadCal = superficie * 3;

alert(`La superficie indicada de ${superficie} metros cuadrados, requiere de ${cantidadCemento} bolsas de cemento y de ${cantidadCal} bolsas de cal`); 
}