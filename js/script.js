var img = document.createElement("IMG") // pode-se dizer que faz a instancia de uma classe
quantidade_fotos = 60 // quantidade de fotos dentro da pasta desejada
ArrayImg = []

function preloadImages(array) { // não faço IDEIA de como essa função funciona
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.Push(img);
        img.src = array[i];
    }
}

// preloadImages(["url1.jpg", "url2.jpg", "url3.jpg"]);


window.onload = function() {
    console.log("carregou a pagina")
    for (let i = 1; i < quantidade_fotos; i++) {
        console.log("window.onload iniciou o loop")
        _base = verificarTamanho(i) // 2 console.log aqui dentro
        console.log("window.onload valor i: " + i.toString())
        console.log(_base + i + ".jpg")
        ArrayImg.push(_base + i + ".jpg")
        console.log(ArrayImg.length)
    }
    preloadImages(ArrayImg)
}

window.onscroll = function() { //tudo começa com o scroll do usuario
    movimentoAtual = parseInt(window.scrollY / 100) // Coleta a posição atual do usuario no eixo Y da janela. Esse int representa a foto
    next(movimentoAtual)
}

function next(movimentoAtual) { //parametro recebido pela window.onscroll
    console.log("função next")

    valor = movimentoAtual.toString()
    console.log("valor: " + valor + typeof valor)

    _base = verificarTamanho(valor)

    img.src = _base + valor + ".jpg" // Definindo a string do img.src
    console.log(img)

    if (valor == 0) { // caso o window.onscroll retorne 0. Se não for feito, nenhuma imagem será exibida
        console.log("ENTROU NO IFFFFFFFFFFFFFFFF")
        img.src = "img/test0001.jpg"
        console.log(img)
        document.getElementById('image').appendChild(img) // Definindo a imagem
    }
    if (valor > quantidade_fotos) { // Caso o window.onscroll retorne um valor maior do que a quantidade de fotos
        console.log("CHEGOU NO FINAAAAAAAAAAAAAAAAALLL")
        img.src = _base + quantidade_fotos + ".jpg"
        console.log(img)
        document.getElementById('image').appendChild(img) // Coloca a imagem na div correspondente
    }

}

function verificarTamanho(valor) { //estrutura necessaria para se ajustar a quantidade de arquivos

    console.log("verificarTamanho: verificando tamanho do valor")
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
    console.log("verificarTamanho: base " + base_verificada)
    return base_verificada;
}