//Сохраняем ссылки на html-элементы из js
var display = document.getElementById('display');
var btnUp = document.getElementById ('btnUp');
var btnDown = document.getElementById ('btnDown');


var count = 0;

btnUp.addEventListener ('click',function () {
    //count = count + 1;
    //count +=1;
    count ++;
    display.innerText = count
})

btnDown.addEventListener ('click',function () {
    //count = count - 1;
    //count -=1;
    count --;
    display.innerText = count
})

// Пример разница innerHTML и innerText
display.innerHTML = '<p>hello</p>'
display.innerText = '<p>hello</p>'




//Даомашка
//1. ДОбавить кнопку обнулить
//2. Добавить подсчет количества нажатий по кнопке btnDown