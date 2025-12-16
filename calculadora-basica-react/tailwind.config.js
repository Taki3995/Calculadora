// Root en css -> archivo tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "fondo-pagina": "#e3e2e4",
                "calculadora": "#99acff",
                "pantalla": "aliceblue",
                "texto-operacion": "#333",
                "texto-resultado": "rgb(25, 25, 150)",
            },
            borderRadius: {
                "calculadora": "15px"
            }
        },
    },
    plugins: [],
}