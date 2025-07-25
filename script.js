// Botões do WhatsApp.
document.querySelector('.navButton').addEventListener('click', function () {
    window.open('https://wa.me/5541995132346', '_blank');
});

document.querySelector('.divPrincipalButton').addEventListener('click', function () {
    window.open('https://wa.me/5541995132346', '_blank');
});
//----------------------------------------------------------------------------------------------------------------------------------------
// Inicializa o Flickity para o carrossel2
var flkty2 = new Flickity('.carousel2', {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,  // Desativa os botões padrão de navegação
    wrapAround: true,        // Habilita o loop infinito (carrossel reinicia ao chegar no final)
    groupCells: false,       // Desativa a exibição de múltiplas células por vez
    dragThreshold: 10,       // Define a sensibilidade do movimento de arraste
    pageDots: false          // Desativa os pontos de navegação
});

// Função para mover o marcador2
function updateMarker2() {
    var index = flkty2.selectedIndex;  // Obtém o índice da célula selecionada
    var totalCells = flkty2.slides.length;  // Total de células no carrossel
    var markerPosition = (index / totalCells) * 5;  // Calcula a posição do marcador2

    // Atualiza a posição do marcador2
    var marker = document.querySelector('.marcador2');
    if (marker) {
        marker.style.left = markerPosition + '%';
    }
}

// Atualiza o marcador2 ao mudar de imagem
flkty2.on('change', function () {
    updateMarker2();
});

// Personaliza os botões de navegação para o carrossel2
document.getElementById('btn3').addEventListener('click', function () {
    flkty2.previous();  // Retrocede uma imagem por vez
});

document.getElementById('btn4').addEventListener('click', function () {
    flkty2.next();  // Avança uma imagem por vez
});

// Inicializa a posição do marcador2 na primeira célula
updateMarker2();
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