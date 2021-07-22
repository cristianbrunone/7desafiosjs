//iniciando a logica via js do jogo
// para iniciar o jogo temos que separar as etapas do mesmo então podemos : 
// 1) iniciar o jogo com dados iniciais
//criando o tabuleiro de jogo da velha vazio
let square = {
    a1: '',
    a2: '',
    a3: '',
    b1: 'x',
    b2: '',
    b3: '',
    c1: '',
    c2: 'o',
    c3: ''
};
//vez de quem começará se vai zer X ou 0 , ficará em branco para escolher na hora da jogada
let player = '';
let warning = '';
let playing = false;

reset();

//eventos

document.querySelector('.reset').addEventListener('click', reset);

// document.querySelector('div[data-item]=a1').addEventListener('click', itemClick);
// document.querySelector('div[data-item]=a2').addEventListener('click', itemClick);
// document.querySelector('div[data-item]=a3').addEventListener('click', itemClick);
// document.querySelector('div[data-item]=b1').addEventListener('click', itemClick);
// document.querySelector('div[data-item]=b2').addEventListener('click', itemClick);
// document.querySelector('div[data-item]=b3').addEventListener('click', itemClick);
// document.querySelector('div[data-item]=c1').addEventListener('click', itemClick);
// document.querySelector('div[data-item]=c2').addEventListener('click', itemClick);
// document.querySelector('div[data-item]=c3').addEventListener('click', itemClick);

// ou pode ser feito apenas com 3 linhas da seguinte maneira

document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});


//funções
//aqui na função itemclick quando for clicado sera executado em todos os lugares
function itemClick(event) {
    // console.log(event.target);
    let item = event.target.getAttribute('data-item');
    // console.log("Clicou em ", item);
    if (square[item] == '') {
        square[item] = player;
        renderSquare();
        togglePlayer();
    }
}

function reset() {
    //aqui a função reset ela vai resetar o tabuleiro de jogo
    //limpando primeiro as mensagens de alerta do jogo
    warning = '';

    // gerei um numero aleatório e não será 0 e nem 1
    let random = Math.floor(Math.random() * 2);
    //pode-se fazer assim também
    player = (random === 0) ? 'X' : 'O';

    //se o numero aleatório for 0 então o player começa
    // if (random === 0) {
    //     player = 'X';
    // } else {
    //     player = 'O';
    // }
    //vamos zerar o tabuleiro/quadro de jogo
    for (let i in square) {
        square[i] = '';
    }
    //vamos colocar a primeira jogada apos o reset
    playing = true;
    //ultimo passo é rendezirar a posição do tabuleiro
    renderSquare();
    renderInfo();
}

function renderSquare() {
    for (let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }

    checkGame();
}

function renderInfo() {
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function togglePlayer() {
    //vamos mudar o player para o oposto
    if (player == 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    //pode ser simplificado como abaixo
    // player = (player == 'X') ? 'O' : 'X';
    renderInfo();
}

function checkGame() {
    //vamos verificar se há algum empate
    let empate = true;
    for (let i in square) {
        if (square[i] == '') {
            empate = false;
            break;
        }
    }
    if (empate) {
        //empate
        warning = 'Empate';
        playing = false;
    } else {
        //verificando se há algum vencedor
        let winner = '';
        let row = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
        let column = ['a1', 'b1', 'c1', 'a2', 'b2', 'c2', 'a3', 'b3', 'c3'];
        let diagonal = ['a1', 'b2', 'c3', 'a3', 'b2', 'c1', 'a2', 'b1', 'c3'];
        for (let i in row) {
            if (square[row[i]] == player) {
                winner = player;
                break;
            }
        }
        if (winner == '') {
            for (let i in column) {
                if (square[column[i]] == player) {
                    winner = player;
                    break;
                }
            }
        }
        if (winner == '') {
            for (let i in diagonal) {
                if (square[diagonal[i]] == player) {
                    winner = player;
                    break;
                }
            }
        }
        if (winner == '') {
            //empate
            warning = 'Empate';
            playing = false;
        } else {
            //vencedor
            warning = winner + ' ganhou';
            playing = false;
        }
    }
}