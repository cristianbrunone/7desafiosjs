//console.log(questions.length);
//Dados iniciais
let currentQuestion = 0;

showQuestion();

//Funções
function showQuestion() { //
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion]; 

        console.log(q.question);
    }else {
        //acabaram as questões
    }

}