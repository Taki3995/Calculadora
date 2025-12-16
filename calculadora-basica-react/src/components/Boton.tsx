interface BotonProps {
    texto: string;
    clase?: string; // ? indica que es opcional 
    manejarClic: (valor: string) => void;
}

function Boton({ texto, clase, manejarClic }: BotonProps) {
    return (
        <button
            className={`size-14 w-full aspect-square bg-indigo-200 text-2xl rounded-xl shadow hover:bg-indigo-400 ${clase}`}
            onClick={() => manejarClic(texto)}>
            {texto}
        </button>
    );
}

export default Boton;