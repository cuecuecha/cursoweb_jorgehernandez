$(document).on("ready",principal);


function principal(){
  $("#envio").on('click', desaparecer);
}

function desaparecer(){
  $('#desaparece').hide();
  generaReserva();
}

	

	

	
function generaReserva(){

	var noMesa = $('#noMesa').val();
	var persona = $('#noPersona').val();
	var nino = $('#noNino').val();
	var tamano = $('#noTamano').val();/*tamaño de la pizza*/
	var pizza = $('#noPizza').val();/*cuantas pizzas eligio*/
	var sabor = $('#noPlatillo').val();
	var notas = $('#notas').val();
	var total = $('#total').val();
	var aux;

	$('#comprobante').html("Comprobante");
	$('#genera').html("Numero de Mesa: " + noMesa);
	$('#persona').html("Numero de Personas: " + persona);
	$('#nino').html("Numero de Niños: " + nino);
	$('#noPizzas').html("Número de pizzas: " + pizza);
	$('#tamano').html("Tamaño: " + tamano);
	$('#platillo').html("Pizza: " + sabor);
	$('#adicional').html("Notas: " + notas);
	

	if (tamano == "Chica") {
		aux = pizza * 100;
		$('#total').html("Total a pagar: $ " +aux+ ".00");
	}else if(tamano == "Mediana"){
		aux = pizza * 200;
		$('#total').html("Total a pagar: $ " +aux+ ".00");
	}else{
		aux = pizza * 250;
		$('#total').html("Total a pagar: $ " +aux+ ".00");
	}
}
