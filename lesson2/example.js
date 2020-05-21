// Переменные

// Числовые переменные
var x = 10; // int - целочисленные;
var y = 1.523; // double, float дробные переменные с плавающей точкой;
var z = x + y;

//Мат.операции:
// +, -, *, /, %...

console.log (z);

//Строковые переменные

var word = 'Hello';
var otherWord = 'world';
var sumWords = word + ' ' + otherWord;

// Пример приведения типов:

var description = 'z ='+ z;
console.log(description);

// Можно дать любое имя переменной и хранить в ней любое значение

console.log(sumWords);

// Именование переменных
// Camel style - когда имя переменной из нескольких слов, то каждое слово слитно с первым и начинается с заглавной буквы

var passportData = '7878 455555 Гарри Поттер';

// Типы данных
var num = 10; // число
var str = 'string' ; // строка
var bool = true; // логические данные booLean true или false

//Сложные типы данных ссылочные
var obj = {
    name: 'Гарри',
    age: 19
}

// int -> string
var a = 20;
var aWord = a.toString ();

//string -> int

var bWord = '1000'
var b = parseInt (bWord);

//Дополнительно
// Nan - not a number;
//undefined - не определено;
// null 