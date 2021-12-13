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

//toda area que vc quiser criar, precisa ter estes 3 eventos , meio que obrigat�rio, existem outros, mas estes 3 s�o os principais
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});
//irei transformar a area neutra em area dropavel, aqui eu apenas capturo a area e adiciono um evento para transformar a mesma em area neutra, l� abaixo irei criar as fun��es que adicionei
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);


//Fun��es dos Itens
function dragStart(event) {
//quando come�ar a arrastar o item vou colocar uma classe 
event.currentTarget.classList.add('dragging');
}

function dragEnd(event) {
    //e quando ele parar vou remover essa class
    event.currentTarget.classList.remove('dragging');
}

//Fun��es da Area

function dragOver(event) {
    //dessa forma eu s� adiciona estes elementos quando nao tiver nenhuma area selecionada, ai eles ir�o aparecer
if(event.currentTarget.querySelector('.item') === null){
// console.log('PASSOU POR CIMA');
event.preventDefault();
event.currentTarget.classList.add('hover');
    }    

}

function dragLeave(event) {
    // console.log('SAIU DE UMA AREA DROPAVEL');
    event.currentTarget.classList.remove('hover');
}

function drop(event) {
//o drop so funciona se eu libero 
// console.log("LIBEROU");
event.currentTarget.classList.remove('hover');
// console.log(dragItem); verificando se eh o item realmente
//descobrindo a area
// console.log(event.currentTarget);
//agora para saber se ja tem algum item dentro da area que estou passando por cima 
//aqui fica a logica de arrastar e soltar dentro de uma area, se essa area ja tiver um item ela nao ser� aceita para dropar item selecionado
if(event.currentTarget.querySelector('.item') === null){
    //pegando o item e jogando dentro do quadrado
    let dragItem = document.querySelector('.item.dragging');
    event.currentTarget.appendChild(dragItem);
    }
}

//func��es da area Neutral
//acima eu capturei as areas neutras e adicionei fun��es a ela aqui irei criar as fun��es adicionadas anteriormente

function dragOverNeutral(){

}

function dragLeaveNeutral(){

}

function dropNeutral(){

}

