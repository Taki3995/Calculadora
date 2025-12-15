import './App.css'

function App() {
  return ( 
    /* A diferencia del codigo html, se quitan todas las etiquetas que indiquen cosas extra que no sean solo de la calculadora*/ 
    /* todo lo demás esta definido automaticamente por react */
    <div className=" calculadora"> 
        <h1>Calculadora Básica</h1>
        <div className="pantalla">
            <div className="operacion"></div> {/*muestra la operación (entre llaves para comentarios de jsx)*/}
            <div className="resultado">0</div> {/*muestra el resultado*/}
        </div>
        <div className = "botones">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>Del</button>
            <button>AC</button>

            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>*</button>
            <button>/</button>

            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>-</button>
            <button className="zero">0</button> {/*Dar al cero una clase unica para poder cambiar su ancho */}
            <button>.</button>
            <button>=</button>
        </div>
    </div>
  )
}

export default App