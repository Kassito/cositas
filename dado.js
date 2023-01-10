const boton = document.getElementById("boton");
const cooki = document.getElementById("cooki");
const cookiRet = document.getElementById("cookiRet");
const cookiDel = document.getElementById("cookiDel");


boton.addEventListener("click", girarDado);
cooki.addEventListener("click", cookiland);
cookiRet.addEventListener("click", cookilandRet);
cookiDel.addEventListener("click", cookilandDel);

const images = ["dado1.png", "dado2.png", "dado3.png", "dado4.png", "dado5.png", "dado6.png"];

let dice = document.querySelectorAll("img")

function girarDado(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function() {
        dice.forEach(function(die){
            die.classList.remove("shake");
        });

        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);

        document.getElementById("dadoA").setAttribute("src" , images[dieOneValue]);
        document.getElementById("dadoB").setAttribute("src" , images[dieTwoValue]);

    }, 1000);
}

function cookiland() {
    let data = "Jugador1=60,Jugador2=31,Jugador3=43";
    document.cookie = data + "; expires=Thu, 19 Jan 2023 12:00:00 UTC";
    // document.cookie = "username=Paco Pepe; expires=Thu, 19 Jan 2023 12:00:00 UTC";
    // document.cookie = "username=Maria Josefa; expires=Thu, 19 Jan 2023 12:00:00 UTC";

}

function cookilandRet() {
    let cok = document.cookie;
    alert(cok);
}

function cookilandDel() {
    let cok = document.cookie;
    document.cookie = cok + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


/*
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
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
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
  */