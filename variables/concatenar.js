// Concatenar es unir una cadena de texto con una variable u otra cadena de texto

console.log("Esta es una cadena de texto. " + "Esta es otra. " + "Debes agregar espacio al inicio y al final de las comillas");

console.log("Esta es una cadena de texto.", "Esta es otra.", "No es necesario agregar espacios.");

console.log(`Esto es una cadena de texto, usar comillas invertidas me ayuda a agregar código js dentro de esta cadena usando $ y {}`);

// Ejemplos con variables

let edad = 63;
console.log("Tengo " + edad + " años."); // Notese los espacios que se agregan
console.log("Tengo", edad, "años."); // No hace conversión automatica
console.log(`Tengo ${edad} años.`);
