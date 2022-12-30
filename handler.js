'use strict';

module.exports.helloworld = async (event,context,callback) => {
  const response = {
    statusCode: 200,
    condicion=3
    body: JSON.stringify(
      {
               
        message: "printHelloWorld()",
        input: event,
    
    //programa que calcula el factoria de un número entero
 
var numero = prompt('Ingrese un número entero positivo:'); //ingreso 4 por ejemplo
 
for(i=1; i<=numero-1; i++){
var resultado=numero;
resultado = resultado * i
}
document.write(resultado);
// me devuelve como resultad 12
      },
      null,
      2
    ),
  };
callback(null,response)
};

function GCD(a,b){
 var result;
 
 if(a % b > 0){
  result = GCD( b, a % b );
 }else{
  result = b;
 }
 
 return result;
}
function printHelloWorld(){
  return "Hello World";
}
module.exports.printHelloWorld=printHelloWorld;
