// carrosel 1(star)
var counter = 1; // a variavel responsável por rastrear o número da respectiva img.

// aqui serão atribuído 2 argumentos (a função setInterval+tempo)
setInterval( function(){
    nextImage(); 
}, 5000)

function nextImage(){
    document.getElementById('radio' + counter).checked = true; // Obtém o elemento de botão de rádio correspondente à imagem atual e o seleciona.
    counter++; // Incrementa o valor de counter em 1 para preparar a exibição da próxima imagem.

    if(counter >4){ // Verifica se o valor de counter é maior do que 4, que é o número máximo de imagens.
        counter=1; // Se for, resete o valor de counter para 1, para reiniciar a exibição das imagens.
    }
}
// carrosel 1(end)



// carrosel 2(start)
const productContainers = [...document.querySelectorAll('.prod-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

// Obtém uma lista de elementos com a classe 'prod-container' e armazena em uma constante 'productContainers'.
// Obtém uma lista de elementos com a classe 'nxt-btn' e armazena em uma constante 'nxtBtn'.
// Obtém uma lista de elementos com a classe 'pre-btn' e armazena em uma constante 'preBtn'.

productContainers.forEach((item, i) => {
    // Para cada elemento 'item' na lista 'productContainers', executa a seguinte função de callback:

    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    // Obtém as dimensões da box do elemento 'item' e armazena a largura em 'containerWidth'.

    nxtBtn[i].addEventListener('click', () => {
        // Adiciona um ouvinte de evento de clique para o elemento 'nxtBtn[i]' (botão próximo) que foi associado ao elemento 'item' atual.
        item.scrollLeft += containerWidth;
        // Quando o botão próximo é clicado, a propriedade scrollLeft do elemento 'item' é atualizada para rolar o conteúdo horizontalmente para a direita em uma quantidade igual à largura do contêiner.
    })

    preBtn[i].addEventListener('click', () => {
        // Adiciona um ouvinte de evento de clique para o elemento 'preBtn[i]' (botão anterior) que foi associado ao elemento 'item' atual.
        item.scrollLeft -= containerWidth;
        // Quando o botão anterior é clicado, a propriedade scrollLeft do elemento 'item' é atualizada para rolar o conteúdo horizontalmente para a esquerda em uma quantidade igual à largura do contêiner.
    })
})
// carrosel 2(end)




