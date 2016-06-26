/*obtenemos el contexto y canvas*/
var canvas = $('canvas'); /*eitqueta canvas*/
var context = canvas [0].getContext("2d");
var color = $('.selected').css('backgroud-color');/*pasar cualquier propiedad de css*/
var lastEvent;
var mousedown = false;


/*Controls*/
$('.controls').on("click","li", function()/*en vez de poner principal*/{

  $(this).siblings().removeClass("selected"); /* sibilings-->hermanos*/
  $(this).addClass("selected");
  color = $(this).css("background-color");
  /*imprime en la consola color*/
  //console.log(color);
});

/*cuando el boton de "color nuevo" se presiona*/

$('#revealColorSelect').click(function(){
  
  //mostrar u ocultar menú id = "colorSelect"
  $('#colorSelect').toggle();/*hace lo contrario en cuanto a mostrar y ocultar 
                               al dar click*/

  //Cambiar color
  /*Aqui se va a llamar la funcion que va a cambiar el color*/
  changeColor();
});

function changeColor(){

  var r = $('#red').val(); /*obtener el valor del SLIDE*/
  var g = $('#green').val();
  var b = $('#blue').val();

  $('#newColor').css('background-color', 'rgb('+r+','+g+','+b+')');

}

$('input[type=range]').change(changeColor);

/*Cuando presiones "agregar color"*/

$("#addNewColor").click(function(){
  //Crenado un elemento li
  var colorNuevo = $('<li></li>');
  colorNuevo.css('background-color', $('#newColor').css('background-color'));
  $('.controls ul').append(colorNuevo);/*insertar*/

});

//----Dibujar--
//mousedown // mousemove // mouseup //mouseleave
canvas.mousedown(function(event){
  lastEvent = event;/*guardar el ultimo evento*/
  mousedown = true; //
}).mousemove(function(e){
  if (mousedown == true) {

    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    //Escojo la geometria (linea) y muevo las coordenadas
    context.lineTo(e.offsetX, e.offsetY);
    //selecciono el color
    context.strokeStyle = color;
    //ejecuto el dibujo
    context.stroke();
    //el último evento es d el mousemove, no el del mousedown
    lastEvent = e;
  }

}).mouseup(function(){
  mousedown = false;
}).mouseleave(function(){
  mousedown = false;
}); 
