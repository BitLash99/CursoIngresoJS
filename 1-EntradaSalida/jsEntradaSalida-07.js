/*
Alan Molina
Curso Ingreso División Y
E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let Númerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let Númerodos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = Númerouno+Númerodos;
	alert (" la suma es  "+resultado);
}

function restar()
{
	let Númerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let Númerodos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = Númerouno-Númerodos;
	alert (" la resta es  "+resultado);
}

function multiplicar()
{ 
	let Númerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let Númerodos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = Númerouno*Númerodos;
	alert (" la multiplicación es  " + resultado);
}
function dividir()
{
	let Númerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let Númerodos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = Númerouno/Númerodos;
	alert (" la división es  " + resultado);
}

