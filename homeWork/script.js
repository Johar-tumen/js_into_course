var messages = [
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
        date: "26.02.2020",
        isMymessage: false,
    },
    {
        text: "dfsfsdsdfd dfha fg", 
        date: "26.02.2020",
        isMymessage: true,
    },
    {
        text: "dfsfs dsfsdf dsdfd ", 
        date: "27.02.2020",
        isMymessage: false,
    },
    {
        text: "kljklj  dfha sdfasdf", 
        date: "01.03.2020",
        isMymessage: true,
    },
    {
        text: "dfsfs d555f fdd dd  ddd fgsdsdfd ", 
        date: "01.03.2020",
        isMymessage: false,
    },
    {
        text: "dfsfs d555f fdd dd  ddd fgsdsfsdsdf sdfasfasdfas sdfasdfafdsdfd ", 
        date: "02.03.2020",
        isMymessage: false,
    },
]
var chat = document.getElementById("chat");

function renderMessages () {

    // Блок chat очищается от лишнего
    chat.innerHTML = "";
    var prevMessageDate = null;
    for (var i = 0; i < messages.length; i++) {
        var currentMessage = messages[i];

        if (prevMessageDate !=currentMessage.date) {
            chat.innerHTML += `
            <div class="date">
                <span>
                    ${currentMessage.date}
                </span>
            </div>
            `
            prevMessageDate = currentMessage.date
        }


        if (currentMessage.isMymessage) {
            chat.innerHTML += `
            <div class="message message-my">
                <p class="message-text">
                    ${currentMessage.text}
                </p>
            </div>
            `
        } else {
            chat.innerHTML += `
            <div class="message">
                <p class="message-text">
                    ${currentMessage.text}
                </p>
            </div>
            `
        }
    }
}
renderMessages();
