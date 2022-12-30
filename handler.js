'use strict';

module.exports.helloworld = async (event,context,callback) => {
  const response = {
    statusCode: 200,
    condicion=3
    body: JSON.stringify(
      {
               
        message: "printHelloWorld()",
        input: event,
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
