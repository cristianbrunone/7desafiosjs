//console.log(questions.length);
//Dados iniciais
let currentQuestion = 0;

showQuestion();

//Funções
function showQuestion() { //
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion]; 

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
    }

}