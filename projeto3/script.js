//vamos começar pegando as informações do form
//e estamos prevenindo que o usuário digite uma letra errada ou faça alguma ação indesejada com o preventDefault


document.querySelector('.busca').addEventListener('submit', async(event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    //agora ja tenho acesso ao que o usuario digitou 

    //console.log(input);
    if (input !== '') {
        showWarning('Carregando ...');
        //montando a url para realizar a requisição
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=9a6c9d4f0d4fe89b579a6ceb5c9d1102&units=metric&lang=pt_br`;
        //montando a requisição
        //await significa que ele fará a requisição e irá aguardar o resultado.
        let results = await fetch(url);
        //aqui ele pega o resultado e transforma em jason e aguarda o retorno
        let json = await results.json();
        //console vai mostrar o resultado do json
        console.log(json);
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}