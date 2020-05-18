var display = document.getElementById('display')
var btnUp = document.getElementById("btn-up")

var count = 0;
function upCount() {
    count = count + 1;
    display.innerHTML = count;
}
btnUp.addEventListener('click',upCount);