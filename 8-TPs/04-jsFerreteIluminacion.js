/*Ejercicio 4 - Ferretería iluminación  - TP's
Alumna: Claudia Vila*/


/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//1) IF IF

/*
function CalcularPrecio () 
{
    
const LAMPARA = 35;
var cantidad;
var marca;
var precioTotal;
var iibb;
var precioIibb;

cantidad= parseInt(document.getElementById("txtIdCantidad").value);
marca= document.getElementById("Marca");


if (cantidad>=6) 
{
    precioTotal= cantidad * (LAMPARA * .5);
    document.getElementById("txtIdprecioDescuento").value = precioTotal;
} 
if (cantidad == 5) 
{
    if (marca== "ArgentinaLuz") 
    {
        precioTotal= cantidad *(LAMPARA * .6);
        document.getElementById("txtIdprecioDescuento").value = precioTotal;
    }
    else 
    {
        precioTotal= cantidad * (LAMPARA *.7);
        document.getElementById("txtIdprecioDescuento").value = precioTotal;
    }
}if (cantidad ==4) 
{
    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
    {
        precioTotal= cantidad * (LAMPARA *.75);
        document.getElementById("txtIdprecioDescuento").value = precioTotal;
    }
    else 
    {
        precioTotal= cantidad * (LAMPARA * .8);
        document.getElementById("txtIdprecioDescuento").value = precioTotal;
    }
}
if (cantidad ==3) 
{
    if (marca == "ArgentinaLuz") 
    {
        precioTotal= cantidad * (LAMPARA * .85);
        document.getElementById("txtIdprecioDescuento").value = precioTotal;  
    }
    else 
    {
        if (marca == "FelipeLamparas") 
        {
            precioTotal= cantidad * (LAMPARA * .9);
            document.getElementById("txtIdprecioDescuento").value = precioTotal;
        }
        else 
        {          
            precioTotal= cantidad * (LAMPARA * .95);
            document.getElementById("txtIdprecioDescuento").value = precioTotal;   
        }
    }
}
if (cantidad <=2) 
{
    precioTotal= LAMPARA * cantidad;
    document.getElementById("txtIdprecioDescuento").value = precioTotal;
}

if (precioTotal >= 120) 
{
    precioTotal= cantidad * (LAMPARA * .9);
    document.getElementById("txtIdprecioDescuento").value = precioTotal;
    iibb= precioTotal *.1;
    precioIibb= precioTotal + iibb;
    alert ("Usted pagó $ "+ iibb + " de Ingresos Brutos");
}
else 
{
    alert ("Usted ha gastado " + precioTotal + " en su compra.");
}
}
*/


// Switch cantidad if marca 
function CalcularPrecio () 
{

const LAMPARA = 35;
var cantidad;
var marca;
var descuento;
var precioTotal;
var iibb;
var precioIibb;

cantidad= parseInt(document.getElementById("txtIdCantidad").value);
marca= document.getElementById("Marca");


switch(cantidad) 
{
    case 1:
    case 2:
    descuento=0;
    break;

    case 3:
    if (marca == "ArgentinaLuz") 
    {
        descuento = .15;
    }
    else 
    {
        if (marca == "FelipeLamparas") 
        {
             descuento= .1;
        }
        else 
        {
            descuento = .05;
        }
    }
    break;

    case 4:

    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
    {
         descuento= .25;
    }
    else 
    {
        descuento= .2;
    }

    break;

    case 5:

    if (marca == "ArgentinaLuz") 
    {
        descuento= .4;
    }
    else 
    {
        descuento= .3;
    }
    break;

    default:
    descuento= .5;
}
precioTotal= (LAMPARA - LAMPARA * descuento)*cantidad;
iibb= precioTotal * .1;
precioIibb= precioTotal + iibb;
document.getElementById("txtIdprecioDescuento").value = precioTotal;

if (precioTotal >= 120) 
{
    alert ("Usted pagó $ "+ iibb + " de Ingresos Brutos");
}
else 
{
    alert ("Usted ha gastado " + precioTotal + " en su compra.");
}
}


/*
//if de cantidad swicth de marca
function CalcularPrecio () 
{
    
const LAMPARA = 35;
var cantidad;
var marca;
var descuento;
var precioTotal;
var iibb;
var precioIibb;

cantidad= parseInt(document.getElementById("txtIdCantidad").value);
marca= document.getElementById("Marca");

if (cantidad >= 6) 
{
    switch (marca) 
    {
        default:
        descuento=.5;
    }
}
if (cantidad ==5) 
{
    switch (marca) 
    {
        case "ArgentinaLuz":
        descuento=.4;
        break;

        default:
        descuento=.3;
    }
}
if (cantidad==4) 
{
    switch (marca) 
    {
        case "ArgentinaLuz":
        descuento=.25;
        break;

        case "FelipeLamparas":
        descuento= .25;
        break;

        default:
        descuento= .2;
    }
}
if (cantidad==3) 
{
    switch (marca) 
    {
        case "ArgentinaLuz":
        descuento= .15;
        break;

        case "FelipeLamparas":
        descuento= .10;
        break;

        default:
        descuento= .05;
    }
}
precioTotal= (LAMPARA - LAMPARA * descuento)*cantidad;
iibb= precioTotal *.1;
precioIibb= precioTotal + iibb;
document.getElementById("txtIdprecioDescuento").value=precioTotal;

if (precioTotal >= 120) 
{
    alert ("Usted pagó $ "+ iibb + " de Ingresos Brutos");
}
else 
{
    alert ("Usted ha gastado " + precioTotal + " en su compra.");
}
}
*/


/*
//Switch switch

function CalcularPrecio () 
{
const LAMPARA = 35;
var cantidad;
var marca;
var descuento;
var precioTotal;
var iibb;
var precioIibb;

cantidad= parseInt(document.getElementById("txtIdCantidad").value);
marca= document.getElementById("Marca");

switch (marca)
{
    case "ArgentinaLuz":

    switch (cantidad)
    {
        case 1:
        case 2:
        descuento=0;
        break;

        case 3:
        descuento=.15;
        break;

        case 4:
        descuento=.25;
        break;

        case 5:
        descuento=.4;
        break;

        default:
        descuento=.5;
    }
    break;

    case "FelipeLamparas":

    switch (cantidad) 
    {
        case 1:
        case 2:
        descuento=0;
        break;

        case 3:
        descuento=.1;
        break;

        case 4:
        descuento=.25;
        break;

        case 5:
        descuento=.3;
        break;

        default:
        descuento=.5;
    }
    break;

    default:

    switch (cantidad) 
    {
        case 1:
        case 2:
        descuento=0;
        break;

        case 3:
        descuento =.05;
        break;

        case 4:
        descuento =.2;
        break;

        case 5:
        descuento=.3;
        break;

        default:
        descuento=.5;
    }
}
precioTotal= (LAMPARA - LAMPARA * descuento)*cantidad;
iibb= precioTotal *.1;
precioIibb= precioTotal + iibb;
document.getElementById("txtIdprecioDescuento").value=precioTotal;

if (precioTotal >= 120) 
{
    alert ("Usted pagó $ "+ iibb + " de Ingresos Brutos");
}
else 
{
    alert ("Usted ha gastado " + precioTotal + " en su compra.");
}
}
*/

