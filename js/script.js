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
let channelName = "Testname";

const writeMessage = () => {
    let input = document.getElementById("message_input");
    let messageDiv = document.createElement("span");
    let date = new Date();
    messageDiv.id = 'messageContainer';
    messageDiv.innerHTML = input.value + '</br>' + date.getHours() + 'h ' + date.getMinutes() + 'm ' +date.getSeconds() + 's </br>';
    document.getElementById("messages_view").appendChild(messageDiv);
    messageArray.push(input.value);
    input.value = "";
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
    createInput();
    document.getElementById("channelInput").addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            channelName = document.getElementById("channelInput").value + '!';
            let a = document.createElement("a");
            a.href = "#"
            a.innerHTML = channelName; //We need to insert from inputCreator()
            document.getElementById("side_nav").appendChild(a);
            channelArray.push(a.innerHTML);
            document.getElementById("channelInput").parentNode.remove();
        }
    });
}

console.log(channelArray);

const createInput = () => {
    let div = document.createElement("div");
    div.innerHTML = "<input type='text' id='channelInput'>";
    document.getElementById("side_nav").appendChild(div);
}

