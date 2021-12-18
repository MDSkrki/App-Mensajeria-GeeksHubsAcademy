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
const channelCreator = () => {
    createInput();
    document.getElementById("channelInput").addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            if(document.getElementById("channelInput").value.length >= 1) {
                let channelName = document.getElementById("channelInput").value;
                let div = document.createElement("div");
                let a = document.createElement("a");
                let button = document.createElement("button");
                button.innerHTML = "&minus;";
                button.onclick = "channelDestructor()";
                //I have to make the button do something
                a.href = "#";
                a.innerHTML = channelName;
                div.appendChild(a);
                div.appendChild(button);
                document.getElementById("side_nav").appendChild(div);
                channelArray.push(a.innerHTML);
                document.getElementById("channelInput").parentNode.remove();
            } else {
                document.getElementById("channelInput").parentNode.remove();
            }
        }
    });
}

console.log(channelArray);

const createInput = () => {
    let div = document.createElement("div");
    div.innerHTML = "<input type='text' id='channelInput'>";
    document.getElementById("side_nav").appendChild(div);
}

// I don't understand why this doesn't work yet
const channelDestructor = () => {
    let div = document.getElementById("channelInput").parentNode;
    let channelName = div.getElementsByTagName("a").value;
    let i = channelArray.indexOf(channelName);
    channelArray.splice(i,1);
    div.remove();
    console.log("This appears to be executed");
}