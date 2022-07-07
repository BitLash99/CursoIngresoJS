function mostrar()
{
	//tomo la edad  
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	let estadocivil;
	estadocivil=document.getElementById("estadoCivil").value;
	if((edad<18) && (estadocivil!="Soltero")){
		alert("Es muy pequeño para no estar soltero");
	}
}
//FIN DE LA FUNCIÓN