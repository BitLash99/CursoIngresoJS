/*
Alan Molina
Curso Ingreso División Y
E/S 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let Númerouno = parseInt(document.getElementById("txtIdNumeroUno").value);
	let Númerodos = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resultado = Númerouno+Númerodos;
	alert ("la suma es "+resultado);
}
//parseint es una función para convertir a números enteros.
