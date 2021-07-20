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


    //iniciando  projeto relógio analógico
    //iniciaremos rotacionando os ponteiros e entendendo a lógica aplicada na rotação
    //nessa lógica é para saber como encontrar cada segundo que se passa dentro do relogio analógico
    //o 90 graus adicionado a formula foi para alinhar o ponteiro de segundo pois ele estava -90 graus e estava dando variação
    let sDeg = ((360 / 60) * second) - 90;
    //criando agora o ponteiro de minutos da mesma forma
    let mDeg = ((360 / 60) * minute) - 90;
    //criando agora o ponteiro das horas da mesma forma, apenas mudando os segundos para horas
    let hDeg = ((360 / 12) * hour) - 90;
    //aqui é aplicada a lógica via js para aparecer o relogio funcionando
    sElement.style.transform = `rotate(${sDeg}deg)`;
    //aqui fica a logica aplicada para transformar a rotação do ponteiro dos minutos
    mElement.style.transform = `rotate(${mDeg}deg)`;
    //aqui fica a logica aplicada no ponteiro de horas
    hElement.style.transform = `rotate(${hDeg}deg`;




}

//adicionando um zero antes do valor menor do que 10 para corrigir a hora.
//se o time for menor que 10, ele retornara um zero junto com o time, se não retornará apenas o time
//refatorando o código para melhorar ainda mais o espaço: segue exemplo melhor
// function fixZero(time) {
//     if (time < 10) {
//         return '0' + time;
//     } else {
//         return time;
//     }
// }
//refatorando a função fica assim com a mesma lógica aplicada
function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}
//aqui ele vai executar de 1 em 1 segundo.
setInterval(updateClock, 1000);
//fazendo a função ser rodada na sequencia, evita o delay de 1 segundo de espera
updateClock();