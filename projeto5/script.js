let currentColor = 'black';

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

//aqui nessa função iremos pegar as cores, e selecionar elas e alterar a classe active para a cor que eu selecionar

function colorClickEvent(event) {
    let color = event.target.getAttribute('data-color');
    // console.log("COR CLICADA: ", color);,
    currentColor = color;
    document.querySelector('.color.active').classList.remove('active');
    event.target.classList.add('active');
}