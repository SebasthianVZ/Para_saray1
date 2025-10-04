// Array (lista) de frases y sus autores
const frasesDeAmor = [
    {
        frase: "Mi lugar favorito en el mundo es dentro de tu abrazo.",
        autor: "Anónimo"
    },
    {
        frase: "Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección.",
        autor: "Antoine de Saint-Exupéry"
    },
    {
        frase: "Te quiero no por quien eres, sino por quien soy cuando estoy contigo.",
        autor: "Gabriel García Márquez"
    },
    {
        frase: "El amor es la condición en la que la felicidad de otra persona es esencial para la tuya.",
        autor: "Robert A. Heinlein"
    },
    {
        frase: "Donde hay amor hay vida.",
        autor: "Mahatma Gandhi"
    },
    {
        frase: "Lo único que necesito para ser feliz es a ti.",
        autor: "Anónimo"
    }
    // ¡Puedes agregar más frases aquí!
];

// Obtener los elementos del HTML
const fraseDisplay = document.getElementById('frase-display');
const autorDisplay = document.getElementById('autor-display');
const botonCambiar = document.getElementById('boton-cambiar-frase');

// Función para mostrar una frase aleatoria
function mostrarNuevaFrase() {
    // Genera un índice aleatorio basado en la longitud del array
    const indiceAleatorio = Math.floor(Math.random() * frasesDeAmor.length);
    
    // Obtiene la frase seleccionada
    const fraseSeleccionada = frasesDeAmor[indiceAleatorio];
    
    // Actualiza el contenido de los elementos HTML
    fraseDisplay.textContent = `"${fraseSeleccionada.frase}"`;
    autorDisplay.textContent = `- ${fraseSeleccionada.autor}`;
}

// Asigna la función al evento de click del botón
botonCambiar.addEventListener('click', mostrarNuevaFrase);