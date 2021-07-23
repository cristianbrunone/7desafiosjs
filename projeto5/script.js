//Inicial Data
let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

//selecionar canvas

let screen = document.querySelector('#tela');
//pegando a tela branca da tela do canvas em 2d
let ctx = screen.getContext('2d');

//events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

/*passo a passo para criar o canvas
quando o click do mouse abaixar, ative o modo desenho
quando o mouse se mover, se o modo desenho estiver ativado , desenhe
e quando o click do mouse levantar, desative o modo desenho
*/
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);



//aqui nessa função iremos pegar as cores, e selecionar elas e alterar a classe active para a cor que eu selecionar

//functions
function colorClickEvent(event) {
    let color = event.target.getAttribute('data-color');
    // console.log("COR CLICADA: ", color);,
    currentColor = color;
    document.querySelector('.color.active').classList.remove('active');
    event.target.classList.add('active');
}

//aqui vai ser registrado toda a funcionalidade de clicar o mouse
function mouseDownEvent(event) {
    // console.log("Clicou no Mouse! ");
    canDraw = true;
    mouseX = event.pageX - screen.offsetLeft;
    mouseY = event.pageY - screen.offsetTop;
}
//aqui vai ser registrado o movimento
function mouseMoveEvent(event) {
    // console.log("Moveu o Mouse! ");
    if (canDraw) {
        //console.log("DESENHANDO...!!");
        //console.log(event.clientX, event.clientY);
        //let pointX = event.clientX;
        //let pointY = event.clientY;
        draw(event.pageX, event.pageY);

        // canDraw();
    }
}
//aqui quando ele tirar o dedo do click do mouse
function mouseUpEvent() {
    // console.log("Soltou o Mouse! ");
    canDraw = false;
}

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    //desenhar o ponto
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();


    //desenhar
    mouseX = pointX;
    mouseY = pointY;
}