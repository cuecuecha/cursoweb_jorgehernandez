var nombre=" ";
var apellido=" ";

$(document).on("ready",enviar);


function enviar(){
	$("#envio").on("click",login);
	
}

function login() {
	var name = $("#nombre").val(); 
	var ape = $("#apellido").val();
	if (name = " " && ape=" ") {
		alert("Falta llenar un campo")
	}
	/*window.location= "index.html";*/
}

