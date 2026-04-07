let texto = "Nelson Muñoz";
let $span = document.getElementById("nombre");

document.getElementById('cerrar-menu').addEventListener('click', e => {
    document.getElementById('menu').classList.toggle('ocultar-links');
    document.getElementById('menu').classList.toggle('contenedor-links-movil');
})

document.getElementById('button-links').addEventListener('click', e => {
    document.getElementById('menu').classList.toggle('ocultar-links');
    document.getElementById('menu').classList.toggle('contenedor-links-movil');

    let etiquetas = [...document.querySelectorAll('#menu a')];

    etiquetas.forEach(a => {
    a.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        menu.classList.add('ocultar-links');
        menu.classList.remove('contenedor-links-movil');
    });
    });

})



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