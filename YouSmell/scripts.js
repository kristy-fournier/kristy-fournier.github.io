let smell = 0;
function doFunction() {
    document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly"
}

document.getElementById("smellbutton").onclick = doFunction();