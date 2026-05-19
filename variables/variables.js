// Esto es un comentario de una línea
/* 

Esto es un comentario de varias líneas

*/

// Para imprimir valores se utiliza console.log(valor que se necesita mostrar por consola) 
console.log("Hola Mundo")

// Variables: contenedores ("cajas") para almacenar datos que pueden ser referenciados, actualizados o reutilizados.
let nombreVariable = "valor";

/*
Sintaxis: utilizamos palabras reservadas let, const y var dependiendo de su uso. 
Se utiliza "=" para asignar un valor. El valor puede ser cualquier tipo de dato. 
*/

let userName = "Carla"; // let cuando el valor del usuario puede cambiar
const anioNacimiento = 1995; // const cuando la variable que trabajamos será constante durante el programa
var edad = 27; // var forma antigua de declarar

// Diferencia entre let y const
userName = "Felipe"; // Puede volver a reasignar a un nuevo valor. Ojo no se utiliza let porque ya se declaró en la línea 19, solo se declara una vez. 
console.log(userName); // Muestra valor de Carla -> Felipe
//anioNacimiento = 2002; // No se puede reasignar valor, si imprimo por pantalla arrojará error, porque se declaró como constante inicialmente. Comentar esta línea. 

// Diferencia entre let y var
if(true){
    let usoLet = "Let tiene alcancé de bloque";
    var usoVar = "Var puede ser usado dentro de todo el programa";
}
// console.log(usoLet); // Arroja error porque solo esta declarado dentro del bloque if. Comentar esta línea. 
console.log(usoVar); // Puede usarse fuera del bloque. 







