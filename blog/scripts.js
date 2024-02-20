function gotodate() {
    let x = document.getElementById("dateplz").value.substr(0,4)
    let y = document.getElementById("dateplz").value.substr(5,2)
    let z = document.getElementById("dateplz").value.substr(8,2)
    window.open("./"+x+"/"+y+"/"+z,"_self")
}


document.getElementById("GO").onclick= gotodate