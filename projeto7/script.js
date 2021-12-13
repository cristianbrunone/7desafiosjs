// document.querySelector('.neutralArea').addEventListener('click', (event) => {
    // console.log("clicou!");
    //para saber onde clicou em qual area mais especifico
    // console.log("Target", event.target);
    // event.target.style.border ='1px solid #FF0000';
    // para verificar onde realmente eu estou clicando existem duas maneiras, vamos ver detalhes
    // console.log("TARGET", event.target);
    // console.log("CURRENT TARGET", event.currentTarget);
// });

//aqui irei implementar uma logica para deixar visual as areas quando estiverem ocupadas pelos itens, por enquanto apenas estou informando que estão sem nada, nulas
let areas = {
    a: null,
    b: null,
    c: null
};
//vamos selecionar todos os items

document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

//toda area que vc quiser criar, precisa ter estes 3 eventos , meio que obrigatório, existem outros, mas estes 3 são os principais
document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});
//irei transformar a area neutra em area dropavel, aqui eu apenas capturo a area e adiciono um evento para transformar a mesma em area neutra, lá abaixo irei criar as funções que adicionei
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);


//Funções dos Itens
function dragStart(event) {
    //quando começar a arrastar o item vou colocar uma classe 
    event.currentTarget.classList.add('dragging');
}

function dragEnd(event) {
    //e quando ele parar vou remover essa class
    event.currentTarget.classList.remove('dragging');
}

//Funções da Area

function dragOver(event) {
    //dessa forma eu só adiciona estes elementos quando nao tiver nenhuma area selecionada, ai eles irão aparecer
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
//aqui fica a logica de arrastar e soltar dentro de uma area, se essa area ja tiver um item ela nao será aceita para dropar item selecionado
    if(event.currentTarget.querySelector('.item') === null){
    //pegando o item e jogando dentro do quadrado
    let dragItem = document.querySelector('.item.dragging');
    event.currentTarget.appendChild(dragItem);
    updateAreas();
    }
}

//funcções da area Neutral
//acima eu capturei as areas neutras e adicionei funções a ela aqui irei criar as funções adicionadas anteriormente

function dragOverNeutral(event){
    event.preventDefault();
    event.currentTarget.classList.add('hover');
}

function dragLeaveNeutral(event){
    event.currentTarget.classList.remove('hover');
}

function dropNeutral(event){
    event.currentTarget.classList.remove('hover');
    //aqui ele vai pegar o item selecionado 
    let dragItem = document.querySelector('.item.dragging');
    //e aqui eu tiro de onde tiver e coloco na minha area neutra
    event.currentTarget.appendChild(dragItem);
    updateAreas();

}

//Funções Lógicas

function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');
        if(area.querySelector('.item') !== null){
            areas[name] = area.querySelector('.item').innerHTML;
        }else {
            areas[name] = null;
        }
    });
    // console.log(areas);
    //vou adicionar uma cor nas areas quando estiverem em sequencia
    if(areas.a === '1' && areas.b === '2' && areas.c === '3'){
        //ta na sequencia correta entao
        document.querySelector('.areas').classList.add('correct');
    }else {
        document.querySelector('.areas').classList.remove('correct');
    }

}
