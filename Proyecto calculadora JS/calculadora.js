// Este es mi programa de calculadora sencilla.
// Menu de opciones
let num1;
let num2;
let repetir;
let pregunta;
let historial = [];

do {
  var opcion = Number(
    prompt(
      `Bienvenido a la calculadora sencilla
      \nA continuacion elija la operacion que desee realizar
      \n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Historial`,
    ),
  );

  //Switch con opciones
  switch (opcion) {
    //Suma
    case 1:
      do {
        num1 = Number(prompt("Escriba el primer sumando: "));
        num2 = Number(prompt("Escriba el segundo sumando: "));

        let suma = sumar(num1, num2);

        historial.push(num1 + " + " + num2 + " = " + suma);

        alert("El resultado de la suma es: " + suma);

        pregunta = confirm("Quisieras repetir la operacion?");
      } while (pregunta == true);
      repetir = confirm("Quisieras continuar con el programa?");
      break;
    //Resta
    case 2:
      do {
        num1 = Number(prompt("Escriba el Minuendo: "));
        num2 = Number(prompt("Escriba el Sustraendo: "));

        let resta = restar(num1, num2);

        historial.push(num1 + " - " + num2 + " = " + resta);

        alert("El resultado de la Diferencia es: " + resta);

        pregunta = confirm("Quisieras repetir la operacion?");
      } while (pregunta == true);
      repetir = confirm("Quisieras continuar con el programa?");
      break;
    //Multiplicacion
    case 3:
      do {
        num1 = Number(prompt("Escriba el Multiplicando: "));
        num2 = Number(prompt("Escriba el Multiplicador: "));

        let multiplicacion = multiplicar(num1, num2);

        historial.push(num1 + " * " + num2 + " = " + multiplicacion);

        alert("El resultado de la Multiplicacion es: " + multiplicacion);

        pregunta = confirm("Quisieras repetir la operacion?");
      } while (pregunta == true);
      repetir = confirm("Quisieras continuar con el programa?");
      break;
    //Division
    case 4:
      do {
        num1 = Number(prompt("Escriba el Dividendo: "));
        num2 = Number(prompt("Escriba el Divisor: "));

        if (num2 != 0) {
          var division = dividir(num1, num2);

          historial.push(num1 + " ÷ " + num2 + " = " + division);

          alert("El resultado de la Division es: " + division);
        } else {
          alert("No se puede dividir por 0");
        }
        pregunta = confirm("Quisieras repetir la operacion?");
      } while (pregunta == true);
      repetir = confirm("Quisieras continuar con el programa?");
      break;
    //Historial
    case 5:
      let mensaje = "---Historial---\n";
      for (let i = 0; i < historial.length; i++) {
        mensaje += i + 1 + ".     " + historial[i] + "\n";
      }
      alert(mensaje);
      break;
    //mensaje de error
    default:
      alert(
        "La opcion elegida no es correcta, por favor, intente con otro numero",
      );
      repetir = confirm("Quisieras continuar con el programa?");
      break;
  }
} while (repetir == true);
//Funciones
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
  return num1 / num2;
}
