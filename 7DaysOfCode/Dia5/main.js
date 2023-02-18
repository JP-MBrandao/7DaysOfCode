//Declarando listas vazias
let listaFrutas = [];
let listaLaticineos = [];
let listaCongelados = [];
let listaDoces = [];
let listaDeLista = [listaFrutas,listaLaticineos,listaCongelados,listaDoces]

//Recebendo resposta sim e não
let respostaSim = document.getElementById('respostaSim');
let respostaNao = document.getElementById('respostaNao');

//Declarando tipo de alimento
let tipoAlimento = document.getElementsByClassName('tipoAlimento');

//Função para sim e não
function simNao() {
    if (respostaSim.checked){
        document.getElementById('lista').style.display = 'block';
    } else if (respostaNao.checked){
        document.getElementById('lista').style.display = 'none';
        alert(`Lista de compras: \nFrutas: ${listaFrutas} \nLaticíneos: ${listaLaticineos} \nCongelados: ${listaCongelados} \nDoces: ${listaDoces}
        `);
    }
}

//Adicionando alimentos no array correto
function adicionarLista(){
    for (let i=0;i < tipoAlimento.length; i++){
        if(tipoAlimento[i].checked){
            listaDeLista[i].push(document.getElementById('alimento').value);
            alert('Alimento adicionado');
            document.getElementById('alimento').value = '';
        }
    }
}
