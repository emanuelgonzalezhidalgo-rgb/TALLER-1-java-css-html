//invocamos los inputs en el html y la caja de resultado (por su id)
const ladoPrimero = document.getElementById("ladoPrimero");
const ladoSegundo = document.getElementById("ladoSegundo");
const cuadradoResultado = document.getElementById("desarrollo");

function calcular () {
    // si falta  algun valor no se calcula  
    if (ladoPrimero.value === "" || ladoSegundo.value === "" ){
        cuadradoResultado.textContent = "escriba los 2 valores";
        return;
    }

    // lo que se escribe en un unput es texto: Number ()lo convierte a numero
    const lado1 = Number(ladoPrimero.value);
    const lado2 = Number(ladoSegundo.value);

const areaCuadrado = lado1 * lado2;
cuadradoResultado.innerHTML =
    "El area del cuadrado es: <br><b>" + areaCuadrado + "</b><br>";
}
ladoPrimero.addEventListener("input", calcular);
ladoSegundo.addEventListener("input", calcular);