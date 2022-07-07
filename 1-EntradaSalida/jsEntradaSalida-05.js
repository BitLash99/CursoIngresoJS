/*
Alan Molina
Curso Ingreso División Y
E/S 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let Sunombre;
	Sunombre = document.getElementById("txtIdNombre").value;
	let Suedad;
	Suedad = document.getElementById("txtIdEdad").value;
	alert(" Usted se llama "+Sunombre+" y su edad es " + Suedad+" años "); 
}

