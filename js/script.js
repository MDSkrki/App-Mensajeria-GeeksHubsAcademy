// Sidebar Navigation Open-Collapse System
const openNav = () => {
    document.getElementById("side_nav").style.width = "18em";
    document.getElementById("main").style.marginLeft = "18em";
    document.getElementById("open_btn").style.display = "none";
}

const closeNav = () => {
    document.getElementById("side_nav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("open_btn").style.display = "inline";
}

//message creation system

let messageArray = [];
let channelArray = [];

const writeMessage = () => {
    let message = document.getElementById("message_input");
    let div = document.createElement("div");
    div.id = 'messageContainer';
    div.innerHTML = message.value;
    document.getElementById("messages_view").appendChild(div);
    messageArray.push(message.value);
    message.value = "";
}

//eventListener to write divs for messages everytime you press enter from input
document.getElementById("message_input").addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        writeMessage();
    }
})

// crear input para dar nombre al canal que se nombra
const inputCreator = () => {
    let div = document.createElement("div");
    div.id = "temporal_input"
    div.innerHTML = "<input type='text' id='new_input'> <input type='submit'>"
}

const channelCreator = () => {
    let a = document.createElement("a");
    a.href = "#"
    a.innerHTML = "Channel name"; //We need to insert from inputCreator()
    document.getElementById("side_nav").appendChild(a);
}
