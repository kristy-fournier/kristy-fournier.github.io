let map = ["**###","*####","#####","####*","###**"]

for(let i=0;i<5;i++) {
    let tablerow = document.createElement("tr")

    for(let j=0;j<5;j++) {
        let tabledata = document.createElement("td")
        let newinput = document.createElement("input")
        newinput.id = "" + j +":"+ i
        newinput.type = "text"
        if(map[i][j]=="*"){
            newinput.readOnly = true
            newinput.style = "background-color: black; width: 100%; height:100%; border: 0px;font-size: xx-large;text-align: center;"
        } else {
            newinput.style = "width: 100%; height:100%; border: 0px;font-size: xx-large;text-align: center;"
        }
        tabledata.appendChild(newinput)
        tablerow.appendChild(tabledata)
    }
    document.getElementById("tabletable").appendChild(tablerow)
}



function keyPressCheck(event){
    coords = document.activeElement.id.split(":")
    if (event.key=="Enter") {
        if(!(coords[1] == "4")){
            document.getElementById(coords[0]+":"+(parseInt(coords[1])+1)).focus()
        }
    }
    else if (event.key=="Backspace") {
        if(document.activeElement.value.length==0){
            if(coords[0]!=0){
                document.getElementById((parseInt(coords[0])-1)+":"+coords[1]).focus()
            }else if(coords[1]!=0){
                document.getElementById("4:"+(parseInt(coords[1])-1)).focus()
            }
        }
    } else if(event.key=="Tab"){

    } else if(event.key == " "){
        event.preventDefault()
    }
    else{
        event.preventDefault()
        if(!(document.activeElement.readOnly == true)){
            document.activeElement.value = event.key
        }
        if(coords[0]==4 && coords[1]==4) {
            document.getElementById("0:0").focus()
        }
        else if(coords[0]==4){
            document.getElementById("0:"+(parseInt(coords[1])+1)).focus()
        }
        else {
            document.getElementById((parseInt(coords[0])+1)+":"+coords[1]).focus()
        }
    }
}

document.addEventListener("keydown", keyPressCheck);

