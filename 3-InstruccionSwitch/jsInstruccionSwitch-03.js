/*Ejercicio 3 - Switch
Alumna: Claudia Vila */

function mostrar()
{
    var mes;
    mes = document.getElementById("txtIdMes").value;

    switch (mes)
    {
       case "Febrero":
             alert ("Este mes no tiene más de 29 días");
             break;

        default: 
              alert ("este mes tiene 30 días o más");
    }
}


/*
 case "Enero":
            alert("Este mes tiene 30 o más días");
            break;
        case "Febrero":
            alert("Este mes no tiene más de 29 días.");
            break;
        case "Marzo":
            alert("Este mes tiene 30 o más días");
            break;
        case "Abril":
            alert("Este mes tiene 30 o más días");
            break;
        case "Mayo":
            alert("Este mes tiene 30 o más días");
            break;
        case "Junio":
            alert("Este mes tiene 30 o más días");
            break;
        case "Julio":
            alert("Este mes tiene 30 o más días");
            break;
        case "Agosto":
            alert("Este mes tiene 30 o más días");
            break;
        case "Septiembre":
            alert("Este mes tiene 30 o más días");
            break;
        case "Octubre":
            alert("Este mes tiene 30 o más días");
            break;
        case "Noviembre":
            alert("Este mes tiene 30 o más días");
            break;
        case "Diciembre":
            alert("Este mes tiene 30 o más días");
            break;           
            */