let smell = 0;
let dirt = 0;
let deleteVerify = false;
let dirtcost=100;
let totalgain=1;
function screenRefresh() {
  document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
  document.getElementById("powerLine").innerHTML = "+"+totalgain+"% smell per click";
  document.getElementById("announcetext").innerHTML = "";
  document.getElementById("powerbutton").innerHTML = "+1% smell per click (Cost "+dirtcost+"% smell)";
  totalgain = 1 +(dirt*1);
}

/* this cookie reading thing was ''borrowed'' from the internet*/
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
  }
function dirtcostcalc(){
  return dirtcost +  Math.ceil(((dirt*4)/100)); 
}
function smellIncrease() {
    if (event.ctrlKey) {
      smell=1000000;
    }
    smell = smell + (dirt*1) + 1;
    screenRefresh();    
}
function dirtIncrease() {
  if (smell>=dirtcost) {
    smell = smell - dirtcost;
    dirtcost = dirtcostcalc();
    dirt = dirt+1;
    
    
  }
  screenRefresh();
}
function savecookies() {
  document.cookie = "clickpower="+dirt+"; path=/;";
  document.cookie = "smell="+smell+"; path=/;";
  document.getElementById("announcetext").innerHTML = "Saved!";


}

function loadcookies() {
  if (Number(getCookie("clickpower")) !=0) {
    smell = Number(getCookie("smell"));
    dirt= Number(getCookie("clickpower"));
    dirtcost = dirtcostcalc();
    screenRefresh();
    document.getElementById("announcetext").innerHTML = "Loaded!";
  }else {
    screenRefresh();
    document.getElementById("announcetext").innerHTML = "Error, Do you have a save?"
  }
}
function deletesave() {
  if (deleteVerify == false) {
    deleteVerify = true;
    document.getElementById("announcetext").innerHTML = "Click again to confirm"
  } else if (deleteVerify == true) {
    document.cookie = "clickpower=1; path=/;";
    document.cookie = "smell=0; path=/;";
    document.getElementById("announcetext").innerHTML = "Reset!";
    location.reload();
  }
  
  
}

document.getElementById("smellbutton").onclick = smellIncrease;
document.getElementById("powerbutton").onclick = dirtIncrease;
document.getElementById("savebutton").onclick = savecookies;
document.getElementById("loadbutton").onclick = loadcookies;
document.getElementById("deletebutton").onclick = deletesave;
document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
document.getElementById("powerLine").innerHTML = "+"+dirt+"% smell per click";
screenRefresh();