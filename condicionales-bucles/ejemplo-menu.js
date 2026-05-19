
const prompt = require("prompt-sync")(); 

let opcion = "";

while (opcion !== "3") {

    console.log("\n=== MENÚ ===");
    console.log("1. Admin");
    console.log("2. Usuario");
    console.log("3. Salir");

    opcion = prompt("Seleccione una opción: ");

    switch(opcion) {

        case "1":
            console.log("Acceso total");
            break;

        case "2":
            console.log("Acceso levemente restringido");
            break;

        case "3":
            console.log("Programa finalizado");
            break;

        default:
            console.log("No tiene acceso.");
    }
}