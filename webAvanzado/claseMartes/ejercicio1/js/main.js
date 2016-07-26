$(document).on("ready", principal);

function principal(){
	$("#menu-galeria li img").on('click', mostrarImagen);
  $('.tache').on('click', ocultarImagen);
  $('.generar-btn').on('click', generarInput);
  
}


function mostrarImagen(){
	//Instrucciones para que se muestre
	console.log(this);
  var nombre = $(this).attr('alt');
  //console.log(nombre);
  var direccion = 'img/' + nombre + '.jpg';
  //console.log(direccion);
  $('#imagen-principal').attr('src', direccion);
  $('.galeria-container').show(1000);	
}

function ocultarImagen(){
   $('.galeria-container').hide(1000);
}

function generarInput(){
  var tipo = $('#tipoInput').val();
  /*Generar el input*/
  var nuevoElemento = $('<input type="'+tipo+'">');

 /* Reemplazar el type por lo que el usuario escribio
  Insertarlo al DOM
  */
  $('.well').append(nuevoElemento);


}
