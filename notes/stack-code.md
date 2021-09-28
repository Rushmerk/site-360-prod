# Stackoverflow codes

## Aqui está uma maneira um pouco mais limpa de implementar isso. Isso faz as seguintes alterações

O código é dryed um pouco para remover código e sequência redundante e repetidos e strings.
O código é mais genérico/reutilizável.
Nós transformamos o cache em um objeto para que ele tenha uma interface independente e haja menos globais.
Comparamos atributos em vez de elementos DOM para fazê-lo funcionar corretamente..src

Código:

``` js
function imageCache(base, firstNum, lastNum) {
    this.cache = [];
    var img;
    for (var i = firstNum; i <= lastnum; i++) {
        img = new Image();
        img.src = base + i + ".jpg";
        this.cache.push(img);
    }
}

imageCache.prototype.nextImage(id) {
    var element = document.getElementById(id);
    var targetSrc = element.src;
    var cache = this.cache;
    for (var i = 0; i < cache.length; i++) {
        if (cache[i].src) === targetSrc) {
            i++;
            if (i >= cache.length) {
                i = 0;
            }
            element.src = cache[i].src;
            return;
        }
    }
}

// sample usage

var myCache = new imageCache('images/img/Splash_image', 1, 6);
myCache.nextImage("foo");

```

Algumas vantagens dessa abordagem mais orientada a objetos e DRYed:

Você pode adicionar mais imagens apenas criando as imagens nas sequências numéricas e alterando um valor numérico no construtor em vez de copiar muito mais linhas de declarações de matriz.
Você pode usar este mais de um lugar em seu aplicativo apenas criando mais de um objeto imageCache.
Você pode alterar a URL base alterando uma sequência em vez de strings N.
O tamanho do código é menor (por causa da remoção do código repetido).
O objeto de cache poderia ser facilmente estendido para oferecer mais recursos como primeiro, último, pular, etc...
Você pode adicionar o manuseio de erros centralizado em um só lugar, então se uma imagem não existir e não carregar com sucesso, ela será automaticamente removida do cache.
Você pode reutilizar isso em outras páginas da Web que você desenvolve apenas alterando os argumentos para o construtor e não realmente alterando o código de implementação.
P.S. Se você não sabe o que dry significa, é "Don't Repeat Yourself" e basicamente significa que você nunca deve ter muitas cópias de código de aparência semelhante. Sempre que você tem isso, ele deve ser reduzido de alguma forma a um loop ou função ou algo que remove a necessidade de muitas cópias de código semelhantes. O resultado final será menor, geralmente mais fácil de manter e muitas vezes mais reutilizável.