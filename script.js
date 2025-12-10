// Seleccionar pantalla y botones
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll("button");

// Recorrer cada botón
botones.forEach(boton=> {
    boton.addEventListener("click", ()=> {
        const botonApretado = boton.textContent;

        // Si se apreta AC (Borrar todo)
        if(botonApretado === "AC") {
            pantalla.value = "";
            return;
        }

        // Si se apreta Del (Borrar lo último)
        if(botonApretado === "Del") {
            pantalla.value = pantalla.value.slice(0,-1)
            return;
        }

        //Si se apreta = (Calcular resultado)
        if(botonApretado === "=") {
            try {
                pantalla.value = eval(pantalla.value); // eval() toma el texto y lo calcula matemáticamente
            } catch {
                pantalla.value = "Error";
            }
            return;
        }

        // Resto de botones (Números y operadores)
        pantalla.value += botonApretado;
    });
});