//Declarando as funções de operação
function multiplicar (valor1,valor2){
    let resultado = valor1 * valor2
    alert(`O resultado da operação é ${resultado}`)
}
function somar (valor1,valor2){
    let resultado = valor1 + valor2
    alert(`O resultado da operação é ${resultado}`)
}
function dividir (valor1,valor2){
    let resultado = valor1 / valor2
    alert(`O resultado da operação é ${resultado}`)
}
function subtrair (valor1,valor2){
    let resultado = valor1 - valor2
    alert(`O resultado da operação é ${resultado}`)
}
//Declarando função para realizar a operação
function pegarValor(operacao){
    let valor1 = prompt("Qual o primeiro número?");
    let valor2 = prompt("Qual o segundo número?");
    operacao(valor1,valor2);
    calculadora();
}

//Função para executar e receber os valores e posteriormente realizar a conta
function calculadora (){
    let resposta = prompt("O que deseja realizar? Uma multiplicação(*), divisão(/), adição(+), subtração(-) ou sair(S)? ") 

    if (resposta === "*"){
        pegarValor(multiplicar);
    }
    else if (resposta === "+"){
        pegarValor(somar);
    }
    else if (resposta === "/"){
        pegarValor(dividir);
    }
    else if (resposta === "-"){
        pegarValor(subtrair);
    }
    else if (resposta === 'S'){
        alert('até logo');
    }else {
        alert('Digite uma resposta válida! (Apenas o valor em parênteses)');
        calculadora();
    }
}

calculadora();