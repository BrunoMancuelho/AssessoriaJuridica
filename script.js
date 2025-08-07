// Botões do WhatsApp.
document.querySelector('.navButton').addEventListener('click', function () {
    window.open('https://wa.me/5541995132346', '_blank');
});

document.querySelector('.divPrincipalButton').addEventListener('click', function () {
    window.open('https://wa.me/5541995132346', '_blank');
});
//----------------------------------------------------------------------------------------------------------------------------------------
// Inicializa o Flickity para o carrossel2
let flkty2;

function updateMarker2() {
    if (!flkty2) return;

    const index = flkty2.selectedIndex;
    const totalCells = flkty2.slides.length;
    const markerPosition = (index / totalCells) * 5;

    const marker = document.querySelector('.marcador2');
    if (marker) {
        marker.style.left = markerPosition + '%';
    }
}

function initCarousel() {
    if (flkty2) {
        flkty2.destroy(); // Remove o carrossel atual, se já estiver iniciado
    }

    const isMobile = window.innerWidth <= 768;

    flkty2 = new Flickity('.carousel2', {
        cellAlign: isMobile ? 'center' : 'left',
        contain: true,
        wrapAround: true,
        groupCells: isMobile ? 1 : false,
        dragThreshold: 10,
        pageDots: false,
        prevNextButtons: false
    });

    flkty2.on('change', updateMarker2);

    updateMarker2();
}

// Inicializa o carrossel na primeira carga
initCarousel();

// Recria o carrossel ao redimensionar a janela
window.addEventListener('resize', initCarousel);

// Botões de navegação
document.getElementById('btn3').addEventListener('click', function () {
    flkty2.previous();
});

document.getElementById('btn4').addEventListener('click', function () {
    flkty2.next();
});
//----------------------------------------------------------------------------------------------------------------------------------------
// Janela que aparece quando clica no carrossel.
var modal = document.getElementById("modalCarrossel");
var modalTitulo = document.getElementById("modalTitulo");
var modalTexto = document.getElementById("modalTexto");
var fechar = document.querySelector(".fechar");

document.querySelectorAll(".carousel2-cell").forEach(function (cell) {
    cell.addEventListener("click", function () {
        var titulo = cell.getAttribute("data-titulo");
        var conteudo = cell.getAttribute("data-conteudo");

        modalTitulo.textContent = titulo;
        modalTexto.textContent = conteudo;
        modal.style.display = "block";
    });
});

fechar.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//----------------------------------------------------------------------------------------------------------------------------------------
function scrollToSection(id) {
    const target = document.getElementById(id);
    const offset = 75; // ajuste conforme a altura do cabeçalho
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const position = elementRect - bodyRect + offset;

    window.scrollTo({
        top: position,
        behavior: "smooth"
    });
}
//----------------------------------------------------------------------------------------------------------------------------------------

  