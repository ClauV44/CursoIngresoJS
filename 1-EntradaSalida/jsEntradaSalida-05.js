/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Guardamos espacios de datos para nombre y edad del usuario
	var nombre;
	var edad;

	//Se evocan los datos (ID) de la caja de texto de la página html

nombre= document.getElementById('txtIdNombre').value;
edad= document.getElementById('txtIdEdad').value;


// Se dispara ventana emergente con la información solicitada, de forma concatenada

	alert("El usuario se llama " + nombre + " y su edad es de " + edad + " años.");
}

