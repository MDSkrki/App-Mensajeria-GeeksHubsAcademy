//variable declaration for DOM to be reused inside functions
let side_nav = document.getElementById("side_nav");
let main = document.getElementById("main");
let open_btn = document.getElementById("open_btn");
let messages_view = document.getElementById("messages_view");
let message_input = document.getElementById("message_input");

// Sidebar Navigation Open-Collapse System
const openNav = () => {
    side_nav.style.width = "18em";
    main.style.marginLeft = "18em";
    open_btn.style.display = "none";
}

const closeNav = () => {
    side_nav.style.width = "0";
    main.style.marginLeft = "0";
    open_btn.style.display = "inline";
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
    messageArray.push(message_input.value);
    message_input.value = "";
}

//eventListener to write divs for messages everytime you press enter from input
message_input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        writeMessage();
    }
})

// crear input para dar nombre al canal que se nombra
const channelCreator = () => {
    //create Input
    let div = document.createElement("div");
    div.innerHTML = "<input type='text' id='channelInput'>";
    side_nav.appendChild(div);
    let channelInput = document.getElementById("channelInput");
    channelInput.focus();
    //create channel after pressing 'Enter'
    channelInput.addEventListener("keydown", e => {
        if (e.key == "Enter") {
            if(channelInput.value.length >= 1) {
                let channelName = channelInput.value;
                let div = document.createElement("div");
                div.id = "channelName";
                let a = document.createElement("a");
                //I have to make the button actually remove its associated channel
                a.href = "#";
                a.innerHTML = '#' + channelName;
                div.appendChild(a);
                side_nav.appendChild(div);
                channelArray.push(a.innerHTML);
                channelInput.parentNode.remove();
            } else {
                channelInput.parentNode.remove();
            }
        }
    });
}

console.log(channelArray);
console.log(messageArray);

// I don't understand why this doesn't work yet
const channelDestructor = () => {
    let channelName = document.getElementById("channelName");
    let name = channelName.getElementsByTagName("a").value;
    let i = channelArray.indexOf(name);
    channelArray.splice(i,1);
    channelName.remove();
    console.log("This appears to be executed");
}

