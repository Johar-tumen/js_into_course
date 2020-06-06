var tweets = [
    {
        date: "28.05.2020",
        text: "Hello, its my first tweet",
        author: "Harry Potter",
        selected: false,
    },
    {
        date: "27.05.2020",
        text: "Hello, its my first tweet",
        author: "Ron Wisley",
        selected: false,    
    },
    {
        date: "26.05.2020",
        text: "Hello, its my first tweet",
        author: "Harry Potter",
        selected: false,
    },
    {
        date: "25.05.2020",
        text: "Hello, its my first tweet",
        author: "Ron Wisley",
        selected: false,
    },
    {
        date: "20.05.2020",
        text: "Hello, its my first tweet",
        author: "Harry Potter",
        selected: false,
    },
    {
        date: "19.05.2020",
        text: "Hello, its my first tweet",
        author: "Ron Wisley",
        selected: false,
    },
    {
        date: "18.05.2020",
        text: "Hello, its my first tweet",
        author: "Harry Potter",
        selected: false,
    },
];

var tweetsList = document.getElementById("tweets-list");
var btnAdd = document.getElementById("btn-add");
var inputTweet = document.getElementById("input-tweet");

function selectTweet(id) {
    /* if (tweets[id].selected) {
        tweets[id].selected = false 
    } else {
    tweets[id].selected = true;
    } */
    tweets[id].selected = !tweets[id].selected;
    renderTweets();
}


function renderTweets() {
    tweetsList.innerHTML = "";
  
    for (var i = 0; i < tweets.length; i++) {
        var tweet = tweets[i];
        var selectedClass = "";

        if (tweet.selected) {
            selectedClass = "mark-selected"
        }

        tweetsList.innerHTML += `
        <div class="tweet">
            <div class="author">
                <p>
                ${tweet.author}
                </p>
                <div class="mark ${selectedClass}" onclick="selectTweet(${i})"></div>
            </div>            
            <p class="text">
                ${tweet.text}
            </p>
            <p class="date">${tweet.date}</p>
            </div>`
    }
}

inputTweet.addEventListener("input", function(){
    var tweetText = inputTweet.value;

    if (tweetText) {
        btnAdd.classList.remove("disabled");
    }else{
        btnAdd.classList.add("disabled");
    }
});

renderTweets();
btnAdd.addEventListener("click", function(event){
    event.preventDefault();
    var tweetText = inputTweet.value;

    if (!tweetText) return;

    var date = new Date();
    var tweetDate = "";
    var tweetDay = "";
    var tweetMonth = "";
    var tweetHour = "";
    var tweetMinute = "";

    if (date.getDate() < 10) {
        tweetDay = `0${date.getDate()}`
    } else {
        tweetDay = `${date.getDate()}`
    };


    if (date.getMonth() < 9) {
        tweetMonth = `0${date.getMonth()+1}`
    } else {
        tweetMonth = `${date.getMonth()+1}`
    };


     if (date.getHours() < 10) {
        tweetHour = `0${date.getHours()}`
    } else {
        tweetHour = `${date.getHours()}`
    };

    if (date.getMinutes() < 10) {
        tweetMinute = `0${date.getMinutes()}`
    } else {
        tweetMinute = `${date.getMinutes()}`
    };

    tweetDate = `${tweetDay}.${tweetMonth}.${date.getFullYear()} ${tweetHour}:${tweetMinute}`

    // if (date.getMonth() < 9) {
    //     tweetDate = `${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

    // } else {
    //     tweetDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
    // }
    
    var tweet = 
    {
        author: "Dart Vader",
        text: tweetText,
        selected: false,
        date: tweetDate 
    }

    inputTweet.value = "";

    tweets.unshift(tweet);
    renderTweets();
    
})