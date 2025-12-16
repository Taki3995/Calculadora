// import './Boton.css'

interface BotonProps {
    texto: string;
    clase?: string; // ? indica que es opcional 
    manejarClic: (valor: string) => void;
}

function Boton({ texto, clase, manejarClic }: BotonProps) {
    return (
        <button
            className={clase} // Si le mando clase la usa, si no queda vacío
            onClick={() => manejarClic(texto)}>
            {texto}
        </button>
    );
}

export default Boton;