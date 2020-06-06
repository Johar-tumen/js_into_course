"use strict";

var x = 10;
var name = "Harry"; 
var isHarry  = true;

//****Массив***** в js может хранить разные типы данных, отсчет значений начинается с нуля
var arr = ["Harry", "Hermiona", 10, true];

// Валид - хранить данные одного типа
var names = ["Harry", "Hermiona", "Ron", "Hagrid"];
var mathConstants = [3.14, 9.8, 2.72];

console.log(names);

// Работа с массивом

/* Добавление в массив*/

var thingsNames = [];
thingsNames.push("boots");
thingsNames.push("toys");
thingsNames.push("cup");
console.log(thingsNames);

/* Чтение из массива*/

console.log(thingsNames[0]);
console.log(thingsNames[1]);
console.log(thingsNames[2]);

/*Массив имеет длину равную количеству элементов*/
console.log(thingsNames.lenght);

var lastThing = thingsNames.pop();
console.log(thingsNames, lastThing);

//****Объекты*****
var car = {
    color: "red",
    maxVelocity: 200,
    controlPosition: "left",
    mass: 2000
}
//color, maxVelocity, controlPosition, mass - это свойства объекта
// Свойства перечисляются через запятую, в конце последнего запятую можно не ставить

var wizard = {
    name: "Harry",
    surname: "Potter",
    age: 19,
}

var message = {
    text: "Hello",
    date: "25.05.2020",
    fromWho: "Ron",
    'user-id': "21212121212" //ключ не рекомендуется именовать через тире
}

//Работа с объктами

console.log(message.text);

//Добавление нового свойства для объекта

message.devise = "X Phone";
console.log(message);

// Получаем значение свойства объекта
//1)
message.date;
//2)
message["user-id"];

/*** Массивы и объекты */

var chat = [
    {
        text: "dfsfsdsdfd asdfasdfas sdfasdf", 
        date: "25.02.2020",
        isMymessage: true,
    },
    {
        text: "asdfasdfassss sdfasdf", 
        date: "25.02.2020",
        isMymessage: false,
    },
    {
        text: "dfsfsdsdfd dfha sdfasdf", 
        date: "25.02.2020",
        isMymessage: true,
    },
    {
        text: "dfsfsdsdfd ", 
        date: "25.02.2020",
        isMymessage: false,
    },
    {
        text: "dfsfsdsdfd dfha fg", 
        date: "25.02.2020",
        isMymessage: true,
    },
    {
        text: "dfsfs dsfsdf dsdfd ", 
        date: "25.02.2020",
        isMymessage: false,
    },
    {
        text: "kljklj  dfha sdfasdf", 
        date: "25.02.2020",
        isMymessage: true,
    },
    {
        text: "dfsfs d555f fdd dd  ddd fgsdsdfd ", 
        date: "25.02.2020",
        isMymessage: false,
    },
]

// Основные операторы в программировании
// for - циклы
// if - условия

var value = 10;
var maxValue = 5;


if (value > maxValue) {
    alert("Слишком высокое значение");
}
else if (maxValue - value === 1){
    console.log ("Значение близко к максимальному");
}
else {
    console.log("Давление стабильно");
}


// Циклы

for (var i = 0; i < 10; i++) {
//var i = 0  - создание итератора, запускает цикл
// i < 10 условие, при котором работает цикл (проверяется в начале каждой итерациии)
// i++ выполняется после каждой итерации
console.log(i);
}


// Цикл с условием в теле

for (var i = 0; i < 10; i++){
    if (i !==5) {
        console.log(i);
    }
}


