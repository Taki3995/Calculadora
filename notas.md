# PASAR A REACT

## Instalaciones previas

1. Node.js
2. Vite: Herramienta de construccion veloz. Resuelve el cuello de botella de JavaScript (Arranque de servidor lento y costoso). Arranque instantáneo

## Scaffolding

1. Ejecutar comando
   npm create vite@latest calculadora-basica-react -- --template react-ts

invoca la ultima version del inicializador de vite, nombra el proyecto de react a calculadora-basica-react, y pasa argumentos al inicializador para preseleccinar el preset de react con typescript, evitando prompts inactivos.

tambien se puede con

create-vite@5.2.3
framework react
variant typescript

## Dependencias

Se deben instalar manualmente ya que vite no lo hace

cd calculadora-basica-react
npm install

## Analisis archivos

node_modules -> contiene todas las dependencias del proyecto (react, ts, react dom). no debemos tocarlo
public -> mantiene todos los archivos publicos que el usuario puede ver o descargar
src -> contiene sources, los archivos del codigo fuente
.eslinctr.cjs -> se utiliza para desarrollo
index.html -> index principal del proyecto
package-lock.json -> se genera automaticamente segun package.json
package.json -> contiene todas las dependencias del proyecto y algunos script ejecutables
tsconfig y tsconfig.node -> configurar typescript, no se debe tocar
vite.config -> tampoco se debe tocar

## Tailwind

### Layout (Estructura y Posición)

Estas clases definen cómo se organizan los elementos en la pantalla.

flex: Activa el modo Flexbox (cajas flexibles). Lo usamos para alinear cosas en una sola dirección (fila o columna).

flex-col: Hace que el Flexbox organice los elementos en columna (uno debajo del otro).

justify-center: Centra los elementos en el eje principal (horizontalmente si es fila).

items-center: Centra los elementos en el eje cruzado (verticalmente si es fila).

justify-between: Separa los elementos al máximo (uno al principio, otro al final).

grid: Activa el modo Grid (cuadrícula). Ideal para la botonera.

grid-cols-5: Define que la cuadrícula tendrá exactamente 5 columnas.

col-span-3: Hace que un elemento (como el Cero) se estire y ocupe el espacio de 3 columnas.

gap-3 / gap-5: Pone un espacio (hueco) entre los elementos del grid o flexbox.

### Tamaño y Espaciado

Estas controlan cuánto miden y cuánto aire tienen.

w-full: Ancho del 100% (ocupa todo el espacio disponible).

max-w-md: Ancho máximo mediano. Evita que la calculadora se haga gigante en pantallas grandes.

min-h-screen: Altura mínima del 100% de la pantalla. Asegura que el fondo cubra todo.

h-32: Altura fija (aprox. 128px) para la pantalla de la calculadora.

aspect-square: Fuerza a que el elemento sea cuadrado perfecto (mismo ancho y alto).

aspect-auto: Desactiva el cuadrado perfecto (usado en el cero para que pueda ser rectangular).

p-4, p-5, p-6: Padding (Relleno interno). Da espacio hacia adentro.

### Estética (Colores y Bordes)

Lo que hace que se vea bonita.

bg-slate-200, bg-indigo-400, bg-white: Color de Fondo (Background). El número (200, 400) es la intensidad.

text-white, text-indigo-900: Color del Texto.

rounded-xl, rounded-2xl: Bordes redondeados (Extra Large).

shadow-2xl: Sombra grande y difuminada (para la calculadora).

shadow-md: Sombra mediana (para los botones).

shadow-inner: Sombra hacia adentro (para que la pantalla parezca hundida).

### Tipografía (Texto)

Cómo se ven las letras y números.

text-xl, text-4xl: Tamaño de la fuente (Extra Large, 4x Large).

font-bold: Letra en negrita.

font-medium: Letra con un grosor medio (semi-negrita).

text-center: Alinea el texto al centro.

text-right: Alinea el texto a la derecha (como en las calculadoras reales).

break-all: Obliga a romper la palabra si es muy larga (vital para que los números no se salgan de la pantalla).

tracking-wider: Separa un poco más las letras entre sí (espaciado).

### Interacción y Animación

Lo que pasa cuando tocas los botones.

hover:bg-white: (Hover) Cambia el fondo a blanco cuando pasas el mouse por encima.

active:scale-95: (Active) Reduce el tamaño al 95% cuando haces clic (efecto de presionar).

transition-all: Hace que los cambios de color y tamaño sean suaves y animados, no bruscos.
