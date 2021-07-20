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
    //aqui chamo a função Date que é responsavel pela data hora minutos, segundos, dias, ano, mês, etc
    let now = new Date();
    //aqui chamo as horas
    let hour = now.getHours();
    //aqui chamo os minutos
    let minute = now.getMinutes();
    //aqui chamo os segundos
    let second = now.getSeconds();

    //inserindo a hora no relógio digital

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

}

//adicionando um zero antes do valor menor do que 10 para corrigir a hora.
//se o time for menor que 10, ele retornara um zero junto com o time, se não retornará apenas o time

function fixZero(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

//aqui ele vai executar de 1 em 1 segundo.
setInterval(updateClock, 1000);