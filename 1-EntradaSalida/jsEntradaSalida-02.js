/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{ 
	// Se determina espacio en memoria para esta variable de nombre de usuario
	var nombreDeUsuario;

//Se pide mediante prompt el dato requerido para que el usuario complete.
	nombreDeUsuario=prompt ("Primer nombre");
	console.log(nombreDeUsuario);
	
// Se dispara el Alert, o cuadro de dialogo, con este dato ingresado
	alert (nombreDeUsuario);

}

