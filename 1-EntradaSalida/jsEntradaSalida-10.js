/*
Alan Molina
Curso Ingreso División Y
E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let ingreseimporte = parseInt(document.getElementById("txtIdImporte").value);
	let resultado = ingreseimporte * 0.25;
	document.getElementById("txtIdResultado").value = resultado;	
}
