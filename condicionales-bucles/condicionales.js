const prompt = require("prompt-sync")(); 
let rol = prompt('¿Cuál es tu rol? ')

/* 
If es una estructura de control que se utiliza para ejecutar un bloque de código si una condición dada es verdadera. 
Permite que un programa tome decisiones basadas en si una condición específica se cumple o no.
*/

/* Su sintaxis es if(condicion){ bloque de instrucciones } */

if(rol == "admin"){
    console.log("Acceso total");
} else if(rol == "usuario"){ // Se agrega condición adicional
    console.log("Acceso levemente restringido");
} else {
    console.log("No tiene acceso");
}

/* 
Switch (cambia) es una estructura de control que se utiliza para seleccionar uno de los muchos bloques de código a ejecutar.
*/

/* Su sintaxis es switch(expresión que cambia){case: instrucción} */

switch(rol){
    case "admin":
        console.log("Acceso total");
        break;
    case "usuario":
        console.log("Acceso levemente restringido");
        break;
    default:
        console.log("No tiene acceso.");
}

/* Es importante usar break, porque una vez que encuentra el caso, ejecuta todo las demás líneas. Fall through. */
