// Este es mi programa de calculadora sencilla.
// Variables
let repetir;
let historial = [];
// Menu de opciones
do {
  let opcion = Number(
    prompt(
      `Bienvenido a la calculadora sencilla
      \nA continuacion elija la operacion que desee realizar
      \n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Historial`,
    ),
  );
  if (opcion >= 1 && opcion <= 4) {
    ejecutarOperacion(opcion);
  } else if (opcion === 5) {
    mostrarHistorial();
  } else {
    alert("Opcion no valida, intente con una correcta.");
  }
  repetir = confirm("Quisieras volver al menú principal?");
} while (repetir == true);

//Funciones
function ejecutarOperacion(tipo) {
  let continuar;
  do {
    let num1 = Number(prompt("Escriba el primer numero: "));
    let num2 = Number(prompt("Escriba el segundo numero: "));
    let resultado, simbolo;
    if (tipo === 1) {
      resultado = sumar(num1, num2);
      simbolo = "+";
    }
    if (tipo === 2) {
      resultado = restar(num1, num2);
      simbolo = "-";
    }
    if (tipo === 3) {
      resultado = multiplicar(num1, num2);
      simbolo = "*";
    }
    if (tipo === 4) {
      resultado = dividir(num1, num2);
      simbolo = "÷";
    }
    historial.push(num1 + simbolo + num2 + " = " + resultado);
    alert("Resultado de la operación: " + resultado);
    continuar = confirm("Deseas repetir la operacion?");
  } while (continuar == true);
}

function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  if (num2 === 0) return "No se puede dividir por cero. Indefinido.";
  return num1 / num2;
}

function mostrarHistorial() {
  if (historial.length == 0) {
    alert("No hay nada en el historial por el momento.");
  } else {
    let mensaje = "---Historial---\n";
    for (let i = 0; i < historial.length; i++) {
      mensaje += i + 1 + ".  " + historial[i] + "\n";
    }
    alert(mensaje);
  }
}
