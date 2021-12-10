// document.querySelector('.neutralArea').addEventListener('click', (event) => {
    // console.log("clicou!");
    //para saber onde clicou em qual area mais especifico
    // console.log("Target", event.target);
    // event.target.style.border ='1px solid #FF0000';
    // para verificar onde realmente eu estou clicando existem duas maneiras, vamos ver detalhes
    // console.log("TARGET", event.target);
    // console.log("CURRENT TARGET", event.currentTarget);
// });



//vamos selecionar todos os items

document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});


//Funções dos Itens
function dragStart(event) {

}

function dragEnd(event) {

}

//Funções da Area

