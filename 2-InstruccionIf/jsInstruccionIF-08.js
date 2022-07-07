function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("txtIdEdad").value;
edad=parseInt(edad);
var estadocivil;
estadocivil=document.getElementById("estadoCivil").value;
if((edad>17) && (estadocivil!="Casado") && (estadocivil!="Divorciado")){ 
    alert("Es soltero y no es menor");}
}
//FIN DE LA FUNCIÓN