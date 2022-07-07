/*
Alan Molina
Curso Ingreso División Y
E/S 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
		let nombreIngresado;



		//nombreIngresado=txtIdNombre.value;

		nombreIngresado = document.getElementById("txtIdNombre").value;



		alert(nombreIngresado);

}

//txtIdNombre es el id asignado a la caja de texto que esta en formato html.