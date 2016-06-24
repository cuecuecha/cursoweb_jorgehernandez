

$(document).on("ready",enviar);


function enviar(){
	$("#envio").on("click", validarCampo);
	
}



function validarCampo() {
	
	var con = 0;
	var name = $("#nombre").val(); 
	var ape = $("#apellido").val();
	var correo = $("#correo").val();
	var num = $("#numero").val();
	var puesto = $("#puesto").val();
	var naci = $("#nacionalidad").val();
	var fecha = $("#fecha").val();
	var hora = $("#horario").val();
	var expe = $("#experiencia").val();
	var sucu = $("#sucursal").val();
	var por = $("#porque").val();

	if (name.length == 0) {
		con++;
		//alert("Falta llenar nombre");
	}else if (ape.length == 0) {
		con++;
		//alert("falta llenar apellido");
	}else if (correo.length == 0) {
		con++;
				//alert("falta llenar Correo Electrónico");
	}else if (num.length == 0) {
		con++;
		
		//alert("Falta llenar Número Telefónico");
	}else if (puesto.length == 0) {
		con++;
		
		//alert("Falta llenar Puesto");
	}else if (naci.length == 0) {
		con++;
		//alert("Falta llenar Nacionalidad");
	}else if (fecha.length == 0) {
		con++;
		//alert("Falta llenar Fecha de Nacimiento");
	}else if (hora.length == 0) {
		con++;
		;
		//alert("Falta llenar Horario Deseado");
	}else if (expe.length == 0) {
		con++;
		//alert("Falta llenar Sucursal Deseada");
	}else if (sucu.length == 0) {
		con++;
		//alert("Falta llenar Experiencia");
	}else if (por.length == 0) {
		con++;
		//alert("Aún no has puesto por qué quieres trabajar con nosotros")
	}

	if (con>=1) {
		alert("Has olvidado llenar un campo");
	}else{
		alert("Registro Satisfactorio");
		window.location= "index.html";
	}
	
	
}



	