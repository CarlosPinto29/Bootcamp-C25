// Tipos de datos primitivos en JavaScript

let variableString = "Soy un texto"; // Las cadenas de texto deben estar en comillas
let variableNumber = 32; // Number puede ser tipo entero o flotante (con decimales)
let variableBoolean = true; // puede ser true o false
let variableNull = null; // Esta variable tiene un valor y es nulo 
let variableUndefined; // Esta variable fue declarada pero nunca se asigno un valor

// Diferencia de null y undefined
console.log(variableUndefined);
console.log(variableNull);

// Tipos de datos objetos, colecciones de datos en una variable, datos más complejos. 

// Tipo de dato objeto clave:valor. Se utiliza llaves {}. 
let variableObjeto = {
    nombre: "Felipe", // nombre es clave y "Felipe" es el valor, cada propiedad del objeto se divide en comas. 
    edad: 46,
    comuna: "Maipu",
    pedidoSupermercado: []
}
console.log(variableObjeto); 

// Tipo de dato array lista de datos. Se utiliza corchetes [].
let variablesArray = ["Elemento1", 2, true, "Elemento4", []]
console.log(variablesArray);

// Para verificar el tipo de dato de una variable usamos typeof(nombreVariable).
console.log(typeof(variablesArray));
console.log(typeof(variableObjeto));
console.log(typeof(variableString));
console.log(typeof(variableNumber));
console.log(typeof(variableBoolean));
console.log(typeof(variableNull)); // Nota que null indica un valor objeto, investigar la razón
console.log(typeof(variableUndefined));

// Se dice que JS es tipado debil y dinamico
let a = "texto"; // Aquí se declara variable tipo String
a = 4; // Aquí se reasigna variable tipo Number
a = true; // Aquí se vuelve a reasignar tipo boolean
// Por eso es dinamico, las variables tienen esa flexibilidad de ajustarse al tipo de dato que se le asigne

// Conversión automática de número a cadena
const resultado = 5 + "23"; // "523" (convierte el 5 a string y concatena)
const resta = "10" - 2; // 8 (convierte el "10" a número)
// Por eso es tipado debil, ya que realiza conversiones automaticamente, perdiendo el control del tipado declarado.
