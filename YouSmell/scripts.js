let smell = 0;
let clickpower = 1;
let deleteVerify = false;

function screenRefresh() {
  document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
  document.getElementById("powerLine").innerHTML = "+"+clickpower+"% smell per click";
  document.getElementById("announcetext").innerHTML = ""

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
function smellIncrease() {
    smell = smell + clickpower;
    screenRefresh();    
}
function powerIncrease() {
  if (smell>=100) {
    if (event.ctrlKey && smell>=1000) {
      smell = smell - 1000;
      clickpower = clickpower+10;
      screenRefresh();

    }else if (event.shiftKey && smell>=10000) {
      smell = smell - 10000;
    clickpower = clickpower+100;
    screenRefresh();
    }  
    else {
      smell = smell - 100;
      clickpower = clickpower+1;
      screenRefresh();
    }
    
  }
}
function savecookies() {
  document.cookie = "clickpower="+clickpower+"; path=/;";
  document.cookie = "smell="+smell+"; path=/;";
  document.getElementById("announcetext").innerHTML = "Saved!"


}

function loadcookies() {
  if (Number(getCookie("clickpower")) !=0) {
    smell = Number(getCookie("smell"));
    clickpower= Number(getCookie("clickpower"));
    screenRefresh();
    document.getElementById("announcetext").innerHTML = "Loaded!"
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
    document.getElementById("announcetext").innerHTML = "Reset!"
    location.reload();
  }
  
  
}

console.log(typeof(getCookie("smell")));
console.log(typeof(getCookie("clickpower")));
document.getElementById("smellbutton").onclick = smellIncrease;
document.getElementById("powerbutton").onclick = powerIncrease;
document.getElementById("savebutton").onclick = savecookies;
document.getElementById("loadbutton").onclick = loadcookies;
document.getElementById("deletebutton").onclick = deletesave;
document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
document.getElementById("powerLine").innerHTML = "+"+clickpower+"% smell per click";
screenRefresh();
