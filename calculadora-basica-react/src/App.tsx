import { useState } from 'react'
import './App.css'
import Boton from './components/Boton';

function App() {
  // [nombre de la variable, función para cambiarla] = useState(valor inicial)
  // No se puede cambiar solo con input, debe ser setInput, o setCualquiercosa
  const [input, setInput] = useState(''); //estado para la entrada de la calculadora
  
  // Memoria para el resultado
  const [resultado, setResultado] = useState("0");

  // función para agregar valores a la entrada
  const agregarInput = (valor: string) => {
    setInput(input + valor);
  }

  // función para limpiar todo (AC)
  const limpiar = () => {
    setInput('');
    setResultado("0");
  }

  // función para borrar el último carrácter (DEL)
  const borrarUltimo = () => {
    if (input === "Error") {
      setInput(''); // si dice ereror borra todo
    }
    else {
      setInput(input.slice(0, -1)); // borra el ultimo
    }
  }

  // funcion para calcular resultado
  const calcularResultado = () => {
    try {
      if (input) { // Para que calcule solo si hay algo escrito
        // eval() ejecuta las matematicas escritas como string
        // toString() convierte el resutlado en string para mostrarlo
        setResultado(eval(input).toString());
      }
    } catch (error) {
    setResultado("Error"); // si hay un error en la operación, muestra "Error"
    }
  }

  return ( 
    /* A diferencia del codigo html, se quitan todas las etiquetas que indiquen cosas extra que no sean solo de la calculadora*/ 
    /* todo lo demás esta definido automaticamente por react */
    <div className=" calculadora"> 
        <h1>Calculadora Básica</h1>
        <div className="pantalla">
            {/* muestra la operación. Las {} indican que es código JS, no texto */}
            <div className="operacion">{input}</div> {/*muestra la operación (entre llaves para comentarios de jsx)*/}
            <div className="resultado">{resultado}</div> {/*muestra el resultado*/}
        </div>
        <div className = "botones">
            <Boton texto="7" manejarClic={agregarInput} />
            <Boton texto="8" manejarClic={agregarInput} />
            <Boton texto="9" manejarClic={agregarInput} />
            <Boton texto="Del" manejarClic={() => borrarUltimo()} /> {/* Flecha 'anonima' ya que manejar click recibe string pero las funciones especiales no */}
            <Boton texto="AC" manejarClic={() => limpiar()} />

            <Boton texto="4" manejarClic={agregarInput} />
            <Boton texto="5" manejarClic={agregarInput} />
            <Boton texto="6" manejarClic={agregarInput} />
            <Boton texto="*" manejarClic={agregarInput} />
            <Boton texto="/" manejarClic={agregarInput} />

            <Boton texto="1" manejarClic={agregarInput} />
            <Boton texto="2" manejarClic={agregarInput} />
            <Boton texto="3" manejarClic={agregarInput} />
            <Boton texto="+" manejarClic={agregarInput} />
            <Boton texto="-" manejarClic={agregarInput} />
            <Boton texto="0" clase="zero" manejarClic={agregarInput} /> {/*Dar al cero una clase unica para poder cambiar su ancho */}
            <Boton texto="." manejarClic={agregarInput} />
            <Boton texto="=" manejarClic={() => calcularResultado()} />
        </div>
    </div>
  )
}

export default App