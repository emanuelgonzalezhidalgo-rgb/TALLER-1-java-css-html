//let a, b;

//a = 20;
//b = 10;

//console.log (a == b); //false
//console.log (a > b); //true
//console.log (a < b); //false

//let pais, edad;

//pais = prompt ("¿de que pais eres?");
//edad = prompt ("¿cual es tu edad?");

//if (pais == "colombia" && edad >= 18){
  //  document.writeln("eres ciudadano del pais: ", pais);
//}else {
  //  document.writeln("no eres ciudadano del pais: ", pais);
//}

// el operador || (OR) se utiliza para evaluar si al menos una de
// las condiciones es verdadera. Si alguna de las condiciones es
// verdadera, el resultado será verdadero. Por ejemplo:

let day, month, year;
let trimestre;

// Ciclo while: se repite hasta que los datos sean válidos
// día de 1 a 31, mes de 1 a 12 y año de 2000 a 2026
while (true) {
    day = prompt("ingrese el dia (1 a 31)");
    month = prompt("ingrese el mes (1 a 12)");
    year = prompt("ingrese el año (2000 a 2026)");

    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert("Ingrese solo numeros");
    } else if (day < 1 || day > 31) {
        alert("El dia debe estar entre 1 y 31");
    } else if (month < 1 || month > 12) {
        alert("El mes debe estar entre 1 y 12");
    } else if (year < 2000 || year > 2026) {
        alert("El año debe estar entre 2000 y 2026");
    } else {
        break; // datos válidos, salimos del ciclo
    }
}

// Calcular el trimestre según el mes
if (month >= 1 && month <= 3) {
    trimestre = 1;
} else if (month >= 4 && month <= 6) {
    trimestre = 2;
} else if (month >= 7 && month <= 9) {
    trimestre = 3;
} else {
    trimestre = 4;
}

document.writeln("Año: " + year + "<br>");
document.writeln("Dia: " + day + "<br>");
document.writeln("Pertenece al trimestre " + trimestre + " del año");