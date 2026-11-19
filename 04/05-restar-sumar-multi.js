//=====================================================
// EJERCICIO 5 - SUMA, RESTAS, MULTIPLICACION Y DIVISION DE 5 VALORES
// leer 5 valores y mostrar: la suma, la resta de los 3 primeros,
// la resta de los 2 ultimos, la multiplicacion de las 2 restas
// y la division de esa multiplicacion entre la suma
//=====================================================

// Buscamos en el html los 5 inputs y la caja de resultado (por su id)
const inputPrimero = document.getElementById("valor1");
const inputSegundo = document.getElementById("valor2");
const inputTercero = document.getElementById("valor3");
const inputCuarto = document.getElementById("valor4");
const inputQuinto = document.getElementById("valor5");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // si falta algún valor no se calcula
    if (
        inputPrimero.value === "" ||
        inputSegundo.value === "" ||
        inputTercero.value === "" ||
        inputCuarto.value === "" ||
        inputQuinto.value === ""
    ) {
        cajaResultado.textContent = "Escriba los 5 valores";
        return;
    }

    // lo que se escribe en un input es texto: Number() lo convierte a número
    const valor1 = Number(inputPrimero.value);
    const valor2 = Number(inputSegundo.value);
    const valor3 = Number(inputTercero.value);
    const valor4 = Number(inputCuarto.value);
    const valor5 = Number(inputQuinto.value);

    const sumaValores = valor1 + valor2 + valor3 + valor4 + valor5;
    const restaTresPrimeros = valor1 - valor2 - valor3;
    const restaDosUltimos = valor4 - valor5;
    const multiplicacion = restaTresPrimeros * restaDosUltimos;

    // evitamos dividir entre cero
    let textoDivision;
    if (sumaValores === 0) {
        textoDivision = "no se puede dividir entre 0";
    } else {
        textoDivision = (multiplicacion / sumaValores).toFixed(2);
    }

    cajaResultado.innerHTML =
        "La suma de los 5 valores es: <b>" + sumaValores + "</b><br>" +
        "La resta de los 3 primeros valores es: <b>" + restaTresPrimeros + "</b><br>" +
        "La resta de los 2 últimos valores es: <b>" + restaDosUltimos + "</b><br>" +
        "La multiplicación de las 2 restas es: <b>" + multiplicacion + "</b><br>" +
        "La división de la multiplicación entre la suma es: <b>" + textoDivision + "</b>";
}

// cada vez que se escriba en cualquiera de los inputs, se vuelve a calcular
inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);
inputTercero.addEventListener("input", calcular);
inputCuarto.addEventListener("input", calcular);
inputQuinto.addEventListener("input", calcular);