//variable declaration for DOM to be reused inside functions
let side_nav = document.getElementById("side_nav");
let main = document.getElementById("main");
let open_btn = document.getElementById("open_btn");
let messages_view = document.getElementById("messages_view");
let message_input = document.getElementById("message_input");
let searchInput = document.getElementById("search");
let title = document.getElementById("title");
let selectedChannel = "#default channel";
//Channel naming
title.innerHTML = selectedChannel;

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

//Message Creation System
let messageArray = [];
let channelArray = [];

const writeMessage = () => {
    let div = document.createElement("div");
    div.id = "messageDiv";
    div.class = "messageDiv";
    let span = document.createElement("span");
    span.id = "messages_span";
    let date = new Date();
    let dateSpan = document.createElement("span");
    dateSpan.id = "date_span";
    dateSpan.innerHTML = date.getDate() + '/' + date.getMonth() + '/' +  date.getFullYear() + ' ' + date.getHours() + 'h ' + date.getMinutes() + 'm ' +date.getSeconds() + 's </br>';
    span.innerHTML = message_input.value;
    //create new message object to push to array
    let message = new Object();
    message.value = message_input.value;
    message.date = dateSpan.innerHTML;
    message.channel = selectedChannel;
    messages_view.appendChild(div);
    div.appendChild(span);
    div.appendChild(dateSpan);
    messages_view.scrollTop = messages_view.scrollHeight;
    messageArray.push(message);
    message_input.value = "";
}

//eventListener to write divs for messages everytime you press enter from input
message_input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        writeMessage();
    }
})

// Channel Creation System
// creates input to name the channel
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
                div.class = "channel";
                let a = document.createElement("a");
                let button = document.createElement("button");
                button.innerHTML = "Eliminar";
                a.href = "#";
                a.innerHTML = '#' + channelName;
                div.appendChild(a);
                div.appendChild(button);
                side_nav.appendChild(div);
                channelArray.push(div);
                channelInput.parentNode.remove();
                //channel remove listener
                button.addEventListener("click", () => {
                    for (let i=0;i<channelArray.length;i++) {
                        if (channelArray[i] == button.parentNode) {
                            channelArray.splice(i,1);
                            button.parentNode.remove();
                        } else {
                            console.log("oops something went wrong");
                        }
                    } 
                    
                });
                //channel select listener
                a.addEventListener("click", () => {
                    let displayedMessages = messages_view.getElementsByTagName("div");
                    console.log(displayedMessages);
                    for(let i=0;i<channelArray.length;i++) {
                        if(channelArray[i] == a.parentNode) {
                            selectedChannel = a.innerHTML;
                            title.innerHTML = selectedChannel;
                            for (let j=0;j<messageArray.length;j++) {
                                if (messageArray[j].channel == selectedChannel) {
                                    displayedMessages[j].style.display = "block";
                                } else {
                                    displayedMessages[j].style.display = "none";
                                    console.log("Haha i hid a message");
                                }
                            }
                        }
                    }
                });
            } else {
                channelInput.parentNode.remove();
            }
        }
    });
}

const searchMessages = () => {
    let search = searchInput.value;
    let displayedMessages = messages_view.getElementsByTagName("div");
    for (let i=0; i<messageArray.length;i++) {
        if(messageArray[i].value.toLowerCase().includes(search)) {
            displayedMessages[i].style.display = "block";
        } else if (search == "") {
            break;
        } else {
            displayedMessages[i].style.display = "none";
        }
    }
}

console.log(channelArray);
console.log(messageArray);