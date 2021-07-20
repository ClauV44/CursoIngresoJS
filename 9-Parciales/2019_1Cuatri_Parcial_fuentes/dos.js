/*Parcial dos - 2019
Alumna: Claudia Vila*/


function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var sumaPeso;
  var promedioPeso;

  nombre1= prompt ("Inserte su nombre");
  nombre2= prompt("Inserte nombre de su pareja");
  peso1= parseInt(prompt ("Indique su peso corporal"));
  peso2= parseInt(prompt ("Indique el peso de su pareja"));

  sumaPeso= peso1 + peso2;
  promedioPeso= sumaPeso /2;

  alert(`Ustedes se llaman ${nombre1} y ${nombre2}. Pesan ${peso1} y ${peso2} kilos, respectivamente, que sumados son ${sumaPeso} kilos y el promedio de peso es de ${promedioPeso} kilos.`);







}
