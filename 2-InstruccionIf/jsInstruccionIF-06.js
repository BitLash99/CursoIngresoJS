function mostrar()
{
	//tomo la edad  
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	if(edad>=18)
	{
	alert("es mayor de edad");
	}
	 else
		{if((edad<=17)&&(edad>=13)){
			alert("es adolescente ");}
			else
		{
			alert("es niño");
		}
		}

}//FIN DE LA FUNCIÓN