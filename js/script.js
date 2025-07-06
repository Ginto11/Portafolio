let texto = "Nelson Muñoz";
let $span = document.getElementById("nombre");


function escritura(elemento, texto, i = 0) {
    if (i < texto.length) {
        elemento.textContent += texto[i];
        setTimeout(() => escritura(elemento, texto, i + 1), 200);
    } else {
        setTimeout(() => {
            borrarTexto(elemento, texto.length);
        }, 1000);
    }
}

function borrarTexto(elemento, i) {
    if (i > 0) {
        elemento.textContent = elemento.textContent.slice(0, -1);
        setTimeout(() => borrarTexto(elemento, i - 1), 100);
    } else {
        escritura(elemento, texto);
    }
}

escritura($span, texto);