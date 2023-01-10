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
    document.cookie = "username=John Doe; expires=Thu, 19 Jan 2023 12:00:00 UTC";
}

function cookilandRet() {
    let cok = document.cookie;
    alert(cok);
}

function cookilandDel() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}