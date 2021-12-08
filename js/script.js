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