/**console.log("Hola JavaScript!");
document.write("<h1>Hola Clase!</h1>"+"<hr>"+"Hola a todos");/*Al 
documento le aplique las etiquetas, HR hace una division*/
/*var n = "Hola"; /*--var-- se ocupa cuando no tenemos idea de que tipo
                de variable se trata--->Es tipo CADENA*/
/*var x = 8; /*se sabe que x es un entero*/
/*var z = 3.5; /*es flotante*/
/*var y = 2;

console.log(x+z);
console.log(z+y);
console.log(n+x);
console.log(n+z);

/*
Operadores
= --Asignacion
+
-
*
%
++
-- 
*/
/*
Operadores Logicos
%%
||
!=
=== --> exactamente
*/

//document.write(1===true);


/***
Relacionales
<
>
>=
<=
**/
/*
numero1= 1;
numero2= 2;
resultado = numero2>numero1;
console.log(resultado)
*/

/*-------Cuadros de texto más comunes----*/
//alert("Hola otra vez!")/*Cuadros texto, mensaje al iniciar una pagina*/
//confirm("¿Todo Bien?");/*cuadro de texto, aparece Aceptar o Cancelar*/
//prompt("¿Cómo estas", "Bien");/*Cuadro de texto, aparece una linea para poner algo, 
                                /*el segundo valor es para poner el menesaje dentro del cuadro*/
//nombre = prompt("¿Cómo te llamas?");/*asiga a nombre lo que ingresa en el prompt*/
//console.log(nombre);//imprime en consola el nombre

/*-----Arreglos-------*/
/*var arreglo = [1,2,3,4];
console.log(arreglo);
console.log(arreglo [0]);

arreglo2 = [];
arreglo2.push(1);
arreglo2.push("hola");
arreglo2.push(2.58);
console.log(arreglo2);
arreglo2.pop();/*saca el ultimo elemento del arreglo*/
//console.log(arreglo2);

//var tamanio = arreglo.length;/*tamaño del arreglo*/
//console.log(tamanio);

//var arreglo3 = [60,123,32123,1];
//ordenado = arreglo3.sort();
//console.log(ordenado);

/*-------Funcional-------*/

//function Sumar(a,b){/*adentro de parentesis argumentos*/
/*  return a+b;
}

function Resta(a,b){
  return a-b;
}
console.log(Sumar(6,7));
console.log(Resta(6,7));*/

/*-------Sentencias de Control------*/
/*var edad = 17;
if (edad>=18) {
  alert("Eres Mayor de Edad!");
}else {
  alert("No eres mayor de edad");
}*/

/*var edad=18;
if (edad<=18) {
  alert("eres un niño");
}else if (edad<=30) {
  alert("Eres adulto joven")
}else if (edad<60) {
  alert("Eres adulto!")
}else {
  alert("Estas grande")
}*/

/*---FOR--*/
/*var arreglo = [1,2,3,4]
for(var i = 0; i<arreglo.length;i++){
  document.write(arreglo[i]);
}*/

/*---WHILE---*/
/*var arreglo = [1,2,3,4];
var i = 0;
while (i<4) {
    console.log(arreglo[i]);
      i++;
}*/

/*----POO----*/
function Persona(edad,nombre) {/*clase*/
   //atributos
   this.edad = edad;
   this.nombre = nombre;

   //metodos
   this.comer = function(){
      console.log("Estoy comiendo");
   }

}

var persona1 = new Persona(20, "Jorge");//instanciar
console.log("Hola me llamo:"+persona1.nombre);
console.log("Tengo "+persona1.edad+" años");
persona1.comer();/*metodo*/