/* function SquareFunc (a, b, c) {
    var D = b * b - 4 * a * c;
    var x1 = 0;
    var x2 = 0;
    if (D < 0)  
    //return "уравнение не имеет корней"
        return null
    if (D == 0) { 
        x1 = - b / (2 * a * c);
        //return `уравнение имеет один корень x = ${x1}`
        return x1
    }
    if (D > 0) {
        x1 = (- b + Math.sqrt(D)) / (2 * a * c);
        x2 = (- b - Math.sqrt(D)) / (2 * a * c);
        //return `x1 = ${x1}; x2 = ${x2}`
        return {x1: x1, x2: x2}
        //return {x1, x2}
    }    
}

console.log(SquareFunc(9, -6, 2));
console.log(SquareFunc(16, -8, 1));
console.log(SquareFunc(2, 5, -7));*/


/*function arr_maker(low, high) {
    // var low = 2;
    // var high = 50;

    if (low > high) {
        //y = [low, low = high][0];
        [low, high] = [high, low]
    };
    console.log(low, high)
    var arr = [];
    var i = low;
    for (i = low; i <= high; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(arr_maker(2, 50));*/


/*var mid = (low + high)/2;

if (lookFor > mid) {
    low = mid;
} else {
    high = low;
}*/

/*function search(low, high, lookFor) {
       var mid = (low + high) / 2;
    for (;mid != lookFor; (low + high) / 2;) {
        if (lookFor == low) return lookFor;
        if (lookFor == high) return lookFor;
        if (lookFor > mid) {
            low = mid;
        } else {
            high = low;
        }
    }
}
search(2, 50, 30);*/

var searchBtn = document.getElementById("search_btn");
searchBtn.addEventListener("click", function () {
    var raw_low = document.getElementById("low").value;
    var low = +(raw_low);
    if (raw_low == "") {
        alert("Введите параметры поиска");
    }
    var high = +(document.getElementById("high").value);
    if (!high) {
        alert("Введите параметры поиска");
    }
    var lookFor = +(document.getElementById("lookFor").value);
    if (!lookFor) {
        alert("Введите параметры поиска");
    }
    var searchResult = document.getElementById("searh_result");

        console.log(low, high, lookFor);
    function search(low, high, lookFor) {
        var i = 0;
        if (low > high) {
            //y = [low, low = high][0];
            [low, high] = [high, low]
        }
        if (lookFor > high) return "заданное число не входит в указанный диапазон";
        if (lookFor < low) return "заданное число не входит в указанный диапазон";
        if (lookFor == low) return i++;
        if (lookFor == high) return i++;
        var mid = Math.round((low + high) / 2);

        while (mid != lookFor) {

            mid = Math.round((low + high) / 2);
            if (lookFor > mid) {
                low = mid;
            }
            else {
                high = mid;
            }
            i++;
            console.log(mid);

            //console.log(i)
        }
        if (mid == lookFor) return i;

    }
    var res = search(low, high, lookFor);
    function setResult(res) {
        searchResult.innerHTML = "";
        searchResult.innerHTML += res;
        
    }

    setResult(res);

    console.log(search(low, high, lookFor));

 })




