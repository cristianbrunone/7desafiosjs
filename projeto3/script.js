//vamos começar pegando as informações do form
//e estamos prevenindo que o usuário digite uma letra errada ou faça alguma ação indesejada com o preventDefault


document.querySelector('.busca').addEventListener('submit', async(event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;
    //agora ja tenho acesso ao que o usuario digitou 

    //console.log(input);
    if (input !== '') {
        clearInfo();
        showWarning('Carregando ...');
        //montando a url para realizar a requisição
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=9a6c9d4f0d4fe89b579a6ceb5c9d1102&units=metric&lang=pt_br`;
        //montando a requisição
        //await significa que ele fará a requisição e irá aguardar o resultado.
        let results = await fetch(url);
        //aqui ele pega o resultado e transforma em jason e aguarda o retorno
        let json = await results.json();
        //console vai mostrar o resultado do json
        // console.log(json);
        //aqui se a pesquisa for válida = 200 entao estou pedindo que ele me traga algumas informações
        if (json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        } else {
            clearInfo();
            showWarning('Não foi possível encontrar o local.');
            //aqui se não for válido então ele irá mostrar uma mensagem de erro
        }
    } else {
        clearInfo(); //aqui limpamos o projeto também caso alguem busque por algo que não faça o menor sentido
    }

});

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

function showInfo(json) {
    showWarning(''); //retirando o nome carregando
    //aqui estou adicionando no html o json que foi pego do servidor
    document.querySelector('.resultado').style.display = 'block';
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>°C</sup>`;
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}<span>km/h</span>`;
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;


}
//essa função vai limpar a tela, evitando erros de usabilidade do app
function clearInfo() {
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
}