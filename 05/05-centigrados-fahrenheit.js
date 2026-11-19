//=====================================================
// EJERCICIO 5 - GRADOS CENTIGRADOS A FAHRENHEIT
// FORMULA: GF = (GC * 9/5) + 32
// GC = grados centigrados
// GF = grados fahrenheit
//=====================================================

// Buscamos en el html el input y la caja de resultado (por su id)
const inputCentigrados = document.getElementById("centigrados");
const cajaResultado = document.getElementById("resultado");

function calcular() {
    // si no hay valor no se calcula
    if (inputCentigrados.value === "") {
        cajaResultado.textContent = "Escriba la temperatura";
        return;
    }

    // lo que se escribe en un input es texto: Number() lo convierte a número
    const GC = Number(inputCentigrados.value);

    // fórmula de conversión
    const GF = (GC * 9 / 5) + 32;

    cajaResultado.innerHTML =
        "Los grados centígrados son: <b>" + GC + " °C</b><br>" +
        "Ya que tenemos los GC y la fórmula, los grados Fahrenheit son: <b>" + GF + " °F</b>";
}

// cada vez que se escriba en el input, se vuelve a calcular
inputCentigrados.addEventListener("input", calcular);