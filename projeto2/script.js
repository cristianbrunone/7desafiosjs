//pegando os elementos via js
//no primeiro percorri o html até encontrar a classe digital
let digitalElement = document.querySelector('.digital');
//aqui percorri até encontrar a classe p_s
let sElement = document.querySelector('.p_s');
//aqui percorri o html até encontrar a classe p_m
let mElement = document.querySelector('.p_m');
//aqui percorri o html até encontrar a classe p_h
let hElement = document.querySelector('.p_h');

//vamos criar um time que de 1 em 1 seg ele posiciona os ponteiros confome for necessario
function updateClock() {

}

//aqui ele vai executar de 1 em 1 segundo.
setInterval(updateClock, 1000);