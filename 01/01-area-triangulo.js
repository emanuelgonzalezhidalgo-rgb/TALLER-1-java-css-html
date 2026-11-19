//==============================
//Ejercicio 1 - Area de un Triangulo
//FORMULA = A = (B*H)/2
//A = AREA 
//B = BASE 
//H = ALTURA
//==============================

//invocamos los inputs en el html y la caja de resultado (por su id)
const ladoUno = document.getElementById("lado1");
const ladoDos = document.getElementById("lado2");
const cajitaResultado = document.getElementById("desarrollo");

function calcular () {
    // si falta  algun valor no se calcula  
    if (ladoUno.value === "" || ladoDos.value === "" ){
        cajitaResultado.textContent = "escriba los 2 valores";
        return;
    }

    // lo que se escribe en un unput es texto: Number ()lo convierte a numero
    const lado1 = Number(ladoUno.value);
    const lado2 = Number(ladoDos.value);

const areaTriangulo = (lado1 * lado2 )/2
cajitaResultado.innerHTML =
    "El area del triangulo es: <br><b>" + areaTriangulo + "</b><br>";
}
ladoUno.addEventListener("input", calcular);
ladoDos.addEventListener("input", calcular);
