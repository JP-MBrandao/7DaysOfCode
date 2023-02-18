//Recebendo as perguntas
let primeiraPrimeira = document.getElementById('primeiraPrimeira');
let primeiraSegunda = document.getElementById('primeiraSegunda');
let segundaQuestao = document.getElementsByClassName('respostaDois')
let tresUm = document.getElementById('tresUm');
let tresDois = document.getElementById('tresDois');
//Recebendo o botão de adicionar
let botaoMais = document.getElementsByClassName('botaoMais');

//Declarando variavéis de respostas
let primeiraResposta = "";
let segundaResposta = "";
let terceiraResposta = "";
let respostaFinal = "";

//Função para esconder/mostrar elementos no HTML
function aparecer() {
    primeiraResposta = "";
    segundaResposta = "";
    //Recebendo primeira resposta
    if(primeiraPrimeira.checked){
        document.getElementById('primeiraSegundaQuestao').style.display = 'block'
        primeiraResposta = primeiraPrimeira.value
    } else{
        document.getElementById('primeiraSegundaQuestao').style.display = 'none'
    }
    if(primeiraSegunda.checked){
        document.getElementById('segundaSegundaQuestao').style.display = 'block'
        primeiraResposta = primeiraSegunda.value
    } else{
        document.getElementById('segundaSegundaQuestao').style.display = 'none'
    }
    //Recebendo segunda resposta
    for (let i=0; i < segundaQuestao.length; i++){
        if(segundaQuestao[i].checked) {
            document.getElementById('terceiraQuestao').style.display = 'block';
            segundaResposta = segundaQuestao[i].value;
        } else{
        }
    }
    //Recebendo terceira resposta
    if (tresUm.checked || tresDois.checked){
        document.getElementById('perguntaFinal').style.display = 'block'
    }
}
//Adicionar mais respostas possíveis
function clicarMais(){
    document.getElementById('perguntaFinal').insertAdjacentHTML("afterend",
    `<label class="pergunta">Tem mais alguma tecnologia que você gostaria de aprender?</label>
    <textarea class="respostaFinal" cols="30" rows="10"></textarea>
    <button value="+" class="botaoMais" onclick="clicarMais()">+</button>`
    )
}
//função para aparecer alerta
function clicarEnviar(){
    //Concatenando respostas
    for(let i=0;i < botaoMais.length;i++){
        if (i === 0){
            respostaFinal = document.getElementsByClassName('respostaFinal')[i].value;
        } else if ((i+1) === botaoMais.length){
            respostaFinal = respostaFinal + " e " + document.getElementsByClassName('respostaFinal')[i].value;
        } else {
            respostaFinal = respostaFinal + ", " + document.getElementsByClassName('respostaFinal')[i].value;
        }
    }
    alert(`Parabéns por escolher a carreira de ${primeiraResposta} focando em ${segundaResposta}! Continue estudando ${respostaFinal}!`)
}