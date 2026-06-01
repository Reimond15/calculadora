    var pantalla = document.getElementById("pantalla");
    var lista = document.getElementById("listaHistorial");

    function agregar(valor) {
        pantalla.value += valor;
    }

    function limpiar() {
        pantalla.value = "";
    }

    function calcular() {
        try {
            var expresion = pantalla.value;
            var resultado = eval(expresion);

            var operacion = expresion + " = " + resultado;

            guardarHistorial(operacion);
            pantalla.value = resultado;
        } catch (e) {
            pantalla.value = "Error";
        }
    }

    function guardarHistorial(operacion) {
        var historial = JSON.parse(localStorage.getItem("historial")) || [];
        historial.push(operacion);
        localStorage.setItem("historial", JSON.stringify(historial));
        mostrarHistorial();
    }

    function mostrarHistorial() {
        lista.innerHTML = "";
        var historial = JSON.parse(localStorage.getItem("historial")) || [];

        for (var i = 0; i < historial.length; i++) {
            var li = document.createElement("li");
            li.textContent = historial[i];
            lista.appendChild(li);
        }
    }

    function borrarHistorial() {
        localStorage.removeItem("historial");
        mostrarHistorial();
    }

    // Cargar historial al iniciar
    mostrarHistorial();