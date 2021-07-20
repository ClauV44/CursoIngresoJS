/*Parcial 4 If- 2019
Alumna: Claudia Vila*/

function mostrar()
{
    var numero1;
    var numero2;

    numero1=prompt("Indique el primer número.");
    numero2=prompt("Indique el segundo número");

    if (numero1 == numero2) 
    {
        cuenta= numero1 + numero2;
    }

    else
    {
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);

        if (numero1>numero2) 
        {
            cuenta= numero1 - numero2;
        }
        else 
        {
            if (cuenta>10) 
            {
                alert("la resta es " + cuenta + "y superó el 10");
            }
            else 
            {
                cuenta= numero2+ numero1;
            }
        }
    }
alert(cuenta);

  



}

