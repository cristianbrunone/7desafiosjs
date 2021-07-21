//vamos começar pegando as informações do form
//e estamos prevenindo que o usuário digite uma letra errada ou faça alguma ação indesejada com o preventDefault

document.querySelector('.busca').addEventListener('submit', (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    //agora ja tenho acesso ao que o usuario digitou 

    console.log(input);

});