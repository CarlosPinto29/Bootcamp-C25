const prompt = require("prompt-sync")();


function suma(num1, num2){
    return num1 + num2;
}

function resta (num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1, num2){
    if (num2 === 0){
        console.log("No se puede dividir por 0 ")
    } else {
        return num1 / num2;
    }
}

function pedirNumero(){
    let numero;
    while(true){
        numero = Number(prompt("Ingresa un numero: "));
        if(!isNaN(numero)){
            return numero;
        } else {
            console.log("Debe ingresar un numero valido");
        }

    }
}

function ejecutarCaso(operacion){
    let resultado;

    let num1 = pedirNumero();
    let num2 = pedirNumero();
    resultado = operacion(num1, num2);
    return resultado;
}


function menu() {
    let opcion;

    while(opcion !== "5"){
        console.log(" ### CALCULADORA ### ")
        console.log("1. Sumar")
        console.log("2. Restar")
        console.log("3. Multiplicar")
        console.log("4. Dividir")
        console.log("5. Salir")

        opcion = prompt("Selecciona una opción");

        let numero1;
        let numero2;
        let resultado;

        switch(opcion){
            case "1":
                resultado = ejecutarCaso(suma);
                console.log(`Resultado: ${resultado}`)
                break;
            case "2":
                resultado = ejecutarCaso(resta);
                console.log(`Resultado: ${resultado}`)
                break;
            case "3":
                resultado = ejecutarCaso(multiplicar);
                console.log(`Resultado: ${resultado}`)
                break;
            case "4":
                resultado = ejecutarCaso(dividir);
                console.log(`Resultado: ${resultado}`)
                break;
            case "5":
                console.log("Saliendo....")
            default:
                console.log("Opcion invalida: ");
        }
        
    }
}

menu();