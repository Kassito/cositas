const boton = document.addEventListener("click", girarDado);
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