document.body.addEventListener('keyup', (event) => {
    // console.log(event.code);
    // playSound(event.code.toLocaleLowerCase());
    //vindo tudo minusculo atraves da conversao
    playSound(event.code.toLocaleLowerCase());


});

function playSound(sound) {

    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    //aqui verifica se o audio elemento é o mesmo selecionado que possui som e aplica o som ao elemento
    if (audioElement) {
        audioElement.play();
    }
    //verifica se o elemento existe e atribui a classe active nele, essa classe ja existe no css e deixará com a cor amarela
    if (keyElement) {
        keyElement.classList.add('active');
    }
}