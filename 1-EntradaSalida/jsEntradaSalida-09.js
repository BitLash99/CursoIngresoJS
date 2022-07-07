/*
Alan Molina
Curso Ingreso División Y
E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let ingresesueldo = parseInt(document.getElementById("txtIdSueldo").value);
	let resultado = ingresesueldo * 1.10;
	document.getElementById("txtIdResultado").value = resultado;	
}
