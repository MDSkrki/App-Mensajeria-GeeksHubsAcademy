//variable declaration for DOM to be reused inside functions
let side_nav = document.getElementById("side_nav");
let main = document.getElementById("main");
let open_btn = document.getElementById("open_btn");
let messages_view = document.getElementById("messages_view");
let message_input = document.getElementById("message_input");

// Sidebar Navigation Open-Collapse System
const toggleSideBar = () => {
    if (side_nav.state == "closed") {
        side_nav.style.width = "18em";
        main.style.marginLeft = "18em";
        side_nav.state = "opened";
    } else {
        side_nav.style.width = "0";
        main.style.marginLeft = "0";
        side_nav.state = "closed";
    }
}

//message creation system
let messageArray = [];
let channelArray = [];

const writeMessage = () => {
    let span = document.createElement("span");
    let date = new Date();
    span.id = 'messageContainer';
    span.innerHTML = message_input.value + '</br>' + date.getHours() + 'h ' + date.getMinutes() + 'm ' +date.getSeconds() + 's </br>';
    messages_view.appendChild(span);
    messageArray.push(span);
    message_input.value = "";
}

//eventListener to write divs for messages everytime you press enter from input
message_input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        writeMessage();
    }
})

const channelInputCreator = () => {
    let div = document.createElement("div");
    div.innerHTML = "<input type='text' id='channelInput'>";
    side_nav.appendChild(div);
    let channelInput = document.getElementById("channelInput");
    channelInput.focus();
} 

const channelCreator = () => {
    // create input to name the channel
    channelInputCreator();
    //create channel after pressing 'Enter'
    channelInput.addEventListener("keydown", e => {
        if (e.key == "Enter") {
            if(channelInput.value.length >= 1) {
                let channelName = channelInput.value;
                let div = document.createElement("div");
                div.id = "channel";
                let a = document.createElement("a");
                //let button = document.createElement("button");
                //button.innerHTML = "Eliminar";
                //button.setAttribute("onclick", "channelDestructor()");
                //I have to make the button actually remove its associated channel
                a.href = "#";
                a.innerHTML = '#' + channelName;
                div.appendChild(a);
                //div.appendChild(button);
                side_nav.appendChild(div);
                //Why is this not pushing properly to the array??
                channelArray.push(div);
                channelInput.parentNode.remove();
            } else {
                channelInput.parentNode.remove();
            }
        }
    });
}

// I don't understand why this doesn't work yet, but i'll set it aside until i can figure out what is happening
const channelDestructor = () => {
    let channel = document.getElementById("channel");
    channelArray.pop();
    side_nav.removeChild(channel);
}

console.log(channelArray);
console.log(messageArray);