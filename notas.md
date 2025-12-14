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
