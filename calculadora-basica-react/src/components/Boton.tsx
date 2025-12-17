interface BotonProps {
    texto: string;
    clase?: string; // ? indica que es opcional 
    manejarClic: (valor: string) => void;
}

function Boton({ texto, clase, manejarClic }: BotonProps) {
    const colorBase = clase?.includes('bg-') ? '' : 'bg-indigo-100';
    const colorHover = clase?.includes('hover:bg-') ? '' : 'hover:bg-indigo-300'; // si no le doy yo una clase al boton, toma esta default
    return (
        <button
            className={`h-full w-full ${colorBase} text-2xl rounded-xl shadow ${colorHover} ${clase}`}
            onClick={() => manejarClic(texto)}>
            {texto}
        </button>
    );
}

export default Boton;