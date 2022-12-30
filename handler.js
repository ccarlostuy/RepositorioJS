'use strict';

module.exports.helloworld = async (event,context,callback) => {
  const response = {
    statusCode: 200,
    condicion=3
    body: JSON.stringify(
      {
        if(condicion==1){
          condicion=condicion+1
        message: printHelloWorld(),
        }
        
        message: printHelloWorld(),
        input: event,
      },
      null,
      2
    ),
  };
callback(null,response)
};
function printHelloWorld(){
  return "Hello World";
}
module.exports.printHelloWorld=printHelloWorld;
