let smell = 0;
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
    smell = smell + 1;
    document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
    
    document.cookie = "smell="+smell+"; path=/;";
}

console.log(getCookie("smell"));
smell = Number(getCookie("smell"));

document.getElementById("smellbutton").onclick = smellIncrease;

document.getElementById("smellLine").innerHTML = "You are " + smell + "% smelly";
