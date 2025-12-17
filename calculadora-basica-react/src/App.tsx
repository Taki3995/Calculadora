import { useState } from 'react'
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
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4"> {/* engloba todo */}
      <div className="
    /* --- celular y tablet vertical --- */
    w-[90%]             /* se adapta al ancho, pero dejando margen */
    max-w-md            /* para que no quede tan ancho en tablets */
    h-auto              /* Altura automática */
    aspect-[3/4]       /* altura se calcula segun ancho */

    /* --- celular y tablet horizontal --- */
    landscape:h-[80vh]
    landscape:w-auto
    landscape:aspect-[5/6]

    /* --- PC --- */
    md:h-[80vh]         /* Ocupa el 80% de la altura de la pantalla */
    md:w-auto           /* ancho automatico*/
    md:aspect-[5/6]     /* ancho se calcula segun altura */
    md:max-w-none       /* para que no tenga maximo ancho en pc */
    
    /* --- estetica --- */
    bg-indigo-400 
    rounded-3xl 
    shadow-2xl 
    flex flex-col 
    justify-center
    gap-6
    p-5
"> {/* calculadora */}
          <h1 className="text-center text-indigo-900 font-bold text-xl tracking-wider">Calculadora Básica</h1>
          <div className="h-32 bg-slate-100 rounded-xl shadow-inner flex flex-col justify-between p-4 break-all text-right"> {/* pantalla */}
              {/* muestra la operación. Las {} indican que es código JS, no texto */}
              <div className="text-gray-900 text-4xl font-medium h-8">{input}</div> {/*operación*/}
              <div className="text-indigo-900 text-4xl font-medium h-8">{resultado}</div> {/*Resultado*/}
          </div>
          <div className = "grid grid-cols-5 gap-2">
              <Boton texto="7" manejarClic={agregarInput} />
              <Boton texto="8" manejarClic={agregarInput} />
              <Boton texto="9" manejarClic={agregarInput} />
              <Boton texto="Del" clase="bg-red-200 text-red-900 hover:bg-red-400" manejarClic={() => borrarUltimo()} /> {/* Flecha 'anonima' ya que manejar click recibe string pero las funciones especiales no */}
              <Boton texto="AC" clase="bg-red-200 text-red-900 hover:bg-red-400" manejarClic={() => limpiar()} />

              <Boton texto="4" manejarClic={agregarInput} />
              <Boton texto="5" manejarClic={agregarInput} />
              <Boton texto="6" manejarClic={agregarInput} />
              <Boton texto="*" clase="bg-yellow-100 text-orange-800 hover:bg-yellow-300" manejarClic={agregarInput} />
              <Boton texto="/" clase="bg-yellow-100 text-orange-800 hover:bg-yellow-300" manejarClic={agregarInput} />

              <Boton texto="1" manejarClic={agregarInput} />
              <Boton texto="2" manejarClic={agregarInput} />
              <Boton texto="3" manejarClic={agregarInput} />
              <Boton texto="+" clase="bg-yellow-100 text-orange-800 hover:bg-yellow-300" manejarClic={agregarInput} />
              <Boton texto="-" clase="bg-yellow-100 text-orange-800 hover:bg-yellow-300" manejarClic={agregarInput} />
              <Boton texto="0" clase="col-span-3" manejarClic={agregarInput} /> {/* ya no es clase zero, se llama a la o las clases de tailwind que son especificas para este boton*/}
              <Boton texto="." clase="bg-green-100 text-green-800 hover:bg-green-300" manejarClic={agregarInput} />
              <Boton texto="=" clase="bg-blue-300 text-blue-800 hover:bg-blue-500" manejarClic={() => calcularResultado()} />
          </div>
      </div>
    </div> 
  )
}

export default App