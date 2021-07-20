/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()

{
// Reservo espacio en la memoria para guardar nombre de usuario
var nombre;


// Se guarda la variable "nombre" escrita por el usuario, dentro de la ventana prompt
nombre= prompt("ingresar el nombre");

//Copio el nombre obtenido en el prompt, en el espacio de la caja de texto de la página html
document.getElementById('txtIdNombre').value= nombre;
	
}

