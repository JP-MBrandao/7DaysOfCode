//Declarando variáveis
let tentativas = 3;
let numeroAdivinhar = Math.trunc(Math.random()*10);

function clicarEnviar(){
    let valorDigitado = document.getElementById('chute').value
    //impedindo que seja digitado valor errado
    if (valorDigitado < 0 || valorDigitado > 9 || valorDigitado === ''){
        alert('Digite um número entre 0 e 9')
    } else if (Number(valorDigitado) === numeroAdivinhar){          //Caso número correro
        alert(`Parabéns, você acertou o número`);
        window.location.reload();
    } else {                                                        //Caso número errado
        tentativas -= 1
        document.getElementById('tentativas').innerHTML = `${tentativas}`;
    }
    if (Number(tentativas) === 0){                                  //Encerrando as três tentativas
        alert(`Que pena, tente novamente! O número era ${numeroAdivinhar}!`);
        window.location.reload();
    }
}