/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

/*
document.querySelector("html").onclick = function () {
    alert("Ouch! Stop poking me!");
  };
*/

/*
//換圖片
function changeImage(src) {
    document.querySelector("img").src = "./images/" + src + ".png";
}

document.body.onmousedown = function () {
    changeImage("p1");
}
document.body.onmouseup = function () {
    changeImage("p2");
}
*/



//記數
let count = 0;

function changeImage(src) {
    document.querySelector("img").src = "./images/" + src + ".png";
}

document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent = count;
    changeImage("p1");
}
document.body.onmouseup = function () {
    changeImage("p2");
}