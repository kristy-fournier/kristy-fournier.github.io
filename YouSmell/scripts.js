let smell = 0;
let clickpower = 1;
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
    document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
    
    document.cookie = "smell="+smell+"; path=/;";
}
function powerIncrease() {
    if (smell>100) {
      smell = smell - 100 
      clickpower = clickpower+1

      document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
      document.getElementById("powerLine").innerHTML = "+"+clickpower+"% smell per click";
      document.cookie = "clickpower="+clickpower+"; path=/;"
    }
}
function test() {
  document.getElementById("announcetext").innerHTML = "this works!"
}
console.log(getCookie("smell"));
smell = Number(getCookie("smell"));
clickpower= Number(getCookie("clickpower"))

document.getElementById("smellbutton").onclick = smellIncrease;
document.getElementById("powerbutton").onclick = powerIncrease;
document.getElementById("savebutton").onclick = test
document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
document.getElementById("powerLine").innerHTML = "+"+clickpower+"% smell per click"