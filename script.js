// Seleccionar pantalla y botones
const operacionDiv = document.querySelector(".operacion");
const resultadoDiv = document.querySelector(".resultado");
const botones = document.querySelectorAll("button");

// Variable para guardar la operación matemática
let operacionActual = "";

// Recorrer cada botón
botones.forEach(boton=> {
    boton.addEventListener("click", ()=> {
        const botonApretado = boton.textContent;

        // Si se apreta AC (Borrar todo)
        if (botonApretado === "AC") {
            operacionActual = "";
            operacionDiv.textContent = "";
            resultadoDiv.textContent = "0"; // Volvemos el resultado a 0
            return;
        }

        // Si se apreta Del (Borrar lo último)
        if(botonApretado === "Del") {
            operacionActual = operacionActual.slice(0,-1);
            operacionDiv.textContent = operacionActual;
            return;
        }

        //Si se apreta = (Calcular resultado)
        if(botonApretado === "=") {
            try {
                // Calcula y muestra solo abajo
                const calculo = eval(operacionActual); 
                resultadoDiv.textContent = calculo;
            } catch {
                resultadoDiv.textContent = "Error";
            }
            return;
        }

        // Resto de botones (Números y operadores)
        operacionActual += botonApretado;
        operacionDiv.textContent = operacionActual;
    });
});