document.body.addEventListener('keyup', (event) => {
    // console.log(event.code);
    // playSound(event.code.toLocaleLowerCase());
    //vindo tudo minusculo atraves da conversao
    playSound(event.code.toLocaleLowerCase());


});

function playSound(sound) {

    let audioElement = document.querySelector(`#s_${sound}`);
    //aqui verifica se o audio elemento é o mesmo selecionado que possui som e aplica o som ao elemento
    if (audioElement) {
        audioElement.play();
    }

}