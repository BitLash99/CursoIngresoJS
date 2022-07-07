/*Alan Molina
Curso Ingreso División Y
TP Ferrete facturación.
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let preciouno;
    preciouno=document.getElementById("txtIdPrecioUno").value;
    preciouno=parseInt(preciouno);
    let preciodos
    preciodos=document.getElementById("txtIdPrecioDos").value;
    preciodos=parseInt(preciodos);
    let preciotres;
    preciotres=document.getElementById("txtIdPrecioTres").value;
    preciotres=parseInt(preciotres);
    let suma;
    suma=preciouno+preciodos+preciotres;
    alert("Su total es "+suma);
}
function Promedio () 
{
	let preciouno;
    preciouno=document.getElementById("txtIdPrecioUno").value;
    preciouno=parseInt(preciouno);
    let preciodos
    preciodos=document.getElementById("txtIdPrecioDos").value;
    preciodos=parseInt(preciodos);
    let preciotres;
    preciotres=document.getElementById("txtIdPrecioTres").value;
    preciotres=parseInt(preciotres);
    let promedio;
    promedio=preciouno+preciodos+preciotres/3;
    alert("Su promedio es "+promedio);
}
function PrecioFinal () 
{
	let preciouno;
    preciouno=document.getElementById("txtIdPrecioUno").value;
    preciouno=parseInt(preciouno);
    let preciodos
    preciodos=document.getElementById("txtIdPrecioDos").value;
    preciodos=parseInt(preciodos);
    let preciotres;
    preciotres=document.getElementById("txtIdPrecioTres").value;
    preciotres=parseInt(preciotres);
    let totalmasiva;
    totalmasiva=preciouno+preciodos+preciotres;
    alert("Su total más IVA es: "+totalmasiva*1.21);
}