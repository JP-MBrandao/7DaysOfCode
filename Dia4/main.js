let tentativas = 3;
let numeroAdivinhar = Math.trunc(Math.random()*10);

function clicarEnviar(){
    let valorDigitado = document.getElementById('chute').value
    if (valorDigitado < 0 || valorDigitado > 9 || valorDigitado === ''){
        alert('Digite um número entre 0 e 9')
    } else if (Number(valorDigitado) === numeroAdivinhar){
        alert(`Parabéns, você acertou o número`);
        window.location.reload();
    } else {
        tentativas -= 1
        document.getElementById('tentativas').innerHTML = `${tentativas}`;
    }
    if (Number(tentativas) === 0){
        alert(`Que pena, tente novamente! O número era ${numeroAdivinhar}!`);
        window.location.reload();
    }
}