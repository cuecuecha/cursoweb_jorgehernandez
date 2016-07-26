$(document).on("ready", principal);

function principal(){
  $('#enviar').on('click', enviarMensaje);
  $('#enviar2').on('click', enviarMensaje2);
  
}



function enviarMensaje(){
  var nuevo_mensaje = $('#chat').val();
  var mensaje = nuevo_mensaje;
  $('#contenedor').append("Alejandro dice: "+mensaje+"<br>");
}

function enviarMensaje2(){
  var new_mensaje = $('#chat2').val();
  console.log(new_mensaje);
  var mensaje2 = new_mensaje;
  $('#contenedor').append("<P ALIGN=right>"+"Humberto dice: "+mensaje2+"<br>");
}