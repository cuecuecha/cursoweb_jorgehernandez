/*$(document).ready(function() {
  $("p").click(function(){
    $(this).hide();
  });
});*/

$(document).on("ready",principal);
    /*Instrucciones*/
//$(document).ready(/*instrucciones*/); /*dos formas de cargar*/


//console.log(  $('p').html();

//función o método con nombre
/*function principal(){
  //instrucciones
  $('.enviar').on("click", bienvenida);
  $('.enviar').on("click",desaparecer);
}*/

//funcion anonima
//function(){
  //instrucciones
//}

/*function bienvenida(){
  $('.contenedor-bienvenida').html("Bienvenido, Jorge");
}*/

/*function desaparecer(){
  $("p").hide();
}*/

function principal(){
  $("#enviar").on('click', validarSesion);
}


function validarSesion(){
  var usuario = $('#nombreUsuario').val();
  $('#contenedor').html("Bienvenido " + usuario);
}


/*-----Presionando la tecla enter-----*/
function validar(e)
{
  if (window.event) {
    keyval=e.keyCode
  }else if (e.which) {
    keyval=e.which
  }
   
  if (keyval=="13") {
    var usuario = $('#nombreUsuario').val();
    $('#contenedor').html("Bienvenido " + usuario);
  }
}