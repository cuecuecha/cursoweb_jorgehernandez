var usuario = "hdzcuecuecha@gmail.com";
var pass = "hola";

$(document).on("ready",enviar);

function enviar(){
	$("#envio").on("click", login);
}

function login() {
	var correo = $("#usuario").val(); 
	var contra = $("#pass").val();

	if (correo == usuario && contra==pass) {
		alert("Inicio de sesión correcto")
		window.location.href = "https://www.youtube.com/watch?v=Eg4EpiWy4p0";
	}else {
		alert("Inicio de sesión incorrecto")
	}
}