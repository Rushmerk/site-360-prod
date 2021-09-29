var img = document.createElement("IMG") // pode-se dizer que faz a instancia de uma classe
quantidade_fotos = 60 // quantidade de fotos dentro da pasta desejada



window.onscroll = function() { //tudo começa com o scroll do usuario
    movimentoAtual = parseInt(window.scrollY / 100) // Coleta a posição atual do usuario no eixo Y da janela. Esse int representa a foto
    next(movimentoAtual)
}

function next(movimentoAtual) { //parametro recebido pela window.onscroll
    console.log("função next")

    valor = movimentoAtual.toString()
    console.log("valor: " + valor)

    switch (valor.length) { //estrutura necessaria para se ajustar a quantidade de arquivos
        case 1:
            base = "img/test000"
            break;
        case 2:
            base = "img/test00"
            break;
        case 3:
            base = "img/test0"
            break;

        default:
            break;
    }

    img.src = base + valor + ".jpg" // Definindo a string do img.src
    console.log(img)

    if (valor == 0) { // caso o window.onscroll retorne 0. Se não for feito, nenhuma imagem será exibida
        console.log("ENTROU NO IFFFFFFFFFFFFFFFF")
        img.src = "img/test0001.jpg"
        console.log(img)
        document.getElementById('image').appendChild(img) // Definindo a imagem
    }
    if (valor > quantidade_fotos) { // Caso o window.onscroll retorne um valor maior do que a quantidade de fotos
        console.log("CHEGOU NO FINAAAAAAAAAAAAAAAAALLL")
        img.src = base + quantidade_fotos + ".jpg"
        console.log(img)
        document.getElementById('image').appendChild(img)
    }
}