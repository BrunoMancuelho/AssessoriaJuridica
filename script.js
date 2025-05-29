// Botões do WhatsApp.
document.querySelector('.navButton').addEventListener('click', function () {
    window.open('https://wa.me/5541995132346', '_blank');
});

document.querySelector('.divPrincipalButton').addEventListener('click', function () {
    window.open('https://wa.me/5541995132346', '_blank');
});
//----------------------------------------------------------------------------------------------------------------------------------------
// Troca as imagens do fundo da divPrincipal.
const divPrincipal = document.querySelector('.divPrincipal');

const imagens = [
    'img/assinatura-de-contratos(1).jpg',
    'img/close_up_em_moedas_economizadas_para_despesas_de_crise_de_energia1.jpg',
    'img/empresario-assinando-papeis-de-contrato-importantes(1).jpg',
    'img/empresario-bem-sucedido-trabalhando(1).jpg',
    'img/empresario-trabalhando-em-tablet-em-um-cafe(1).jpg',
    'img/homem-fazendo-seu-proximo-movimento(1).jpg',
    'img/postura-plana-conceito-de-mesa-com-espaco-de-copia(1).jpg',
    'img/retrato_de_um_agricultor_agronomo_bem_sucedido_em_um_campo_de_trigo1.jpg',
    'img/sector-imobiliario(1).jpg',
    'img/vista_monocromatica_empresario_bonito_na_sala_esta_bebendo_bebida.jpg'
];

let index = 0;

function trocarFundo() {
    const gradiente = 'linear-gradient(to right, rgba(0, 32, 96, 0.8), rgba(0, 32, 96, 0.192) 85%)';
    const imagemAtual = imagens[index];
    divPrincipal.style.backgroundImage = `${gradiente}, url('${imagemAtual}')`;

    index++;
    if (index >= imagens.length) index = 0;
}

// Troca imediata
trocarFundo();

// Troca a cada 10 segundos (10000 ms)
setInterval(trocarFundo, 10000);
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
// Cookies
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    if (!localStorage.getItem("cookie-consent")) {
        banner.style.display = "block";
    }

    const handleConsent = (consent) => {
        localStorage.setItem("cookie-consent", consent);
        banner.style.display = "none";
    };

    acceptBtn.addEventListener("click", () => handleConsent("accepted"));
    rejectBtn.addEventListener("click", () => handleConsent("rejected"));
});
//----------------------------------------------------------------------------------------------------------------------------------------