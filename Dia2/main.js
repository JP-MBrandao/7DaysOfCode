const respostaUsuario = document.querySelectorAll('.resposta'); //matriz com as respostas
const clicarEnviar = document.getElementById('botao-enviar'); // pegar o botao enviar

clicarEnviar.onclick = function (){
    if (respostaUsuario[0].value == '' || respostaUsuario[1].value == '' || respostaUsuario[2].value == ''){
        //if para verificar se está tudo preenchido
        alert (`Preencha todos os campos`) 
    }else{
        //retornando a mensagem juntamente com a pergunta
        let respostaPrompt = prompt(`Olá ${respostaUsuario[0].value}, você tem ${respostaUsuario[1].value} anos e já está aprendendo ${respostaUsuario[2].value}! Você gosta de estudar ${respostaUsuario[2].value}? Responda com o número 1 para SIM ou 2 para NÃO.`);

        //Resposta em resposta ao prompt
        if(respostaPrompt == 1){
            alert("Muito bom! Continue estudando e você terá muito sucesso.");
        } else if (respostaPrompt == 2){
            alert("Ahh que pena... Já tentou aprender outras linguagens?");
        } else{
            alert("Hmmm, acho que este não é um argumento válido!")
        }
    }

}
