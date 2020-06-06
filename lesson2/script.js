//Сохраняем ссылки на html-элементы из js
var display = document.getElementById('display');
var btnUp = document.getElementById('btnUp');
var btnDown = document.getElementById('btnDown');
var btnReset = document.getElementById('btnReset');


var count = 0;
var countClicksBtnUp = 0;
var countClicksBtnDown = 0;

btnUp.addEventListener('click', function () {
    //count = count + 1;
    //count +=1;
    count++;
    display.innerText = count;
    countClicksBtnUp++;
    console.clear();
    console.log('Clicks to Up:' + countClicksBtnUp);
})

btnDown.addEventListener ('click', function () {
    //count = count - 1;
    //count -=1;
    count--;
    display.innerText = count;
    countClicksBtnDown++;
    console.clear();
    console.log('Clicks to Down:' + countClicksBtnDown);
})

btnClear.addEventListener('click', function() {
    count = 0;
    display.innerText = count;
    countClicksBtnUp = 0;
    countClicksBtnDown = 0;
    console.clear();
    console.log('Clicks Clear:');
});


// Пример разница innerHTML и innerText
//display.innerHTML = '<p>hello</p>'
//display.innerText = '<p>hello</p>'




//Дoмашка
//1. ДОбавить кнопку обнулить
//2. Добавить подсчет количества нажатий по кнопке btnDown