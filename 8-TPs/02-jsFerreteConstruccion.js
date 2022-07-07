/*Alan Molina
Curso Ingreso División Y
TP Ferrete Construcción
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);
    let ancho;
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);
    let alambre;
    alambre= (largo + ancho) * 3;
    alert("la cantidad de alambre a usar es de:"  + alambre);
}
function Circulo () 
{
	let radio;
    radio=document.getElementById("txtIdRadio").value;
    radio=parseInt(radio);
    let cantalambre;
    cantalambre=(radio * 2) * 3;
    alert(" La cantidad de alambre a utilizar es: "+cantalambre+" mts ");
}
function Materiales () 
{
	let largo;
    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);
    let ancho;
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);
    let area;
    area=largo+ancho;
    let cemento;
    cemento=parseInt(cemento);
    cemento=area*2;
    let cal;
    cal=parseInt(cal);
    cal=area*3;
    alert(" Usted necesita "+cemento+" bolsas de cemento,y "+cal+" bolsas de cal ");
}