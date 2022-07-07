function mostrar()
{
	//tomo la edad  
	let edad;
    edad = document.getElementById("txtIdEdad").value;
    edad = parseInt(edad);
    if(edad>=18)//si pasa esto
    {
        alert("eres mayor de edad ");//hace esto
    }
	else
	{
		alert("eres menor de edad");
	}
}//FIN DE LA FUNCIÓN