// Sidebar Navigation Open-Collapse System
function openNav() {
    document.getElementById("side_nav").style.width = "18em";
    document.getElementById("main").style.marginLeft = "18em";
    document.getElementById("open_btn").style.display = "none";
}

function closeNav() {
    document.getElementById("side_nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("open_btn").style.display = "inline";
}

//message creation system
function writeMessage() {
    let message = document.getElementById("message_input");
    let div = document.createElement("div");
    div.id = 'messageContainer';
    div.innerHTML = message.value;
    document.getElementById("messages_view").appendChild(div);
    message.value = "";
}

let messageArray = [];
let channelArray = [];

//eventListener to write divs for messages everytime you press enter from input
document.getElementById("message_input").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        writeMessage();
    }
})

