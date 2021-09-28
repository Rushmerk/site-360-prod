window.onload = function image() {
    var img = document.createElement("IMG");
    base = "img2/000";
    final = ".png";
    i = 0;


    for (let i = 1; i < 10; i++) {
        console.log(i);
        img.src = base + i + final;
        console.log(img);
        console.log(i);
        document.getElementById('image').appendChild(img);

    }



}

// base = "img/000";
// i = 2;
// final = ".png";

// img.src = base + i + final;
// console.log(img);
// document.getElementById('image').appendChild(img);