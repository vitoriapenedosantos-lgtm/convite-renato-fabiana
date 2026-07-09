document.addEventListener("DOMContentLoaded", () => {

const intro = document.getElementById("intro");
const content = document.getElementById("content");
const button = document.getElementById("openButton");

button.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        content.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        escrever();

    },900);

});

function escrever(){

const texto = "Vocês aceitam ser meus padrinhos de Batismo? 🤍";

const local = document.getElementById("typing");

let i = 0;

function maquina(){

if(i < texto.length){

local.innerHTML += texto.charAt(i);

i++;

setTimeout(maquina,85);

}

}

maquina();

}

});
