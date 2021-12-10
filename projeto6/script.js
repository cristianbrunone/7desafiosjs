//console.log(questions.length);
//Dados iniciais
let currentQuestion = 0;

//aqui vou criar uma variavel para saber quantas respostas eu acertei ao terminar o quiz

let correctAnswers = 0;

showQuestion();

//Funções
function showQuestion() { //
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion]; 

    //porcentagem da barra de progresso
    let pct = Math.floor((currentQuestion / questions.length) * 100);

    //mudando a porcentagem da barra 
    document.querySelector('.progress--bar').style.width = `${pct}%`;


        //console.log(q.question);
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;


        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]} </div>`;
        }

       document.querySelector('.options').innerHTML = optionsHtml;
       document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
       });
    }else {
        //acabaram as questões
        finishQuiz();
    }

}

function optionClickEvent(event) {
    // console.log("Clicou em ", event.target.getAttribute('data-op'));
    let clickedOption = parseInt(event.target.getAttribute('data-op'));
    if(questions[currentQuestion].answer === clickedOption) {
        correctAnswers++;
    }
    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.floor((correctAnswers / questions.length) * 100);

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;

    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = '100%';
}