const prompt = require("prompt-sync")(); 

console.log("#### WHILE ####")
/* 
while es una estructura de control que se utiliza para ejecutar un bloque de código repetidamente mientras una condición sea verdadera.
Su sintaxis es while(condición){bloque de instrucciones}
La condición debe cambiar para evitar bucles infinitos.
Usar break para romper la ejecución del bucle es una buena estrategia. 
*/

// En este ejemplo no se sabe cuantas veces se va a repetir
let contraseña = prompt("¿Cuál es tu contraseña? ");
while(true){
    if(contraseña != "1234"){
        console.log("Te equivocaste, vuelve a intentarlo");
        contraseña = prompt("¿Cuál es tu contraseña?");
    } else {
        console.log("Ingreso exitoso");
        break // Utilizamos break para terminar el bucle infinito
    }
}

// En este ejemplo se asemeja a un for, se sabe cuantas veces se repetirá
let contador = 0;
while(contador <= 5){
    console.log(contador);
    contador++ // Debe cambiar o si no bucle infinito 
}

console.log("#### FOR ####");
/* 
For se utiliza para ejecutar un bloque de código un número específico de veces.
Su sintaxis es for(inicio;condicion; incremento){bloque de código a ejecutar}
*/
for(let contador = 0; contador<= 5; contador++){
    console.log(contador);
}

// For para recorrer arrays
let frutas = ["Peras", "Manzanas", "Sandia"];
//               0         1           2

// Cada elemento de un array se puede declarar como variable en este caso fruta de frutas
// El of accede a los elementos
for(let fruta of frutas){  
    console.log(fruta);
}

// Cada posición del arreglo se puede acceder con for in
for(let posicion in frutas){
    console.log(posicion);
}