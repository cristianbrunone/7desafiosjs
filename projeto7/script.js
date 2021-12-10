document.querySelector('.neutralArea').addEventListener('click', (event) => {
    // console.log("clicou!");
    //para saber onde clicou em qual area mais especifico
    // console.log("Target", event.target);
    event.target.style.border ='1px solid #FF0000';
});