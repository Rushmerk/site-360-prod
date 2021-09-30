var img = document.createElement("IMG") // pode-se dizer que faz a instancia de uma classe
quantidade_fotos = 60 // quantidade de fotos dentro da pasta desejada
ArrayImg = []

function preload() { // faz o preload das imagens. Ta funcionando perfeitamente
    for (let i = 0; i <= quantidade_fotos; i++) {
        _base = verificarTamanho(i) // 2 console.log aqui dentro
        ArrayImg[i] = new Image();
        ArrayImg[i].src = _base + i + ".jpg"
        console.log(ArrayImg[i].src)
    }
}

preload()

window.onscroll = function() { //tudo começa com o scroll do usuario
    movimentoAtual = parseInt(window.scrollY / 100) // Coleta a posição atual do usuario no eixo Y da janela. Esse int representa a foto
    next(movimentoAtual)
}

function next(movimentoAtual) { //parametro recebido pela window.onscroll
    _valor = movimentoAtual.toString()
    _base = verificarTamanho(_valor)

    img.src = _base + _valor + ".jpg" // Definindo a string do img.src
    console.log(img)

    if (_valor == 0) { // caso o window.onscroll retorne 0. Se não for feito, nenhuma imagem será exibida
        console.log("COMEÇOOOOOOOO")
        img.src = "img/test0001.jpg"
        console.log(img)
        document.getElementById('image').appendChild(img) // Definindo a imagem
    }
    if (_valor > quantidade_fotos) { // Caso o window.onscroll retorne um valor maior do que a quantidade de fotos
        console.log("FINAAAAAAAAAAAAAAAAALLL")
        img.src = _base + quantidade_fotos + ".jpg"
        console.log(img)
        document.getElementById('image').appendChild(img) // Coloca a imagem na div correspondente
    }

}

function verificarTamanho(valor) { //estrutura necessaria para se ajustar a quantidade de arquivos

    this.valor = valor.toString()
    switch (this.valor.length) {
        case 1:
            base_verificada = "img/test000"
            break;
        case 2:
            base_verificada = "img/test00"
            break;
        case 3:
            base_verificada = "img/test0"
            break;
        default:
            break;
    }
    // console.log("verificarTamanho: base " + base_verificada)
    return base_verificada;
}