/* Una función es un bloque de código diseñado para realizar una tarea particular.
Su sintaxis:
function nombreFuncion(parametros){instrucciones}
nombreFuncion(argumentos)
*/

const prompt = require("prompt-sync")(); 

// Forma 1 de crear una función
function saludar(){
    console.log("Hola Mundo desde una función normal");
}
saludar();

// Forma 2 de crear una función Anónima
let nombreFunción = function(){ 
    console.log("Hola Mundo desde función anónima");
}
nombreFunción();

// Forma 3 de crear una función flecha (arrow)
let funcion1 = () => {console.log("Hola Mundo desde una función flecha")};
funcion1();

// Tipo de dato function
console.log(typeof(saludar));

// Utilización de parametros
function saludarUsuario(nameUser, edad){
    console.log(`Hola ${nameUser}, tienes ${edad} años.`);
}

saludarUsuario("Felipe", 38);
saludarUsuario("Raul", 10);
saludarUsuario("Maria", 40);
saludarUsuario("Carla", 2);