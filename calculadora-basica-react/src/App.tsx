import { useState } from 'react'
import Boton from './components/Boton';

function App() {
  const [input, setInput] = useState(''); 
  const [resultado, setResultado] = useState("0");

  const agregarInput = (valor: string) => {
    setInput(input + valor);
  }

  const limpiar = () => {
    setInput('');
    setResultado("0");
  }

  const borrarUltimo = () => {
    if (input === "Error") {
      setInput(''); 
    } else {
      setInput(input.slice(0, -1)); 
    }
  }

  const calcularResultado = () => {
    try {
      if (input) { 
        setResultado(eval(input).toString());
      }
    } catch (error) {
      setResultado("Error"); 
    }
  }

  return ( 
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      
      <div className="
        /* === BASE (Móvil) === */
        w-[95%] max-w-md h-auto aspect-[3/4]
        
        /* === TABLET & IPAD PRO VERTICAL (md) === */
        md:max-w-lg md:w-[90%] md:aspect-[3/4]

        /* === MÓVIL HORIZONTAL === */
        landscape:h-[85vh] landscape:w-auto landscape:aspect-[5/6]

        /* === PC / LAPTOP (Solo si es GRANDE y HORIZONTAL) === */
        lg:landscape:h-[85vh] lg:landscape:w-auto lg:landscape:aspect-[5/6] lg:landscape:max-w-none
        
        /* === ESTÉTICA === */
        bg-indigo-400 rounded-3xl shadow-2xl flex flex-col p-4
      "> 
          
          {/* Bloque Superior */}
          <div className="flex flex-col gap-3 mb-4 h-1/3 min-h-[140px]">
              
              <h1 className="text-center text-indigo-900 font-bold text-lg tracking-wider opacity-80">
                  Calculadora Básica
              </h1>
              
              <div className="h-full bg-slate-100 rounded-xl shadow-inner flex flex-col justify-between p-4 break-all">
                  
                  {/* === INPUT === */}
                  {/* Móvil: text-3xl (pequeño para que quepa) */}
                  {/* PC: lg:text-5xl (grande) */}
                  <div className="text-gray-500 text-2xl md:text-4xl lg:text-5xl font-medium text-left">
                      {input}
                  </div> 
                  
                  {/* === RESULTADO === */}
                  {/* Móvil: text-5xl (controlado) */}
                  {/* PC: lg:text-6xl (impactante) */}
                  <div className="text-indigo-900 text-2xl md:text-4xl lg:text-5xl font-bold text-right">
                      {resultado}
                  </div>
              </div>
          </div>

          {/* Bloque Inferior (Teclado) */}
          <div className="grid grid-cols-5 grid-rows-4 gap-2 flex-1">
              <Boton texto="7" manejarClic={agregarInput} />
              <Boton texto="8" manejarClic={agregarInput} />
              <Boton texto="9" manejarClic={agregarInput} />
              <Boton texto="Del" clase="bg-red-200 text-red-900 hover:bg-red-400" manejarClic={() => borrarUltimo()} /> 
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
              
              <Boton texto="0" clase="col-span-3" manejarClic={agregarInput} /> 
              <Boton texto="." clase="bg-green-100 text-green-800 hover:bg-green-300" manejarClic={agregarInput} />
              <Boton texto="=" clase="bg-blue-300 text-blue-800 hover:bg-blue-500" manejarClic={() => calcularResultado()} />
          </div>

      </div>
    </div> 
  )
}

export default App