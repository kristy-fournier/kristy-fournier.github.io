let smell = 0;
function doFunction() {
    document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
    smell = smell + 1;
}

document.getElementById("smellbutton").onclick = doFunction();