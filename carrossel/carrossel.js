let prev = document.getElementById("carousel-prev");
let next = document.getElementById("carousel-next");

let product = document.getElementsByClassName("product");

let product_page = Math.ceil(product.length / 4);

let l = 0;
let movePer = 25.34;
let maxMove = 203;

let left_mover = () => {
    l = l - movePer;
    if (l <= 0) {
        l = 0;
    }
    for (const i of product) {
        // if (product_page > 1) {
        i.style.left = "-" + l + "%";
        // }
    }
};

let right_mover = () => {
    l = l + movePer;
    if (product == 1) {
        l = 0;
    }
    for (const i of product) {
        if (l > maxMove) {
            l = l - movePer;
        }
        i.style.left = "-" + l + "%";
    }
};


prev.onclick = () => {
    left_mover();
};

next.onclick = () => {
    right_mover();
};


/* ----------------------- TESTES ---------------------- */

let testes = document.getElementById("testando");

function test() {
    right_mover();
    console.log("right");
}